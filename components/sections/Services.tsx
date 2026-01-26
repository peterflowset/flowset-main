"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Compact CRM Dashboard Preview
function CRMDashboard() {
    return (
        <div className="relative w-full h-full bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className="h-6 bg-slate-50 border-b border-slate-100 flex items-center px-2 gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>

            {/* Content */}
            <div className="p-2 space-y-2">
                {/* Stats Row */}
                <div className="flex gap-1.5">
                    <div className="flex-1 bg-brand-50 rounded p-1.5">
                        <p className="text-[8px] text-slate-500">Leads</p>
                        <p className="text-xs font-bold text-brand-600">247</p>
                    </div>
                    <div className="flex-1 bg-emerald-50 rounded p-1.5">
                        <p className="text-[8px] text-slate-500">Gewonnen</p>
                        <p className="text-xs font-bold text-emerald-600">89</p>
                    </div>
                </div>

                {/* Chart */}
                <div className="bg-slate-50 rounded p-1.5 h-10">
                    <div className="flex items-end justify-between h-full gap-0.5">
                        {[35, 55, 40, 70, 50, 85, 60].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.03, duration: 0.3 }}
                                className="flex-1 bg-gradient-to-t from-brand-500 to-brand-400 rounded-sm"
                            />
                        ))}
                    </div>
                </div>

                {/* Contact List */}
                <div className="space-y-1">
                    {[
                        { name: "Max M.", status: "Neu" },
                        { name: "Anna S.", status: "Offen" },
                    ].map((contact, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-1.5 bg-white rounded p-1 border border-slate-100"
                        >
                            <div className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center text-[6px] font-medium text-slate-600">
                                {contact.name.charAt(0)}
                            </div>
                            <span className="text-[8px] flex-1 text-slate-700">{contact.name}</span>
                            <span className="text-[6px] px-1 py-0.5 rounded bg-brand-100 text-brand-600">
                                {contact.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Compact Website Browser Preview
function WebsitePreview() {
    return (
        <div className="relative w-full h-full bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden">
            {/* Browser Header */}
            <div className="h-5 bg-slate-100 border-b border-slate-200 flex items-center px-1.5 gap-0.5">
                <div className="w-1 h-1 rounded-full bg-red-400" />
                <div className="w-1 h-1 rounded-full bg-amber-400" />
                <div className="w-1 h-1 rounded-full bg-emerald-400" />
                <div className="flex-1 mx-1 h-2 bg-slate-200 rounded text-[5px] text-slate-400 flex items-center justify-center">
                    flowset.ai
                </div>
            </div>

            {/* Page Content Mockup */}
            <div className="p-1.5 space-y-1.5">
                <div className="space-y-0.5">
                    <div className="h-2 w-[70%] bg-slate-800 rounded" />
                    <div className="h-1.5 w-[50%] bg-slate-300 rounded" />
                </div>
                <div className="w-10 h-3 bg-brand-500 rounded" />
                <div className="flex gap-0.5">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex-1 h-6 bg-slate-50 rounded border border-slate-100" />
                    ))}
                </div>
            </div>

            {/* Speed indicator */}
            <div className="absolute bottom-1 right-1 bg-emerald-500 text-white text-[7px] font-bold px-1.5 py-0.5 rounded-full">
                0.8s
            </div>
        </div>
    );
}

// Compact Chat Interface Preview
function ChatInterface() {
    return (
        <div className="w-full h-full bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden flex flex-col">
            {/* Chat Header */}
            <div className="h-6 bg-brand-500 flex items-center px-2 gap-1.5 shrink-0">
                <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                    </svg>
                </div>
                <span className="text-[8px] text-white font-medium">flowset Bot</span>
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>

            {/* Messages */}
            <div className="p-1.5 space-y-1.5 bg-slate-50 flex-1">
                <div className="bg-white rounded rounded-tl-none p-1.5 text-[7px] text-slate-600 shadow-sm max-w-[85%]">
                    Hallo! Wie kann ich helfen?
                </div>
                <div className="bg-brand-500 rounded rounded-tr-none p-1.5 text-[7px] text-white ml-auto max-w-[85%]">
                    Öffnungszeiten?
                </div>
                <div className="bg-white rounded rounded-tl-none p-1.5 text-[7px] text-slate-600 shadow-sm max-w-[85%]">
                    Mo-Fr: 8-18 Uhr
                </div>
            </div>

            {/* Input */}
            <div className="h-5 border-t border-slate-200 flex items-center px-1.5 bg-white shrink-0">
                <div className="flex-1 h-3 bg-slate-100 rounded text-[6px] text-slate-400 flex items-center px-1">
                    Nachricht...
                </div>
            </div>
        </div>
    );
}

// Compact Phone Call Animation
function PhoneAnimation() {
    return (
        <div className="w-full h-full flex items-center justify-center relative">
            <div className="relative flex items-center justify-center">
                {/* Pulsating background glow */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute w-20 h-20 bg-brand-500 rounded-full blur-xl"
                />

                {/* Animated ripple rings */}
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0.8, opacity: 0.5 }}
                        animate={{ scale: 2.2, opacity: 0 }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 1,
                            ease: "easeOut",
                        }}
                        className="absolute w-12 h-12 rounded-full border border-brand-400/50"
                    />
                ))}

                {/* Main Phone button */}
                <motion.div
                    animate={{
                        scale: [1, 1.08, 1],
                        boxShadow: [
                            "0 0 0px 0px rgba(59, 130, 246, 0)",
                            "0 0 20px 5px rgba(59, 130, 246, 0.3)",
                            "0 0 0px 0px rgba(59, 130, 246, 0)"
                        ]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white border border-white/20"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </motion.div>
            </div>

            {/* Status text */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] text-slate-500 font-medium whitespace-nowrap">
                <span className="inline-flex items-center gap-1 bg-white/80 px-2 py-0.5 rounded-full border border-slate-100">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                    24/7 erreichbar
                </span>
            </div>
        </div>
    );
}

// Count-up animation hook
function useCountUp(end: number, duration: number = 2) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [isInView, end, duration]);

    return { count, ref };
}

// Compact Stats Card Component
function StatsCard() {
    const { count: effCount, ref: effRef } = useCountUp(40);
    const { count: availCount, ref: availRef } = useCountUp(24);
    const { count: respCount, ref: respRef } = useCountUp(2);

    return (
        <div className="h-full flex flex-col justify-center gap-3 p-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div ref={effRef} className="text-center">
                <p className="text-2xl font-bold text-brand-400">+{effCount}%</p>
                <p className="text-slate-400 text-[10px] mt-0.5">Effizienzsteigerung</p>
            </div>
            <div ref={availRef} className="text-center">
                <p className="text-2xl font-bold text-emerald-400">{availCount}/7</p>
                <p className="text-slate-400 text-[10px] mt-0.5">Erreichbarkeit</p>
            </div>
            <div ref={respRef} className="text-center">
                <p className="text-2xl font-bold text-amber-400">&lt;{respCount}s</p>
                <p className="text-slate-400 text-[10px] mt-0.5">Antwortzeit</p>
            </div>
        </div>
    );
}

export function Services() {
    const t = useTranslations("Services");

    return (
        <section id="services" className="py-16 lg:py-20 bg-slate-50/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-500 font-semibold text-sm uppercase tracking-widest mb-3"
                    >
                        {t("label")}
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                    >
                        {t("title")}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 text-base lg:text-lg"
                    >
                        {t("description")}
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    {/* CRM - Large Card (2 cols on lg) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group bg-white rounded-2xl overflow-hidden lg:col-span-2 border border-slate-200 shadow-sm hover:shadow-lg hover:border-brand-200 transition-all duration-300"
                    >
                        <div className="flex flex-col md:flex-row">
                            {/* Text Content */}
                            <div className="p-5 md:w-1/2 lg:w-2/5">
                                <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-brand-50 text-brand-500 mb-3">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold mb-1.5 text-slate-900">{t("crm.title")}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {t("crm.description")}
                                </p>
                            </div>
                            {/* Graphic */}
                            <div className="md:w-1/2 lg:w-3/5 p-3 md:p-4 bg-slate-50/50">
                                <div className="h-36 md:h-full">
                                    <CRMDashboard />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Websites */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg hover:border-brand-200 transition-all duration-300"
                    >
                        <div className="flex flex-col h-full">
                            {/* Text Content */}
                            <div className="p-5">
                                <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-brand-50 text-brand-500 mb-3">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold mb-1.5 text-slate-900">{t("websites.title")}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {t("websites.description")}
                                </p>
                            </div>
                            {/* Graphic */}
                            <div className="p-3 pt-0 flex-1 min-h-[100px]">
                                <WebsitePreview />
                            </div>
                        </div>
                    </motion.div>

                    {/* Chatbots */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg hover:border-brand-200 transition-all duration-300"
                    >
                        <div className="flex flex-col h-full">
                            {/* Text Content */}
                            <div className="p-5">
                                <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-brand-50 text-brand-500 mb-3">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold mb-1.5 text-slate-900">{t("chatbots.title")}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {t("chatbots.description")}
                                </p>
                            </div>
                            {/* Graphic */}
                            <div className="p-3 pt-0 flex-1 min-h-[130px]">
                                <ChatInterface />
                            </div>
                        </div>
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg hover:border-brand-200 transition-all duration-300"
                    >
                        <div className="flex flex-col h-full">
                            {/* Text Content */}
                            <div className="p-5">
                                <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-brand-50 text-brand-500 mb-3">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold mb-1.5 text-slate-900">{t("phone.title")}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {t("phone.description")}
                                </p>
                            </div>
                            {/* Graphic */}
                            <div className="p-3 pt-0 flex-1 min-h-[100px]">
                                <PhoneAnimation />
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="rounded-2xl overflow-hidden shadow-sm"
                    >
                        <StatsCard />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
