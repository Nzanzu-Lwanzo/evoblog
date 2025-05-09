import { addDoc, collection, serverTimestamp, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import { AuthenticatedUserType, CommentType, CreateCommentType } from "../../lib/@type";
import { getFromLocalStorage } from "../../lib/storage";
import { LOCAL_STORAGE_KEYS } from "../../lib/enums";
import { getAUser } from "./users.queries";

const commentsCollection = collection(db, "comments")

export async function saveAComment(comment: CreateCommentType): Promise<CommentType> {

    const commentSaved = await addDoc(
        commentsCollection,
        { ...comment, createdAt: serverTimestamp() }
    )

    const user = getFromLocalStorage<AuthenticatedUserType>(LOCAL_STORAGE_KEYS.AUTHENTICATED_USER)!

    return {
        id: commentSaved.id,
        content: comment.content,
        postId: comment.postId,
        user: user,
        createdAt: new Date().toString(),

    }
}

export async function getPostComments(postId: string) {

    const snapshot = await getDocs(query(commentsCollection, where("postId", "==", postId)))
    const comments = snapshot.docs.map(async (comment) => {

        let uid = comment.data().user
        let user = await getAUser(uid)

        return {
            ...comment.data({ serverTimestamps: "estimate" }),
            id: comment.id,
            user,
        }
    })

    return comments as unknown as Array<Promise<CommentType>>

}