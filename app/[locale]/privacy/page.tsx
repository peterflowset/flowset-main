"use client";

import { useTranslations } from "next-intl";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function PrivacyPage() {
    const t = useTranslations("Footer");

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />
            <div className="container mx-auto px-4 pt-40 pb-20">
                <div className="max-w-4xl mx-auto glass p-10 lg:p-16 rounded-[2.5rem]">
                    <h1 className="text-4xl font-bold mb-8 text-slate-900">{t("privacy")}</h1>
                    <div className="prose prose-slate max-w-none">
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Hier finden Sie die Datenschutzerklärung der flowset. Wir legen großen Wert auf den Schutz Ihrer Daten und die Einhaltung der DSGVO.
                        </p>
                        {/* Template placeholder - in real project would extract from old-site/datenschutz.html */}
                        <h2 className="text-2xl font-bold mt-8 mb-4">1. Datenerfassung auf unserer Website</h2>
                        <p className="text-slate-600 mb-4">
                            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
