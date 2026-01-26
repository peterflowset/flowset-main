"use client";

import { useTranslations } from "next-intl";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function ImprintPage() {
    const t = useTranslations("Footer");

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />
            <div className="container mx-auto px-4 pt-40 pb-20">
                <div className="max-w-4xl mx-auto glass p-10 lg:p-16 rounded-[2.5rem]">
                    <h1 className="text-4xl font-bold mb-8 text-slate-900">{t("imprint")}</h1>
                    <div className="prose prose-slate max-w-none">
                        <h2 className="text-2xl font-bold mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
                        <p className="text-slate-600 mb-6">
                            flowset.ai<br />
                            Südtirol, Italien
                        </p>
                        <h2 className="text-2xl font-bold mt-8 mb-4">Kontakt</h2>
                        <p className="text-slate-600 mb-6 font-medium">
                            E-Mail: info@flowset.ai
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
