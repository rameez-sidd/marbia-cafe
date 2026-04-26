"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md";
import { PiChefHatFill } from "react-icons/pi";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export default function Home() {
    return (
        <div className="relative overflow-hidden">
            <div className="grain-overlay" />

            {/* Hero */}
            <section className="relative  mx-auto min-h-[90vh] grid grid-cols-1 md2:grid-cols-2 items-center max-w-6xl gap-10 px-4 pb-24 pt-10 lg:px-6 lg:pt-16">
                <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),_transparent_60%)]" />
                <div className="pointer-events-none absolute inset-y-0 -left-64 -z-10 h-full w-[420px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(244,114,182,0.12),_transparent_60%)] blur-3xl" />

                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.08 }}
                    className="relative flex-1 space-y-7 md:space-y-8 "
                >
                    <motion.p
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.28em] text-white/60 backdrop-blur-xl"
                    >
                        New Friends Colony · New Delhi
                    </motion.p>

                    <motion.h1
                        variants={fadeUp}
                        className="text-balance text-4xl font-semibold  text-white drop-shadow sm:text-5xl lg:text-6xl"
                    >
                        Where Great Food Meets{" "}
                        <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-rose-400 bg-clip-text text-transparent">
                            Electric Nights
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="text-base leading-relaxed text-white/70 sm:text-lg md:text-base lg:text-lg"
                    >
                        Welcome to Marbia - Bar &amp; Restaurant, New Friends Colony&apos;s
                        newest nightlife destination. From Mediterranean grills and global
                        cuisine to unforgettable Qawwali nights, live bands, and music
                        events, Marbia is where every evening turns into an experience.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <Link href="/menu">
                            <Button size="lg" className="bg-amber-400 text-black hover:bg-amber-300">
                                View Menu
                            </Button>
                        </Link>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() =>
                                document
                                    .getElementById("reserve")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="border-white/30 bg-transparent text-white hover:bg-white/10"
                        >
                            Book a Table
                        </Button>
                    </motion.div>

                    <motion.p
                        variants={fadeUp}
                        className="text-xs font-medium uppercase tracking-[0.28em] text-white/40"
                    >
                        Crafting unforgettable nights in the heart of New Delhi.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-end"
                >
                    <div className="relative w-full h-full">
                        <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-b from-amber-400/40 via-transparent to-rose-500/30 opacity-70 blur-3xl" />

                        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-[0_40px_120px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
                            <Image
                                src="/images/1 (12).jpg"
                                alt="Marbia bar & restaurant interior"
                                width={800}
                                height={2000}
                                className="w-full h-full object-cover"
                                priority
                            />

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[95%] flex flex-col gap-2 text-[11px] items-center justify-center text-white/80">
                                <span className="inline-flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 font-medium uppercase tracking-[0.22em]">
                                    Live Qawwali · Mediterranean Grills · Craft Cocktails
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* About */}
            <section className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-24">
                <div className="grid gap-10 text-center md:grid-cols-[1.4fr,1fr] md:items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300/80">
                            About Marbia
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                            Marbia is not just a restaurant — it&apos;s an experience.
                        </h2>
                        <p className="mt-4 max-w-4xl mx-auto text-sm leading-relaxed text-white/70 md:text-base">
                            Located inside The India Mall, New Friends Colony, Marbia blends
                            Mediterranean flavours, global cuisine, and a high-energy bar
                            atmosphere to create unforgettable evenings.
                        </p>
                        <p className="mt-4 max-w-4xl mx-auto text-sm leading-relaxed text-white/70 md:text-base">
                            Whether you&apos;re here for handcrafted cocktails, gourmet
                            dining, live music &amp; Qawwali nights, or weekend celebrations,
                            Marbia delivers an atmosphere where great food, music, and people
                            come together.
                        </p>
                        <p className="mt-6 text-xs font-medium uppercase tracking-[0.24em] text-white/50">
                            Come for dinner. Stay for the vibe.
                        </p>
                    </motion.div>

                    {/* <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6"
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
              Inside The India Mall
            </h3>
            <p className="text-sm text-white/70">
              2nd Floor, Community Centre
              <br />
              The India Mall (Above KFC)
              <br />
              New Friends Colony, New Delhi – 110025
            </p>
            <p className="text-sm text-white/70">
              Phone:{" "}
              <a href="tel:08800014966" className="text-amber-300">
                088000 14966
              </a>
            </p>
          </motion.div> */}
                </div>
            </section>

            {/* Experience */}
            <section className="mx-auto max-w-6xl px-4 pb-16 lg:px-6 lg:pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
                >
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300/80">
                            Experience
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                            More Than Just Dining
                        </h2>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
                >
                    {[
                        {
                            title: "Live Music Nights",
                            description:
                                "Enjoy soulful Qawwali nights, live bands, and musical performances that turn your evening into an unforgettable experience.",
                        },
                        {
                            title: "Signature Global Cuisine",
                            description:
                                "From Mediterranean mezze to gourmet grills and Italian pastas, our menu is designed for food lovers.",
                        },
                        {
                            title: "High-Energy Bar",
                            description:
                                "Experience a vibrant bar serving craft cocktails, premium spirits, and curated beverages.",
                        },
                        {
                            title: "Perfect For Celebrations",
                            description:
                                "Birthdays, date nights, corporate gatherings, or a night out with friends — Marbia is the place to celebrate.",
                        },
                    ].map((card, idx) => (
                        <motion.div
                            key={card.title}
                            whileHover={{ y: -8 }}
                            transition={{ type: "spring", stiffness: 220, damping: 20 }}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.01] p-5"
                        >
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
                                0{idx + 1}
                            </div>
                            <h3 className="text-sm font-semibold md:text-base">
                                {card.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-white/65">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Signature Dishes */}
            <section className="mx-auto max-w-6xl px-4 pb-16 lg:px-6 lg:pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
                >
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300/80">
                            Menu Highlights
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                            Signature Dishes
                        </h2>
                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
                            Our chefs craft dishes inspired by Mediterranean, Middle Eastern,
                            and global cuisines, bringing bold flavours and rich traditions to
                            every plate.
                        </p>
                    </div>
                    <div className="mt-2 md:mt-0">
                        <Link href="/menu">
                            <Button variant="outline" className="border-white/25">
                                Explore Full Menu
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
                >
                    {[
                        "Musaakhan Chicken",
                        "Lamb Chops with Chargrilled Broccoli",
                        "Grilled Sole with Mango Chilli Salsa",
                        "Marbia Mezze Platter",
                        "Smoked Chicken Ravioli",
                        "Korean Honey Fried Chicken",
                        "Classic Margherita with Truffle Oil",
                    ].map((item) => (
                        <motion.div
                            key={item}
                            whileHover={{ y: -6, scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 220, damping: 18 }}
                            className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                        >
                            <p className="text-sm text-white/80">{item}</p>
                            <span className="h-6 w-6 rounded-full border border-amber-300/50 bg-amber-300/10 font-semibold uppercase tracking-[0.14em] text-amber-200 flex items-center justify-center">
                                <PiChefHatFill />
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Events */}
            <section className="mx-auto max-w-6xl px-4 pb-16 lg:px-6 lg:pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center"
                >
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300/80">
                            Events
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                            Nights That Come Alive
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
                            At Marbia, the night never stays quiet. From soulful Qawwali
                            evenings to live bands, DJ nights, and special music events, every
                            week brings a new experience.
                        </p>
                        <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
                            Join us for unforgettable nights filled with music, food, and
                            great company.
                        </p>
                        <div className="mt-6">
                            <Link href="/events">
                                <Button variant="outline" className="border-white/25">
                                    See Upcoming Events
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-5 -z-10 rounded-3xl bg-gradient-to-br from-amber-400/20 via-rose-500/20 to-fuchsia-500/10 blur-2xl" />
                        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                            <Image
                                src="/images/eventbanner.png"
                                alt="Live music at Marbia"
                                width={700}
                                height={500}
                                className="h-64 w-full object-cover md:h-72"
                            />
                            <div className="border-t border-white/10 bg-black/60 px-3 sm:px-5 py-4 text-xs text-white/70">
                                <div className="flex items-center justify-between">
                                    <span className="font-semibold uppercase tracking-[0.22em]">
                                        Weekly Programming
                                    </span>
                                    <span className="rounded-full bg-white/5 whitespace-nowrap px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em]">
                                        Qawwali · Bands · DJ
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Gallery preview */}
            <section className="mx-auto max-w-6xl px-4 pb-16 lg:px-6 lg:pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
                >
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300/80">
                            Gallery
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                            Moments at Marbia
                        </h2>
                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
                            A glimpse of the food, music, and unforgettable nights that make
                            Marbia special.
                        </p>
                    </div>
                    <Link href="/gallery">
                        <Button variant="outline" className="border-white/25">
                            View Full Gallery
                        </Button>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4"
                >
                    {["1 (1).jpg", "1 (10).jpg", "1 (20).jpg", "1 (14).jpg"].map(
                        (src) => (
                            <div
                                key={src}
                                className="group relative overflow-hidden rounded-2xl border border-white/10"
                            >
                                <Image
                                    src={`/images/${src}`}
                                    alt="Marbia moments"
                                    width={600}
                                    height={600}
                                    className="h-32 w-full scale-105 transform object-cover transition-transform duration-500 group-hover:scale-110 md:h-40"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </div>
                        )
                    )}
                </motion.div>
            </section>

            {/* Contact & Reservation */}
            <section
                id="reserve"
                className="mx-auto max-w-6xl px-4 pb-24 lg:px-6 lg:pb-28"
            >
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
            </section>
        </div>
    );
}
