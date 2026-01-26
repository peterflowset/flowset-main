"use server";

import { contactSchema, type ContactInput } from "@/types/contact";

export async function sendContactForm(data: ContactInput) {
    // Validate input
    const result = contactSchema.safeParse(data);

    if (!result.success) {
        return { success: false, error: result.error.flatten().fieldErrors };
    }

    // Send to n8n webhook
    try {
        const response = await fetch("https://flowsetagentur.app.n8n.cloud/webhook/formular", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(result.data),
        });

        if (!response.ok) {
            throw new Error("Failed to send to webhook");
        }
    } catch (error) {
        console.error("Webhook error:", error);
        // We still return true to the user but log the error
    }

    return { success: true };
}
