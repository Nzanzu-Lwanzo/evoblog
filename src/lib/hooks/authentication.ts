import { FormEvent, useState } from "react";
import { toast } from "react-fox-toast";
import { createAccountSchema, logInSchema } from "../validation/auth.schema";
import {
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signInWithPopup,
    type AuthProvider
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { AuthenticatedUser, CreateAccountType, LoginType } from "../@types";
import { saveToLocalStorage } from "../storage";
import { LOCAL_STORAGE_KEYS } from "../enums";
import { useNavigate } from "@tanstack/react-router";
import { getUserFromAuthResult } from "../helpers";

export function useAuthenticate(label: "signup" | "login") {

    const schema = label === "signup" ? createAccountSchema : logInSchema
    const [loading, setLoading] = useState(false)
    const navigatetTo = useNavigate()

    return {
        authenticate: async (event: FormEvent<HTMLFormElement>) => {
            try {

                setLoading(true)
                event.preventDefault()

                const formData = new FormData(event.currentTarget);
                const data = Object.fromEntries(formData);

                // Validate the submitted data
                const result = schema.safeParse(data)
                if (!result.success) {
                    console.log(result.error.errors)
                    for (let error of result.error.errors) {
                        toast.info(error.message)
                    }
                    return
                }

                let user: AuthenticatedUser | undefined = undefined

                switch (label) {
                    case "signup": {

                        const data = result.data as CreateAccountType

                        const account = await createUserWithEmailAndPassword(auth, data.email, data.password);

                        // Update the profile
                        await updateProfile(account.user, {
                            displayName: data.name,
                            photoURL: account.user.photoURL,
                        })

                        user = getUserFromAuthResult(account.user)

                        break
                    }

                    case "login": {

                        const data = result.data as unknown as LoginType

                        const account = await signInWithEmailAndPassword(auth, data.email, data.password)

                        user = getUserFromAuthResult(account.user)

                        break
                    }
                }

                if (!user) {
                    throw new Error("THROW_ANYWAYS")
                }

                saveToLocalStorage(LOCAL_STORAGE_KEYS.AUTHENTICATED_USER, user)
                navigatetTo({ to: '/' })

            } catch (e) {

                const error = e as Error

                if (error.message === "THROW_ANYWAYS") {
                    throw new Error("L'authentification a échoué !")
                }

                if (error.message.includes("invalid-credential")) {
                    toast.error("Mot de passe ou email invalide !")
                    return
                }

                toast.error(error.message)

            } finally { setLoading(false) }
        },
        loading
    }
}

export function useOAuth() {

    const navigateTo = useNavigate()

    return {
        authenticate: async (provider: AuthProvider) => {
            try {
                const account = await signInWithPopup(auth, provider)
                const user = getUserFromAuthResult(account.user)
                saveToLocalStorage(LOCAL_STORAGE_KEYS.AUTHENTICATED_USER, user)
                navigateTo({ to: "/" })
            } catch {
                toast.error("Échec, vous êtiez probablement déjà connecté.")
            }
        }
    }

}