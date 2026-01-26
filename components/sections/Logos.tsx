"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
    { name: "OpenAI", src: "/logos/openai.svg" },
    { name: "HubSpot", src: "/logos/hubspot.webp" },
    { name: "Make", src: "/logos/make.png" },
    { name: "Airtable", src: "/logos/airtable.png" },
    { name: "n8n", src: "/logos/n8n.png" },
    { name: "Supabase", src: "/logos/supabase.png" },
    { name: "Claude", src: "/logos/claude.png" },
];

export function Logos() {
    return (
        <section className="py-8 border-y border-slate-100 bg-white overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-6">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Wir arbeiten mit modernster Technologie
                </p>
            </div>

            <div className="flex relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                <motion.div
                    animate={{ x: [0, -1400] }} /* (140px + 60px gap) * 7 logos = 1400px */
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-[60px] items-center px-[30px]"
                >
                    {[...logos, ...logos, ...logos].map((logo, i) => (
                        <div key={i} className="flex-shrink-0 w-[140px] flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity">
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                width={120}
                                height={40}
                                className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
