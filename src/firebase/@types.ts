export interface SubscriberType {
    id: string;
    contact: string;
    isEmail: boolean;
    subscribedAt: string
}

export type CreateSubscriptionType = Omit<SubscriberType, 'id' | 'subscribedAt'>