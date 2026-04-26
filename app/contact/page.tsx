"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md";

export default function ContactPage() {
    return (
        <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-6 lg:px-6 lg:pb-28 lg:pt-10">

            <div className="grid gap-10 md:grid-cols-2">
                {/* Contact */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                >
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300/80">
                        Contact
                    </p>
                    <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                        Visit Marbia
                    </h2>
                    <div className="space-y-2 text-sm text-white/70 md:text-base">
                        <p className="font-medium text-white/80">Address</p>

                        <div className="flex items-start gap-2">
                            <span className="text-amber-300 text-lg mt-1 -ml-1"><MdOutlineLocationOn /></span>
                            <p className="text-sm w-[70%]">
                                2nd floor, Community Centre, The India mall, above KFC, New Friends Colony, New Delhi, Delhi 110025
                            </p>
                        </div>
                    </div>
                    <div className="space-y-2 text-sm text-white/70 md:text-base">
                        <p className="font-medium text-white/80">Phone</p>
                        <p>
                            <a href="tel:08800014966" className=" flex items-center gap-2">
                                <span className="text-amber-300 text-lg"><MdOutlinePhone /></span>
                                <span className="text-sm">
                                    088000 14966
                                </span>
                            </a>
                        </p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3">
                        <a href="tel:08800014966">
                            <Button size="lg" className="bg-amber-400 text-black hover:bg-amber-300">
                                Call Now
                            </Button>
                        </a>
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Marbia+Bar+%26+Restaurant+New+Friends+Colony+New+Delhi"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white/25 text-white hover:bg-white/10"
                            >
                                Get Directions
                            </Button>
                        </a>
                    </div>
                </motion.div>

                {/* Reservation + Map */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className="space-y-4 h-full"
                >
                    <div className="rounded-3xl h-full flex flex-col justify-center border border-white/10 bg-white/5 p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300/80">
                            Reservations
                        </p>
                        <h3 className="mt-3 text-xl font-semibold tracking-tight">
                            Reserve Your Table
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-white/70">
                            Planning a night out? Reserve your table at Marbia and enjoy an
                            unforgettable evening of great food, music, and vibrant
                            atmosphere.
                        </p>
                        <div className="mt-4">
                            <a href="tel:08800014966">
                                <Button
                                    size="lg"
                                    className="w-full bg-amber-400 text-black hover:bg-amber-300 md:w-auto"
                                >
                                    Book Now
                                </Button>
                            </a>
                        </div>
                    </div>


                </motion.div>
            </div>
            <div className="overflow-hidden mt-10 rounded-3xl border border-white/10 bg-black/70">
                <iframe
                    title="Marbia Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.266832434032!2d77.2689791!3d28.5617491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce31df1319d2f%3A0x5f77c53d92474c62!2sMarbia!5e0!3m2!1sen!2sin!4v1774002006429!5m2!1sen!2sin"
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
}

