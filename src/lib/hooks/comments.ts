import { FormEvent, useState, useTransition } from "react";
import { getFromLocalStorage } from "../storage";
import { LOCAL_STORAGE_KEYS } from "../enums";
import { AuthenticatedUserType } from "../@type"
import { saveAComment } from "../../firebase/queries/comments.queries";
import { toast } from "react-fox-toast";
import { useReadPostContext } from "../../contexts/ReadArticleContext";
import { fromMarkdowmToMarkup } from "../helpers";


export function usePostComment(postId: string | undefined, callback: () => void) {

    const ctx = useReadPostContext()
    const authUser = getFromLocalStorage<AuthenticatedUserType>(LOCAL_STORAGE_KEYS.AUTHENTICATED_USER)
    const [saving, setSaving] = useState(false)
    const [transition, startTransition] = useTransition()

    return {
        postComment: async (event: FormEvent<HTMLFormElement>) => {

            event.preventDefault()
            setSaving(true)

            try {

                const form = event.currentTarget
                const formData = await new FormData(form)
                const data = Object.fromEntries(formData) as unknown as { content: string }

                if (!data.content || !authUser?.id || !postId) {
                    return
                }

                const comment = {
                    content: await fromMarkdowmToMarkup(data.content),
                    user: authUser.id,
                    postId
                }

                const commentSaved = await saveAComment(comment)

                startTransition(() => {
                    ctx?.setPost(prev => {
                        return { ...prev, comments: [commentSaved, ...prev.comments] }
                    })
                })

                form.reset()
                callback()

            } catch (e) {
                toast.warning("Une petite erreur est survenue !")
            } finally {
                setSaving(false)
            }
        },
        saving,
        addingCommentToPost: transition
    }

}