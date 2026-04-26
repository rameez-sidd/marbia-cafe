import Image from "next/image";
import Link from "next/link";
import { MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md";

export function SiteFooter() {
    return (
        <footer className="border-t border-white/10 bg-black/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 lg:flex-row lg:items-start lg:justify-between lg:px-6">
                <div className="space-y-3 md:min-w-[400px]">
                    <Image
                        src='/images/logo.png'
                        alt="logo"
                        width={150}
                        height={100}
                    />
                    <p className="max-w-sm text-sm text-white/50">
                        Crafting unforgettable nights with great food, music, and vibrant
                        energy.
                    </p>
                </div>

                <div className="grid grid-cols-1 max-sm:gap-8 text-sm text-white/60 sm:grid-cols-3">
                    <div className="space-y-3">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400/70">
                            Address
                        </h4>
                        <p className="max-w-xs text-sm leading-relaxed flex items-start gap-2">
                            <span className="text-lg mt-1 -ml-1"><MdOutlineLocationOn /></span>
                            <p className="text-sm">
                                2nd floor, Community Centre, The India mall, above KFC, New Friends Colony, New Delhi, Delhi 110025
                            </p>
                        </p>
                    </div>

                    <div className="space-y-3 sm:justify-self-center lg:justify-self-end">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400/70">
                            Contact
                        </h4>
                        <p className="flex items-center gap-2">
                            <span className="text-lg"><MdOutlinePhone /></span>
                            <span className="text-sm">
                                088000 14966
                            </span>
                        </p>
                    </div>

                    <div className="space-y-3 sm:justify-self-center lg:justify-self-end">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400/70">
                            Links
                        </h4>
                        <div className="flex flex-col gap-2">
                            <Link href="/" className="hover:text-amber-300">
                                Home
                            </Link>
                            <Link href="/menu" className="hover:text-amber-300">
                                Menu
                            </Link>
                            <Link href="/gallery" className="hover:text-amber-300">
                                Gallery
                            </Link>
                            <Link href="/events" className="hover:text-amber-300">
                                Events
                            </Link>
                            <Link href="/contact" className="hover:text-amber-300">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
                © {new Date().getFullYear()} Marbia – Bar &amp; Restaurant. All rights
                reserved.
            </div>
        </footer>
    );
}

