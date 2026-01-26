"use client";

import { useTranslations } from "next-intl";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export function Process() {
    const t = useTranslations("Process");
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const steps = [1, 2, 3, 4];

    return (
        <section id="process" className="py-16 lg:py-20 bg-white" ref={containerRef}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        {t("title")}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 text-lg"
                    >
                        {t("description")}
                    </motion.p>
                </div>

                <div className="max-w-4xl mx-auto relative px-4">
                    {/* Vertical Progress Line */}
                    <div className="absolute left-8 lg:left-1/2 top-4 bottom-4 w-[2px] bg-slate-100 -translate-x-1/2 overflow-hidden">
                        <motion.div
                            style={{ scaleY, originY: 0 }}
                            className="absolute inset-0 bg-brand-500 origin-top"
                        />
                    </div>

                    <div className="space-y-16 lg:space-y-20">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`relative flex items-center gap-12 lg:gap-0 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                    }`}
                            >
                                {/* Content */}
                                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? "lg:pr-16 text-left" : "lg:pl-16 text-left lg:text-right"
                                    } pl-12 lg:pl-0`}>
                                    <div className="glass p-8 rounded-3xl group hover:border-brand-500/30 transition-all">
                                        <span className="inline-block text-brand-500 font-bold mb-4 px-4 py-1 rounded-full bg-brand-50 text-sm">
                                            Step 0{step}
                                        </span>
                                        <h3 className="text-2xl font-bold mb-3 text-slate-900">{t(`step${step}.title`)}</h3>
                                        <p className="text-slate-600 leading-relaxed italic">
                                            {t(`step${step}.description`)}
                                        </p>
                                    </div>
                                </div>

                                {/* Dot */}
                                <div className="absolute left-8 lg:left-1/2 w-12 h-12 bg-white rounded-2xl -translate-x-1/2 flex items-center justify-center ring-4 ring-slate-50 border-2 border-slate-100 z-10">
                                    <div className="w-3 h-3 rounded-full bg-brand-500" />
                                </div>

                                <div className="hidden lg:block w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
