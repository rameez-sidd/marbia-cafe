"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  "1 (1).jpg",
  "1 (2).jpg",
  "1 (3).jpg",
  "1 (4).jpg",
  "1 (5).jpg",
  "1 (6).jpg",
  "1 (7).jpg",
  "1 (8).jpg",
  "1 (9).jpg",
  "1 (10).jpg",
  "1 (11).jpg",
  "1 (12).jpg",
  "1 (13).jpg",
  "1 (14).jpg",
  "1 (15).jpg",
  "1 (16).jpg",
  "1 (17).jpg",
  "1 (18).jpg",
  "1 (19).jpg",
  "1 (20).jpg",
  "1 (21).jpg",
  "1 (22).jpg",
  "1 (23).jpg",
  "1 (24).jpg",
  "1 (25).jpg",
  "1 (26).jpg",
  "1 (27).jpg",
  "1 (28).jpg",
  "1 (29).jpg",
];

export default function GalleryPage() {
  return (
    <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-6 lg:px-6 lg:pb-28 lg:pt-10">
      <section className="">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300/80">
          Gallery
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Moments at Marbia
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
          A glimpse of the food, music, and unforgettable nights that make
          Marbia special. From candlelit tables and crafted cocktails to live
          performances and late-night conversations.
        </p>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mt-10 columns-2 gap-3 md:columns-3 lg:columns-4"
      >
        {galleryImages.map((src) => (
          <div
            key={src}
            className="mb-3 overflow-hidden rounded-2xl border border-white/10"
          >
            <Image
              src={`/images/${src}`}
              alt="Marbia"
              width={600}
              height={800}
              className="h-full w-full transform object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

