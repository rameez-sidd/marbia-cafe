"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  initialMenuItems,
  menuCategories,
  type MenuItem,
  type MenuCategoryId,
} from "@/lib/menu-data";
import { Button } from "@/components/ui/button";

type EditableItem = MenuItem & { isNew?: boolean };

export default function AdminPage() {
  const [items, setItems] = useState<EditableItem[]>(initialMenuItems);
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryId | "all">(
    "all"
  );
  const [editingItem, setEditingItem] = useState<EditableItem | null>(null);

  const filtered = useMemo(
    () =>
      selectedCategory === "all"
        ? items
        : items.filter((i) => i.categoryId === selectedCategory),
    [items, selectedCategory]
  );

  function handleSave(item: EditableItem) {
    setItems((prev) => {
      const existingIndex = prev.findIndex((p) => p.id === item.id);
      if (existingIndex === -1) {
        return [...prev, { ...item, isNew: false }];
      }
      const clone = [...prev];
      clone[existingIndex] = { ...item, isNew: false };
      return clone;
    });
    setEditingItem(null);
  }

  function handleDelete(id: string) {
    setItems((prev) => prev.filter((i) => i.id !== id));
    if (editingItem?.id === id) setEditingItem(null);
  }

  function createBlankItem(): EditableItem {
    return {
      id: `item-${Date.now()}`,
      name: "",
      price: 0,
      categoryId: "mains",
      available: true,
      veg: undefined,
      description: "",
      isNew: true,
    };
  }

  return (
    <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-6 lg:px-6 lg:pb-28 lg:pt-10">
      <section className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300/80">
              Admin · Menu Management
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Menu Management
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
              Add, edit, and manage menu categories and items, including prices,
              descriptions, veg / non-veg tags, availability, and optional
              image paths. (Demo only – changes are kept client-side and are not
              persisted to a database.)
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              className="border-white/25 text-xs uppercase tracking-[0.22em]"
              onClick={() => {
                const item = createBlankItem();
                setItems((prev) => [...prev, item]);
                setEditingItem(item);
              }}
            >
              Add Menu Item
            </Button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`rounded-full border px-3 py-1 uppercase tracking-[0.18em] ${
              selectedCategory === "all"
                ? "border-amber-400 bg-amber-400/10 text-amber-200"
                : "border-white/15 text-white/60 hover:border-white/30"
            }`}
          >
            All
          </button>
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-full border px-3 py-1 uppercase tracking-[0.18em] ${
                selectedCategory === cat.id
                  ? "border-amber-400 bg-amber-400/10 text-amber-200"
                  : "border-white/15 text-white/60 hover:border-white/30"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-[1.4fr,1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-2 rounded-3xl border border-white/10 bg-white/2 p-4"
          >
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              Menu Items ({filtered.length})
            </h2>
            <div className="mt-2 max-h-[560px] space-y-1 overflow-y-auto pr-1 text-sm">
              {filtered.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setEditingItem(item)}
                  className={`flex w-full items-start justify-between gap-3 rounded-2xl px-3 py-2 text-left hover:bg-white/5 ${
                    editingItem?.id === item.id ? "bg-white/6" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-white/90">{item.name}</p>
                      {typeof item.veg !== "undefined" && (
                        <span
                          className={`inline-flex h-3.5 w-3.5 items-center justify-center rounded-[4px] border text-[7px] ${
                            item.veg
                              ? "border-emerald-400/80 text-emerald-300"
                              : "border-red-400/80 text-red-300"
                          }`}
                        >
                          {item.veg ? "V" : "NV"}
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="mt-0.5 text-[11px] text-white/55 line-clamp-1">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <p className="text-xs font-medium text-amber-300">
                      ₹{item.price || "—"}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                      {item.available === false ? "Unavailable" : "Available"}
                    </p>
                  </div>
                </button>
              ))}
              {!filtered.length && (
                <p className="py-4 text-xs text-white/50">
                  No items in this category yet.
                </p>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3 rounded-3xl border border-white/10 bg-white/2 p-4"
          >
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              {editingItem ? "Edit Item" : "Select an item to edit"}
            </h2>
            {editingItem ? (
              <form
                className="space-y-3 text-sm"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSave(editingItem);
                }}
              >
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.18em] text-white/50">
                    Name
                  </label>
                  <input
                    className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none ring-amber-400/40 focus:border-amber-300 focus:ring-2"
                    value={editingItem.name}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-[0.18em] text-white/50">
                      Price (₹)
                    </label>
                    <input
                      type="number"
                      min={0}
                      className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none ring-amber-400/40 focus:border-amber-300 focus:ring-2"
                      value={editingItem.price}
                      onChange={(e) =>
                        setEditingItem({
                          ...editingItem,
                          price: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-[0.18em] text-white/50">
                      Category
                    </label>
                    <select
                      className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none ring-amber-400/40 focus:border-amber-300 focus:ring-2"
                      value={editingItem.categoryId}
                      onChange={(e) =>
                        setEditingItem({
                          ...editingItem,
                          categoryId: e.target.value as MenuCategoryId,
                        })
                      }
                    >
                      {menuCategories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.18em] text-white/50">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none ring-amber-400/40 focus:border-amber-300 focus:ring-2"
                    value={editingItem.description ?? ""}
                    onChange={(e) =>
                      setEditingItem({
                        ...editingItem,
                        description: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.18em] text-white/50">
                    Image Path (optional)
                  </label>
                  <input
                    className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none ring-amber-400/40 focus:border-amber-300 focus:ring-2"
                    placeholder="/images/1 (10).jpg"
                    value={editingItem.image ?? ""}
                    onChange={(e) =>
                      setEditingItem({
                        ...editingItem,
                        image: e.target.value || undefined,
                      })
                    }
                  />
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-[0.18em] text-white/50">
                      Veg / Non-Veg
                    </label>
                    <select
                      className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-xs outline-none ring-amber-400/40 focus:border-amber-300 focus:ring-2"
                      value={
                        typeof editingItem.veg === "undefined"
                          ? ""
                          : editingItem.veg
                          ? "veg"
                          : "non-veg"
                      }
                      onChange={(e) => {
                        const value = e.target.value;
                        setEditingItem({
                          ...editingItem,
                          veg:
                            value === ""
                              ? undefined
                              : value === "veg"
                              ? true
                              : false,
                        });
                      }}
                    >
                      <option value="">Not specified</option>
                      <option value="veg">Veg</option>
                      <option value="non-veg">Non-Veg</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-[0.18em] text-white/50">
                      Availability
                    </label>
                    <select
                      className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-xs outline-none ring-amber-400/40 focus:border-amber-300 focus:ring-2"
                      value={editingItem.available === false ? "no" : "yes"}
                      onChange={(e) =>
                        setEditingItem({
                          ...editingItem,
                          available: e.target.value === "yes",
                        })
                      }
                    >
                      <option value="yes">Available</option>
                      <option value="no">Not Available</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-1 text-xs">
                  <Button
                    type="submit"
                    size="sm"
                    className="bg-amber-400 text-black hover:bg-amber-300"
                  >
                    Save Item
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="border-white/25"
                    onClick={() => setEditingItem(null)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    className="text-red-300 hover:bg-red-500/10"
                    onClick={() => handleDelete(editingItem.id)}
                  >
                    Delete
                  </Button>
                </div>
              </form>
            ) : (
              <p className="py-10 text-xs text-white/50">
                Select a menu item from the list to start editing, or click{" "}
                <span className="text-amber-300">Add Menu Item</span> to create
                a new one.
              </p>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

