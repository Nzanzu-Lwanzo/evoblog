import { FormEvent, useState } from "react";
import { toast } from "react-fox-toast";
import { createAccountSchema, logInSchema } from "../validation/auth.schema";
import {
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    type AuthProvider
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { AuthenticatedUserType, CreateAccountType, LoginType } from "../@type";
import { removeFromLocalStorage, saveToLocalStorage } from "../storage";
import { LOCAL_STORAGE_KEYS } from "../enums";
import { useNavigate } from "@tanstack/react-router";
import { getUserFromAuthResult } from "../helpers";
import { FirebaseError } from "firebase/app";
import { saveAUser } from "../../firebase/queries/users.queries";
import { useAppContext } from "../../contexts/AppContext";

export function useAuthenticate(label: "signup" | "login") {

    const schema = label === "signup" ? createAccountSchema : logInSchema
    const [loading, setLoading] = useState(false)
    const navigatetTo = useNavigate()

    return {
        authenticate: async (event: FormEvent<HTMLFormElement>) => {

            event.preventDefault()

            try {

                setLoading(true)

                const formData = new FormData(event.currentTarget);
                const data = Object.fromEntries(formData);

                // Validate the submitted data
                const result = schema.safeParse(data)
                if (!result.success) {
                    for (let error of result.error.errors) {
                        toast.info(error.message)
                    }
                    return
                }

                let user: Omit<AuthenticatedUserType, "newsletter" | "id"> | undefined = undefined

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

                // Create an account in acustom firestore collection, for use cases like comments
                const authUser = await saveAUser(user)

                // Save to local storage for later referencing
                saveToLocalStorage(LOCAL_STORAGE_KEYS.AUTHENTICATED_USER, authUser)
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

    const appCtx = useAppContext()
    const navigate = useNavigate()

    return {
        authenticate: async (provider: AuthProvider) => {
            try {

                const account = await signInWithPopup(auth, provider)
                const user = getUserFromAuthResult(account.user)

                // Create an account in acustom firestore collection, for use cases like comments
                const authUser = await saveAUser(user)
                appCtx?.setAuthUser(authUser)

                saveToLocalStorage(LOCAL_STORAGE_KEYS.AUTHENTICATED_USER, authUser)
                navigate({ to: "/" })

            } catch (e) {
                const error = e as FirebaseError

                if (error.message.includes("auth/popup-closed-by-user")) {
                    toast.error("Échec, la fenêtre a été fermée de manière innattendue.")
                    return
                }

                /*
                    Si l'utilisateur se connecte avec Google, et qu'ensuite il essaie de se connecter
                    un compte Github ayant la même adresse email, il aura une erreur. En fait, ce n'est 
                    pas vraiment une erreur, mais un message d'erreur de Firebase. Il faut juste
                    lui dire que son compte a été connecté.
                */
                if (error.message.includes("auth/account-exists-with-different-credential")) {
                    toast.success("Votre compte a été connecté !")
                    navigate({ to: "/" })
                    return
                }
            }
        }
    }

}

export function useLogOut() {

    const appCtx = useAppContext()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    return {
        logout: () => {
            setLoading(true)
            signOut(auth)
                .then(() => {
                    removeFromLocalStorage(LOCAL_STORAGE_KEYS.AUTHENTICATED_USER)
                    appCtx?.setAuthUser(null)
                    toast.success("Vous êtes déconnecté !")
                    navigate({ to: "/" })
                })
                .catch(() => toast.error("Échec de la déconnexion !"))
                .finally(() => setLoading(false))
        },
        loggingOut: loading
    }

}