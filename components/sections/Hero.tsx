"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Sparkles } from "lucide-react";

export function Hero() {
    const t = useTranslations("Hero");

    return (
        <section className="relative min-h-screen flex items-center pt-20 pb-12 lg:pt-24 lg:pb-16 overflow-hidden">
            {/* Grid Pattern */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] -z-10 bg-radial-[at_top_center] from-brand-100/50 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    <div className="lg:w-1/2 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full glass text-brand-600 text-sm font-semibold tracking-wide"
                        >
                            <Sparkles className="w-4 h-4" />
                            {t("badge")}
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
                        >
                            {t("title1")}{" "}
                            <span className="text-brand-500">{t("title2")}</span>{" "}
                            <span className="text-slate-500">{t("title3")}</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                        >
                            {t("description")}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <a
                                href="#contact"
                                className="flex items-center justify-center gap-2 bg-brand-500 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg shadow-brand-500/20 hover:bg-brand-600 transition-all hover:translate-y-[-2px]"
                            >
                                {t("cta_primary")}
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href="#services"
                                className="px-8 py-4 rounded-2xl glass font-medium hover:bg-white/50 transition-all text-slate-700 text-center"
                            >
                                {t("cta_secondary")}
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="mt-8 text-sm text-slate-500 flex items-center justify-center lg:justify-start gap-2"
                        >
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            {t("trust")}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="relative w-full aspect-square max-w-lg mx-auto px-4 sm:px-0">
                            {/* Glass Dashboard Mockup */}
                            <div className="glass absolute inset-4 sm:inset-0 rounded-3xl transform rotate-2 overflow-hidden flex flex-col">
                                <div className="h-10 sm:h-12 border-b border-slate-200/50 bg-white/50 flex items-center px-3 sm:px-4 gap-2">
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-slate-300" />
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-slate-300" />
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-slate-300" />
                                </div>
                                <div className="p-4 sm:p-8 flex-1 flex flex-col gap-4 sm:gap-6">
                                    <div className="flex justify-between items-center">
                                        <div className="h-6 sm:h-8 w-24 sm:w-32 bg-slate-100 rounded-lg animate-pulse" />
                                        <div className="h-6 sm:h-8 w-10 sm:w-12 bg-brand-100 rounded-full" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                        <div className="h-24 sm:h-32 bg-slate-50/50 rounded-xl sm:rounded-2xl border border-slate-100 p-3 sm:p-4 flex flex-col justify-between">
                                            <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-brand-500" />
                                            <div className="h-2 w-12 sm:w-16 bg-slate-200 rounded" />
                                        </div>
                                        <div className="h-24 sm:h-32 bg-slate-50/50 rounded-xl sm:rounded-2xl border border-slate-100 p-3 sm:p-4 flex flex-col justify-between">
                                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs sm:text-base">
                                                %
                                            </div>
                                            <div className="h-2 w-14 sm:w-20 bg-slate-200 rounded" />
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-slate-50/50 rounded-xl sm:rounded-2xl border border-slate-100 p-4 sm:p-6 space-y-3 sm:space-y-4">
                                        <div className="h-2 w-full bg-slate-200 rounded" />
                                        <div className="h-2 w-2/3 bg-slate-200 rounded" />
                                        <div className="h-2 w-5/6 bg-slate-200 rounded" />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge - positioned inside on mobile, outside on larger screens */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-2 right-2 sm:-bottom-4 sm:-right-4 lg:-bottom-6 lg:-right-6 glass p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl z-20 border-white/50"
                            >
                                <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-brand-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/30">
                                        <Bot className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] sm:text-xs text-slate-500 font-medium uppercase tracking-wider">Efficiency Boost</p>
                                        <p className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">+40%</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
