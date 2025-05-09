export interface CreateAccountType {
    name: string
    email: string
    password: string
    confirmPassword: string
}

export type LoginType = Omit<CreateAccountType, 'confirmPassword' | 'name'>

export interface AuthenticatedUserType {
    id: string
    name: string | null
    email: string | null
    picture: string | null
}