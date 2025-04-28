import { CreateSubscriptionType } from "../@types";
import { db } from "../config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const subscribersCollection = collection(db, 'subscribers')

export async function saveASubscriber(data: CreateSubscriptionType) {

    try {

        let subscribedAt = serverTimestamp()
        const subscription = await addDoc(subscribersCollection, { ...data, subscribedAt });

        return {
            ...data,
            id: subscription.id,
            subscribedAt,
        }

    } catch (e) {
        console.log(e)
        return
    }

}