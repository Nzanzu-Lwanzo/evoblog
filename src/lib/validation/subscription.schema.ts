import { z as zod } from "zod";

const subsciptionSchema = zod.object({
    contact: zod.string().email("Donnée de contact invalide : email ou numéro !").or(
        zod.string().regex(/^(?:\d{10}|\+\d{1,4}-\d{6,14})$/, "Numéro de téléphone invalide !")
    ),
    isEmail: zod.boolean()
})

export default subsciptionSchema