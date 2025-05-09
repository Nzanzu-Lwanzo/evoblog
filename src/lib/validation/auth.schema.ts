import { z } from 'zod';

const passwordSchema = z
    .string()
    .min(6, " Le mot de passe doit contenir au moins 6 caractères.")
    .max(12, "Le mot de passe doit contenir au maximum 12 caractères.")

const nameSchema = z
    .string()
    .min(3, "Le nom doit contenir au moins 3 caractères.")
    .max(20, "Le nom doit contenir au maximum 20 caractères.")
    .regex(/^[a-zA-Z0-9]+$/, "Le nom ne doit contenir que des lettres et des chiffres.")

const emailSchema = z
    .string()
    .email("Votre email est invalide.")

export const createAccountSchema = z.object({
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema
})
    .refine((data) => data.password !== data.name, {
        message: "Le mot de passe ne doit pas être le même que le nom.",
        path: ["password"]
    })

export const logInSchema = z.object({
    email: emailSchema,
    password: passwordSchema
})