"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Link } from "@/lib/navigation";

type CookieConsent = {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
    timestamp: number;
};

export function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [consent, setConsent] = useState<CookieConsent>({
        necessary: true,
        analytics: false,
        marketing: false,
        timestamp: 0,
    });

    useEffect(() => {
        const savedConsent = localStorage.getItem("cookie-consent");
        if (!savedConsent) {
            // Kurze Verzögerung für bessere UX
            const timer = setTimeout(() => setShowBanner(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const saveConsent = (newConsent: CookieConsent) => {
        const consentWithTimestamp = { ...newConsent, timestamp: Date.now() };
        localStorage.setItem("cookie-consent", JSON.stringify(consentWithTimestamp));
        setShowBanner(false);

        // Google Analytics aktivieren/deaktivieren
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("consent", "update", {
                analytics_storage: newConsent.analytics ? "granted" : "denied",
                ad_storage: newConsent.marketing ? "granted" : "denied",
            });
        }
    };

    const acceptAll = () => {
        saveConsent({
            necessary: true,
            analytics: true,
            marketing: true,
            timestamp: Date.now(),
        });
    };

    const acceptNecessary = () => {
        saveConsent({
            necessary: true,
            analytics: false,
            marketing: false,
            timestamp: Date.now(),
        });
    };

    const savePreferences = () => {
        saveConsent(consent);
    };

    return (
        <AnimatePresence>
            {showBanner && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
                >
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                        <div className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-50 rounded-xl shrink-0">
                                    <Cookie className="w-6 h-6 text-brand-600" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                                        Wir verwenden Cookies
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Wir nutzen Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
                                        Einige sind technisch notwendig, andere helfen uns, die Website zu verbessern.{" "}
                                        <Link href="/privacy" className="text-brand-600 hover:underline">
                                            Mehr erfahren
                                        </Link>
                                    </p>
                                </div>
                                <button
                                    onClick={() => setShowBanner(false)}
                                    className="p-2 hover:bg-slate-100 rounded-lg transition-colors shrink-0"
                                    aria-label="Schließen"
                                >
                                    <X className="w-5 h-5 text-slate-400" />
                                </button>
                            </div>

                            {/* Cookie Details */}
                            <AnimatePresence>
                                {showDetails && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="mt-6 pt-6 border-t border-slate-200 space-y-4">
                                            {/* Notwendige Cookies */}
                                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                                                <div>
                                                    <h4 className="font-semibold text-slate-900">Notwendige Cookies</h4>
                                                    <p className="text-sm text-slate-500">Erforderlich für den Betrieb der Website</p>
                                                </div>
                                                <div className="relative">
                                                    <input
                                                        type="checkbox"
                                                        checked={true}
                                                        disabled
                                                        className="sr-only"
                                                    />
                                                    <div className="w-11 h-6 bg-brand-600 rounded-full cursor-not-allowed">
                                                        <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Analytics Cookies */}
                                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                                                <div>
                                                    <h4 className="font-semibold text-slate-900">Analyse-Cookies</h4>
                                                    <p className="text-sm text-slate-500">Helfen uns, die Website zu verbessern</p>
                                                </div>
                                                <button
                                                    onClick={() => setConsent({ ...consent, analytics: !consent.analytics })}
                                                    className={`relative w-11 h-6 rounded-full transition-colors ${
                                                        consent.analytics ? "bg-brand-600" : "bg-slate-300"
                                                    }`}
                                                >
                                                    <div
                                                        className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                                                            consent.analytics ? "right-0.5" : "left-0.5"
                                                        }`}
                                                    />
                                                </button>
                                            </div>

                                            {/* Marketing Cookies */}
                                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                                                <div>
                                                    <h4 className="font-semibold text-slate-900">Marketing-Cookies</h4>
                                                    <p className="text-sm text-slate-500">Für personalisierte Werbung</p>
                                                </div>
                                                <button
                                                    onClick={() => setConsent({ ...consent, marketing: !consent.marketing })}
                                                    className={`relative w-11 h-6 rounded-full transition-colors ${
                                                        consent.marketing ? "bg-brand-600" : "bg-slate-300"
                                                    }`}
                                                >
                                                    <div
                                                        className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                                                            consent.marketing ? "right-0.5" : "left-0.5"
                                                        }`}
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Buttons */}
                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={acceptAll}
                                    className="flex-1 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-colors"
                                >
                                    Alle akzeptieren
                                </button>
                                {showDetails ? (
                                    <button
                                        onClick={savePreferences}
                                        className="flex-1 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-colors"
                                    >
                                        Auswahl speichern
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => setShowDetails(true)}
                                        className="flex-1 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-colors"
                                    >
                                        Einstellungen
                                    </button>
                                )}
                                <button
                                    onClick={acceptNecessary}
                                    className="flex-1 px-6 py-3 border border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold rounded-xl transition-colors"
                                >
                                    Nur notwendige
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// TypeScript Erweiterung für gtag
declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}
