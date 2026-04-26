"use client";
import { motion } from "framer-motion";
import {
  initialMenuItems,
  menuCategories,
  type MenuCategoryId,
} from "@/lib/menu-data";

const byCategory: Record<MenuCategoryId, typeof initialMenuItems> =
  initialMenuItems.reduce(
    (acc, item) => {
      (acc[item.categoryId] ||= [] as typeof initialMenuItems).push(item);
      return acc;
    },
    {} as Record<MenuCategoryId, typeof initialMenuItems>
  );

export default function MenuPage() {
  return (
    <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-6 lg:px-6 lg:pb-28 lg:pt-10">
      <section className="">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300/80">
          Food • Drinks • Vibes
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Where Flavour Meets Atmosphere
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
          Dive into a menu that blends vibrant Mediterranean bites, gourmet grills, handcrafted pizzas, and bar favourites. Paired with signature drinks and a high-energy ambience, every visit to Marbia is more than a meal — it’s a night to remember.
        </p>
      </section>

      <div className="mt-10 space-y-12">
        {menuCategories.map((category) => {
          const items = byCategory[category.id] || [];
          if (!items.length) return null;
          return (
            <section key={category.id} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-lg font-semibold uppercase tracking-[0.22em] text-white/70">
                  {category.name}
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className="grid gap-4 md:grid-cols-2"
              >
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-1 rounded-2xl border border-white/8 bg-white/2 px-4 py-3"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <div className="">
                        <span className="text-sm font-medium text-white/90">
                          {item.name}
                        </span>
                        {typeof item.veg !== "undefined" && (
                          <span
                            className={`ml-2 mb-0.5 inline-flex h-1.5 w-1.5 mt-1 items-center justify-center rounded-full text-[7px] ${
                              item.veg
                                ? "bg-emerald-400/80"
                                : "bg-red-400/80"
                            }`}
                          >

                          </span>
                        )}
                      </div>
                      <p className="text-xs font-medium text-amber-300">
                        ₹{item.price || "—"}
                      </p>
                    </div>
                    {item.description && (
                      <p className="text-xs leading-relaxed text-white/60">
                        {item.description}
                      </p>
                    )}
                    {item.available === false && (
                      <p className="text-[11px] uppercase tracking-[0.16em] text-white/40">
                        Currently unavailable
                      </p>
                    )}
                  </div>
                ))}
              </motion.div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

