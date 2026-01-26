"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { sendContactForm } from "@/lib/actions";
import { type ContactInput } from "@/types/contact";
import { CheckCircle2, Loader2, Send } from "lucide-react";

export function Contact() {
    const t = useTranslations("Contact");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            message: formData.get("message") as string,
        };

        try {
            const result = await sendContactForm(data as ContactInput);
            if (result.success) {
                setIsSuccess(true);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="contact" className="py-16 lg:py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto glass rounded-[2.5rem] p-8 lg:p-16 flex flex-col lg:flex-row gap-16 border-white">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                            {t.rich("title", {
                                span: (chunks) => <span className="text-brand-500 italic">{chunks}</span>
                            })}
                        </h2>
                        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                            {t("description")}
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-500">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">Kostenlose Erstberatung</p>
                                    <p className="text-slate-500">Persönlich oder Digital</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-500">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">Individueller Fahrplan</p>
                                    <p className="text-slate-500">Auf Ihren Betrieb zugeschnitten</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center p-8 bg-brand-50 rounded-3xl"
                            >
                                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white mb-6 shadow-xl">
                                    <CheckCircle2 className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{t("success_title")}</h3>
                                <p className="text-slate-600 italic">{t("success_message")}</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        placeholder={t("placeholder_name")}
                                        className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all font-medium"
                                    />
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        placeholder={t("placeholder_email")}
                                        className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all font-medium"
                                    />
                                    <input
                                        name="phone"
                                        type="tel"
                                        required
                                        placeholder={t("placeholder_phone")}
                                        className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all font-medium md:col-span-2"
                                    />
                                </div>
                                <textarea
                                    name="message"
                                    rows={4}
                                    placeholder={t("placeholder_message")}
                                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all font-medium resize-none"
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-brand-500 text-white font-bold py-5 rounded-2xl shadow-lg shadow-brand-500/20 flex items-center justify-center gap-3 hover:bg-brand-600 transition-all disabled:opacity-70"
                                >
                                    {isSubmitting ? (
                                        <Loader2 className="w-6 h-6 animate-spin" />
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            {t("submit")}
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
