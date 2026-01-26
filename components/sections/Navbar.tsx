"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Link, usePathname } from "@/lib/navigation";
import Image from "next/image";
import { Menu, X, ChevronRight, Globe } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const locale = useLocale();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Lösungen", href: "#services" },
        { name: "Ablauf", href: "#process" },
        { name: "Fragen", href: "#faq" },
        { name: "Team", href: "#about" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-4" : "py-6"
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className={`relative flex justify-between items-center px-6 py-3 rounded-2xl transition-all duration-500 ${scrolled ? "glass border-white/20" : "bg-transparent border-transparent"
                        }`}>
                        <Link href="/" className="relative z-10 flex items-center gap-2">
                            <Image
                                src="/logos/flowset_logo.png"
                                alt="flowset Logo"
                                width={120}
                                height={32}
                                className="h-8 w-auto"
                                priority
                            />
                        </Link>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}

                            <div className="h-4 w-[1px] bg-slate-200" />

                            <div className="flex items-center gap-4">
                                <Link
                                    href={pathname}
                                    locale={locale === "de" ? "it" : "de"}
                                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-brand-600 transition-colors"
                                >
                                    <Globe className="w-3.5 h-3.5" />
                                    {locale === "de" ? "IT" : "DE"}
                                </Link>

                                <a
                                    href="#contact"
                                    className="bg-brand-500 text-white font-bold px-5 py-2.5 rounded-xl text-sm shadow-lg shadow-brand-500/20 hover:bg-brand-600 transition-all hover:translate-y-[-1px]"
                                >
                                    Kontakt
                                </a>
                            </div>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden p-2 text-slate-600"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </nav>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[60] bg-white lg:hidden flex flex-col"
                    >
                        <div className="p-6 flex justify-between items-center border-b border-slate-100">
                            <Image src="/logos/flowset_logo.png" alt="flowset Logo" width={100} height={28} />
                            <button
                                className="p-2 text-slate-600"
                                onClick={() => setIsOpen(false)}
                            >
                                <X />
                            </button>
                        </div>

                        <div className="flex-1 flex flex-col justify-center gap-8 p-12">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => setIsOpen(false)}
                                    className="text-3xl font-bold text-slate-900 flex items-center justify-between"
                                >
                                    {link.name}
                                    <ChevronRight className="text-brand-500" />
                                </motion.a>
                            ))}

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="pt-8 flex flex-col gap-6"
                            >
                                <Link
                                    href={pathname}
                                    locale={locale === "de" ? "it" : "de"}
                                    className="flex items-center gap-2 font-bold text-slate-400"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Globe className="w-5 h-5" />
                                    {locale === "de" ? "SWITCH TO ITALIAN" : "WECHSELN ZU DEUTSCH"}
                                </Link>

                                <a
                                    href="#contact"
                                    className="bg-brand-500 text-white font-bold px-8 py-5 rounded-2xl text-xl text-center shadow-xl shadow-brand-500/20"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Jetzt anfragen
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
