"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail } from "lucide-react";

const members = [
    { name: "Leon Gitterle", id: "leon", image: "/team/Leon.png", email: "leon@flowset.ai", objectPosition: "bottom" },
    { name: "Peter Kasseroler", id: "peter", image: "/team/Peter.png", email: "peter@flowset.ai", objectPosition: "top" },
    { name: "David Peintner", id: "david", image: "/team/David.png", email: "david@flowset.ai", objectPosition: "bottom" },
];

export function Team() {
    const t = useTranslations("Team");

    return (
        <section id="about" className="py-16 lg:py-20 bg-white">
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    {members.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="relative mb-8">
                                {/* Background Ring */}
                                <div className="absolute inset-0 rounded-full bg-brand-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative aspect-[4/5] w-64 mx-auto overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-lg transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:border-brand-200 min-h-[320px]">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className={`object-cover scale-[1.2] transition-transform duration-700 group-hover:scale-[1.25] ${member.objectPosition === "bottom" ? "object-bottom" : "object-top"}`}
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        priority
                                    />

                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-brand-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <a href={`mailto:${member.email}`} className="p-3 bg-white rounded-xl text-brand-600 hover:bg-brand-50 transition-colors">
                                            <Mail className="w-6 h-6" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <h4 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h4>
                            <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest">{t(member.id)}</p>
                            <p className="text-slate-400 text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity underline cursor-pointer">
                                {member.email}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
