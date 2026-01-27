"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function ImprintPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />
            <div className="container mx-auto px-4 pt-40 pb-20">
                <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm border border-slate-200 shadow-xl p-10 lg:p-16 rounded-3xl">
                    <h1 className="text-4xl font-bold mb-10 text-slate-900">Impressum</h1>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-200">Angaben gemäß italienischem Recht</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Flowset<br />
                                Schlossweg 2A<br />
                                39025 Naturns (BZ)<br />
                                Südtirol, Italien
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-200">Kontakt</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Telefon: <a href="tel:+393923623825" className="text-brand-600 hover:underline">+39 392 3623 825</a><br />
                                E-Mail: <a href="mailto:info@flowset.ai" className="text-brand-600 hover:underline">info@flowset.ai</a><br />
                                PEC: <a href="mailto:flowset@pec.it" className="text-brand-600 hover:underline">flowset@pec.it</a><br />
                                Website: <a href="https://flowset.ai" className="text-brand-600 hover:underline">flowset.ai</a>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-200">Verantwortlich für den Inhalt</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Flowset<br />
                                Schlossweg 2A, 39025 Naturns (BZ), Italien
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-200">Streitbeilegung</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Pflichtinformation nach EU-Verordnung Nr. 524/2013 des Europäischen Parlaments und Rats.<br /><br />
                                Plattform zur Online-Beilegung verbraucherrechtlicher Streitigkeiten (ODR) der Europäischen Kommission:<br />
                                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
                                    https://ec.europa.eu/consumers/odr/
                                </a>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-200">Haftungsausschluss</h2>

                            <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">Haftung für Inhalte</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß Art. 17 des italienischen Gesetzesdekrets Nr. 70/2003 für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach Art. 17 des Gesetzesdekrets Nr. 70/2003 sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
                            </p>

                            <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">Haftung für Links</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                            </p>

                            <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">Urheberrecht</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem italienischen und europäischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-200">Bildnachweise</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Alle Bilder und Grafiken: © Flowset, sofern nicht anders angegeben.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
