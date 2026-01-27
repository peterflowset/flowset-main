"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

export function Footer() {
    const t = useTranslations("Footer");

    return (
        <footer className="bg-slate-950 text-slate-400 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/logos/flowset_logo.png"
                                alt="flowset Logo"
                                width={140}
                                height={40}
                                className="brightness-0 invert opacity-90"
                            />
                        </Link>
                        <p className="text-lg text-slate-400 leading-relaxed max-w-sm">
                            {t("description")}
                        </p>
                        <div className="flex gap-4 mt-8">
                            <a href="https://linkedin.com/company/flowset" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 transition-colors">
                                <Linkedin className="w-5 h-5 text-white" />
                            </a>
                            <a href="https://instagram.com/flowset.ai" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 transition-colors">
                                <Instagram className="w-5 h-5 text-white" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 lowercase tracking-tight">{t("contact")}</h4>
                        <ul className="space-y-4">
                            <li><a href="mailto:info@flowset.ai" className="hover:text-brand-400 transition-colors">info@flowset.ai</a></li>
                            <li><span className="block text-sm text-slate-500 mt-2">Südtirol, Italien</span></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 lowercase tracking-tight">{t("legal")}</h4>
                        <ul className="space-y-4">
                            <li><Link href="/privacy" className="hover:text-brand-400 transition-colors">{t("privacy")}</Link></li>
                            <li><Link href="/imprint" className="hover:text-brand-400 transition-colors">{t("imprint")}</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm">
                        © {new Date().getFullYear()} flowset. All rights reserved.
                    </p>
                    <p className="text-sm font-semibold tracking-wide">
                        {t("created_by")}
                    </p>
                </div>
            </div>
        </footer>
    );
}
