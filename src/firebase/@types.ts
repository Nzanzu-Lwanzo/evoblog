export interface SubscriberType {
    id: string;
    contact: string;
    isEmail: boolean;
    name: string | undefined
    subscribedAt: string
}

export type CreateSubscriptionType = Omit<SubscriberType, 'id'>