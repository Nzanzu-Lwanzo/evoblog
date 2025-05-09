import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { AuthenticatedUserType } from "../../lib/@type";
import { LOCAL_STORAGE_KEYS } from "../../lib/enums";
import { getFromLocalStorage } from "../../lib/storage";
import { db } from "../config";

const usersCollection = collection(db, "users")

export async function getAUser(uid: string): Promise<AuthenticatedUserType | null> {
    console.log(uid)
    return getFromLocalStorage<AuthenticatedUserType>(LOCAL_STORAGE_KEYS.AUTHENTICATED_USER)
}

export async function saveAUser(user: Omit<AuthenticatedUserType, "newsletter" | "id">): Promise<AuthenticatedUserType> {

    const createdUser = await addDoc(usersCollection, {
        ...user,
        newsletter: false,
    })

    return {
        ...user,
        id: createdUser.id,
        newsletter: false
    } as AuthenticatedUserType

}

export async function saveASubscriber(
    uid: string | undefined,
    data: Pick<AuthenticatedUserType, 'phoneNumber' | 'email'>
) {
    try {
        if (!uid) throw new Error("NO_USER_TO_REFERENCE");

        const docRef = doc(db, "users", uid);

        await setDoc(docRef, { ...data, newsletter: true }, { merge: true });

        return true;
    } catch (e) {
        console.error("Failed to save subscriber:", e);
        return false;
    }
}