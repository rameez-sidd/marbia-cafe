"use client";
import { motion } from "framer-motion";

export default function EventsPage() {
  return (
    <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-6 lg:px-6 lg:pb-28 lg:pt-10">
      <section className="grid gap-10 md:grid-cols-[1.2fr,1.1fr] md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300/80">
            Events
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Nights That Come Alive
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
            At Marbia, the night never stays quiet. From soulful Qawwali
            evenings to live bands, DJ nights, and special music events, every
            week brings a new experience. Join us for unforgettable nights
            filled with music, food, and great company.
          </p>

          <div className="mt-8 space-y-5 text-sm text-white/70">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                What to Expect
              </h2>
              <ul className="mt-3 space-y-1.5">
                <li>• Soulful Sufi &amp; Qawwali evenings</li>
                <li>• Live bands and acoustic sets</li>
                <li>• DJ nights and curated playlists</li>
                <li>• Special themed nights and celebrations</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                Booking & Enquiries
              </h2>
              <p className="mt-3">
                For the latest event calendar, table bookings, and group
                reservations, please call{" "}
                <a href="tel:08800014966" className="text-amber-300">
                  088000 14966
                </a>
                .
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              Sample Weekly Rhythm
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>
                <span className="font-medium text-amber-200">Thursday</span> –
                Qawwali &amp; Sufi Night
              </li>
              <li>
                <span className="font-medium text-amber-200">Friday</span> –
                Live Band &amp; Cocktails
              </li>
              <li>
                <span className="font-medium text-amber-200">Saturday</span> –
                DJ Night &amp; Celebrations
              </li>
              <li>
                <span className="font-medium text-amber-200">Sunday</span> –
                Easy Evenings &amp; Comfort Classics
              </li>
            </ul>
            <p className="mt-4 text-xs text-white/50">
              Note: Actual schedule may vary. Please call ahead for the latest
              lineup and special events.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

