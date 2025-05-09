import { AuthenticatedUserType } from "../../lib/@types";
import { LOCAL_STORAGE_KEYS } from "../../lib/enums";
import { getFromLocalStorage } from "../../lib/storage";
import { CreateSubscriptionType, SubscriberType } from "../@types";
import { db } from "../config";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";

export async function saveASubscriber(data: CreateSubscriptionType): Promise<SubscriberType> {

    const user = getFromLocalStorage<AuthenticatedUserType>(LOCAL_STORAGE_KEYS.AUTHENTICATED_USER)

    if (!user) {
        throw new Error("USER_NOT_AUTHENTICATED")
    }

    let subscribedAt = serverTimestamp()
    await setDoc(doc(db, "subscribers", user.id), { ...data, subscribedAt })

    return {
        id: user.id,
        contact: data.contact,
        isEmail: data.isEmail,
        subscribedAt: new Date().toString() //Should change this value,
    }
}