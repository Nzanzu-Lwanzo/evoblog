import { FormEvent, useState } from "react";
import subsciptionSchema from "../validation/subscription.schema";
import { saveASubscriber } from "../../firebase/queries/subscribers.queries";
import { CreateSubscriptionType, SubscriberType } from "../../firebase/@types";
import { toast } from "react-fox-toast";
import { getFromLocalStorage, removeFromLocalStorage, saveToLocalStorage } from "../storage";
import { LOCAL_STORAGE_KEYS } from "../enums";
import { isValidEmail } from "../helpers";
import { FirebaseError } from "firebase/app";
import { useNavigate } from "@tanstack/react-router";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useAppContext } from "../../contexts/AppContext";

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

    const appCtx = useAppContext()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    return {
        loading,
        subscribeToNewsletter: async (event: FormEvent<HTMLFormElement>) => {

            event.preventDefault()
            setLoading(true)

            try {

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

                // store in the local storage & state
                saveToLocalStorage(LOCAL_STORAGE_KEYS.SUBSCRIPTION_DATA, saved)
                appCtx?.setSubscriptionData(saved)

                // Success toast message
                toast.success("Vous avez été abonné à la newsletter avec succès !")

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

export function useUnsubscribeFromNewsletter() {

    const appCtx = useAppContext()
    const subscribedUser = getFromLocalStorage<SubscriberType>(LOCAL_STORAGE_KEYS.SUBSCRIPTION_DATA)
    const [loading, setLoading] = useState(false)

    return {
        unsubscribe: async () => {

            setLoading(true)

            try {
                if (!subscribedUser) {
                    toast.info("Aucune souscription trouvée !")
                    return
                }

                const docRef = doc(db, "subscribers", subscribedUser.id)

                deleteDoc(docRef).then(() => {
                    appCtx?.setSubscriptionData(null)
                    removeFromLocalStorage(LOCAL_STORAGE_KEYS.SUBSCRIPTION_DATA)
                })

                toast.success("Vous vous êtes désabonné avec succès !")

                return

            } catch {
                toast.error("Une erreur est survenue, réessayez !")
            } finally {
                setLoading(false)
            }
        },
        loading
    }
}