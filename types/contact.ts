import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(1, "Name ist erforderlich"),
    email: z.string().email("Ungültige E-Mail Adresse"),
    phone: z.string().min(1, "Telefonnummer ist erforderlich"),
    message: z.string().optional(),
    company: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
