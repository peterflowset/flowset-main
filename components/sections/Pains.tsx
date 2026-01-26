"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Clock, UserX, MessageCircleX, Repeat } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface PainPoint {
    key: string;
    icon: LucideIcon;
}

const painPoints: PainPoint[] = [
    { key: "time", icon: Clock },
    { key: "leads", icon: UserX },
    { key: "support", icon: MessageCircleX },
    { key: "repetitive", icon: Repeat },
];

export function Pains() {
    const t = useTranslations("Pains");

    return (
        <section className="py-16 lg:py-20 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial-[at_center] from-red-100/30 via-amber-50/20 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-4"
                    >
                        {t("label")}
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900"
                    >
                        {t("title")}
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
                    {painPoints.map((pain, index) => (
                        <motion.div
                            key={pain.key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-red-200 transition-all duration-300"
                        >
                            {/* Subtle gradient on hover */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-50/50 to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-red-50 text-red-500 mb-4 sm:mb-6 group-hover:bg-red-100 transition-colors ring-1 ring-red-100">
                                    <pain.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">
                                    {t(`${pain.key}.title`)}
                                </h3>
                                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                    {t(`${pain.key}.description`)}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
