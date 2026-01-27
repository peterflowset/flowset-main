"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />
            <div className="container mx-auto px-4 pt-40 pb-20">
                <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm border border-slate-200 shadow-xl p-10 lg:p-16 rounded-3xl">
                    <h1 className="text-4xl font-bold mb-4 text-slate-900">Datenschutzerklärung</h1>
                    <p className="text-slate-500 mb-10">Zuletzt aktualisiert: Januar 2025</p>

                    <div className="space-y-8">
                        {/* 1. Verantwortlicher */}
                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-200">1. Verantwortlicher für die Datenverarbeitung</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
                            </p>
                            <p className="text-slate-600 leading-relaxed mt-4">
                                <strong>Flowset</strong><br />
                                Schlossweg 2A<br />
                                39025 Naturns (BZ)<br />
                                Südtirol, Italien<br /><br />
                                E-Mail: <a href="mailto:info@flowset.ai" className="text-brand-600 hover:underline">info@flowset.ai</a><br />
                                PEC: <a href="mailto:flowset@pec.it" className="text-brand-600 hover:underline">flowset@pec.it</a><br />
                                Telefon: +39 392 3623 825
                            </p>
                        </section>

                        {/* 2. Allgemeines zur Datenverarbeitung */}
                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-200">2. Allgemeines zur Datenverarbeitung</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre personenbezogenen Daten im Einklang mit der EU-Datenschutz-Grundverordnung (DSGVO), dem italienischen Datenschutzgesetz (D.Lgs. 196/2003, geändert durch D.Lgs. 101/2018) sowie allen weiteren anwendbaren Datenschutzvorschriften.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Personenbezogene Daten werden von uns nur erhoben, wenn Sie uns diese freiwillig mitteilen oder wenn die Erhebung zur Erfüllung unserer vertraglichen oder gesetzlichen Pflichten erforderlich ist.
                            </p>
                        </section>

                        {/* 3. Hosting und Server-Log-Dateien */}
                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-200">3. Hosting und Server-Log-Dateien</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Unsere Website wird bei einem externen Dienstleister gehostet. Der Hoster erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                                <li>IP-Adresse des anfragenden Rechners</li>
                                <li>Datum und Uhrzeit der Anfrage</li>
                                <li>Name und URL der abgerufenen Datei</li>
                                <li>Referrer-URL (die zuvor besuchte Seite)</li>
                                <li>Verwendeter Browser und Betriebssystem</li>
                            </ul>
                            <p className="text-slate-600 leading-relaxed">
                                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Sicherheit und Stabilität unserer Website).<br />
                                <strong>Speicherdauer:</strong> Die Daten werden nach 30 Tagen automatisch gelöscht.
                            </p>
                        </section>

                        {/* 4. Kontaktformular */}
                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-200">4. Kontaktformular und E-Mail-Kontakt</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Wenn Sie uns über unser Kontaktformular oder per E-Mail kontaktieren, werden folgende Daten erhoben:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                                <li>Vorname und Nachname</li>
                                <li>E-Mail-Adresse</li>
                                <li>Telefonnummer</li>
                                <li>Ihre Nachricht</li>
                            </ul>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong>Zweck:</strong> Bearbeitung Ihrer Anfrage und Kontaktaufnahme.<br />
                                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).<br />
                                <strong>Speicherdauer:</strong> Ihre Daten werden gelöscht, sobald der Zweck der Speicherung entfällt, in der Regel nach Abschluss der Kommunikation, es sei denn, gesetzliche Aufbewahrungspflichten stehen dem entgegen.
                            </p>
                        </section>

                        {/* 5. Cookies */}
                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-200">5. Cookies</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und die bestimmte Einstellungen und Daten zum Austausch mit unserem System über Ihren Browser speichern.
                            </p>
                            <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">Technisch notwendige Cookies</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden.<br />
                                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
                            </p>
                            <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">Analyse- und Marketing-Cookies</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Diese Cookies werden nur mit Ihrer ausdrücklichen Einwilligung gesetzt.<br />
                                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).<br />
                                Sie können Ihre Einwilligung jederzeit widerrufen.
                            </p>
                        </section>

                        {/* 6. Google Analytics */}
                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-200">6. Google Analytics</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Wir nutzen Google Analytics, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Google Analytics verwendet Cookies, um eine Analyse der Nutzung unserer Website zu ermöglichen.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Wir haben mit Google einen Auftragsverarbeitungsvertrag abgeschlossen und verwenden die IP-Anonymisierung, sodass die IP-Adresse vor der Übertragung gekürzt wird.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).<br />
                                <strong>Widerruf:</strong> Sie können Ihre Einwilligung jederzeit widerrufen oder die Erfassung durch Google Analytics verhindern, indem Sie das Browser-Add-on zur Deaktivierung von Google Analytics herunterladen: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">https://tools.google.com/dlpage/gaoptout</a>
                            </p>
                        </section>

                        {/* 7. Ihre Rechte */}
                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-200">7. Ihre Rechte als betroffene Person</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Gemäß der DSGVO stehen Ihnen folgende Rechte zu:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                                <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das Recht, Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten.</li>
                                <li><strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie haben das Recht, unrichtige Daten berichtigen zu lassen.</li>
                                <li><strong>Löschungsrecht (Art. 17 DSGVO):</strong> Sie haben das Recht, die Löschung Ihrer Daten zu verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
                                <li><strong>Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer Daten zu verlangen.</li>
                                <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
                                <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, jederzeit gegen die Verarbeitung Ihrer Daten Widerspruch einzulegen.</li>
                                <li><strong>Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Sie haben das Recht, eine erteilte Einwilligung jederzeit zu widerrufen.</li>
                            </ul>
                            <p className="text-slate-600 leading-relaxed">
                                Zur Ausübung Ihrer Rechte können Sie sich jederzeit an uns wenden unter: <a href="mailto:info@flowset.ai" className="text-brand-600 hover:underline">info@flowset.ai</a>
                            </p>
                        </section>

                        {/* 8. Beschwerderecht */}
                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-200">8. Beschwerderecht bei einer Aufsichtsbehörde</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Die zuständige Aufsichtsbehörde in Italien ist:<br /><br />
                                <strong>Garante per la protezione dei dati personali</strong><br />
                                Piazza Venezia, 11<br />
                                00187 Roma<br />
                                Italien<br />
                                Website: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">www.garanteprivacy.it</a>
                            </p>
                        </section>

                        {/* 9. Datensicherheit */}
                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-200">9. Datensicherheit</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. Ob eine einzelne Seite unseres Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an der geschlossenen Darstellung des Schlüssel- beziehungsweise Schloss-Symbols in der Statusleiste Ihres Browsers.
                            </p>
                        </section>

                        {/* 10. Aktualität */}
                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-200">10. Aktualität und Änderung dieser Datenschutzerklärung</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2025. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf dieser Website abgerufen werden.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
