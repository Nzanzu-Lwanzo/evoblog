import { AuthenticatedUserType } from "../../lib/@types";
import { LOCAL_STORAGE_KEYS } from "../../lib/enums";
import { getFromLocalStorage } from "../../lib/storage";
import { CreateSubscriptionType } from "../@types";
import { db } from "../config";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";

// const subscribersCollection = collection(db, 'subscribers')

export async function saveASubscriber(data: CreateSubscriptionType) {

    const user = getFromLocalStorage<AuthenticatedUserType>(LOCAL_STORAGE_KEYS.AUTHENTICATED_USER)

    if (!user) {
        throw new Error("USER_NOT_AUTHENTICATED")
    }

    let subscribedAt = serverTimestamp()
    await setDoc(doc(db, "subscribers", user.id), data)

    return {
        ...data,
        id: user.id,
        subscribedAt,
    }

}