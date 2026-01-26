"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Zap, Users, Headphones, Target } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Solution {
    key: string;
    icon: LucideIcon;
}

const solutions: Solution[] = [
    { key: "time", icon: Zap },
    { key: "leads", icon: Users },
    { key: "support", icon: Headphones },
    { key: "repetitive", icon: Target },
];

export function Solutions() {
    const t = useTranslations("Solutions");

    return (
        <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-radial-[at_top_center] from-brand-100/40 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-500 font-semibold text-sm uppercase tracking-widest mb-4"
                    >
                        {t("label")}
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-slate-900"
                    >
                        {t("title")}
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-6 sm:p-8 rounded-2xl glass hover:border-brand-500/30 transition-all duration-500 hover:translate-y-[-4px]"
                        >
                            {/* Success gradient on hover */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-brand-50 text-brand-500 mb-4 sm:mb-6 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 ring-1 ring-brand-500/20">
                                    <solution.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">
                                    {t(`${solution.key}.title`)}
                                </h3>
                                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                    {t(`${solution.key}.description`)}
                                </p>

                                {/* Checkmark indicator */}
                                <div className="mt-3 sm:mt-4 flex items-center gap-2 text-emerald-600 text-xs sm:text-sm font-medium">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {t(`${solution.key}.result`)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
