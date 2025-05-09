import { FormEvent, useState } from "react";
import subsciptionSchema from "../validation/subscription.schema";
import { saveASubscriber } from "../../firebase/queries/subscribers.queries";
import { CreateSubscriptionType } from "../../firebase/@types";
import { toast } from "react-fox-toast";
import { saveToLocalStorage } from "../storage";
import { LOCAL_STORAGE_KEYS } from "../enums";
import { isValidEmail } from "../helpers";
import { FirebaseError } from "firebase/app";
import { useNavigate } from "@tanstack/react-router";

const getData = (form: HTMLFormElement) => {
    const formData = new FormData(form);

    let contact = formData.get('contact') as string
    const data = {
        contact: contact,
        isEmail: isValidEmail(contact)
    }

    return data as unknown
}

export function useSubscribeToNewsletter() {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    return {
        loading,
        subscribeToNewsletter: async (event: FormEvent<HTMLFormElement>) => {

            try {

                setLoading(true)

                event.preventDefault()

                const data = getData(event.currentTarget)
                const validationResult = subsciptionSchema.safeParse(data)

                if (validationResult.error) {

                    for (let error of validationResult.error.errors) {
                        toast.warning(error.message)
                    }

                    setLoading(false)
                    return
                }

                // Save to firebase
                const saved = await saveASubscriber(data as CreateSubscriptionType)

                if (!saved) {
                    toast.error("Erreur, donnée non sauvegardée, réessayez !")
                    return
                }

                // store in the local storage
                saveToLocalStorage(LOCAL_STORAGE_KEYS.SUBSCRIPTION_DATA, saved)

                // Success toast message
                toast.success("Merci de vous être abonnés !")

            } catch (e) {

                const error = e as Error | FirebaseError

                if (error.message.includes("USER_NOT_AUTHENTICATED")) {
                    toast.info("Vous devez être connecté pour vous abonner à la newsletter !")
                    return navigate({ to: "/auth/login" })
                }

                toast.error("Une erreur est survenue, réessayez !")

            } finally {
                // Reset the loading state
                setLoading(false)
            }

        }
    }

}
