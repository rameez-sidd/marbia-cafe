export type MenuCategoryId =
  | "mains"
  | "nonVegTapas"
  | "vegTapas"
  | "pastaRisotto"
  | "platters"
  | "pizzaPide"
  | "mezze"
  | "salads"
  | "bunwich"
  | "cheeseBoards"
  | "breads"
  | "dessert"
  | "nibble"
  | "dumplings"
  | "oriental"
  | "mains";

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
  categoryId: MenuCategoryId;
  veg?: boolean;
  available?: boolean;
  image?: string;
};

export type MenuCategory = {
  id: MenuCategoryId;
  name: string;
  description?: string;
};

export const menuCategories: MenuCategory[] = [
  { id: "mains", name: "Mains" },
  { id: "nonVegTapas", name: "Non-Vegetarian Inspired Tapas" },
  { id: "vegTapas", name: "Vegetarian Inspired Tapas" },
  { id: "pastaRisotto", name: "Pasta & Risotto" },
  { id: "platters", name: "Platters" },
  { id: "pizzaPide", name: "Pizza & Pide" },
  { id: "mezze", name: "Mezze" },
  { id: "salads", name: "Salads" },
  { id: "bunwich", name: "Bun-wich" },
  { id: "cheeseBoards", name: "Cheese Boards" },
  { id: "breads", name: "Breads" },
  { id: "dessert", name: "Dessert" },
  { id: "nibble", name: "Nibble" },
  { id: "dumplings", name: "Dumplings" },
  { id: "oriental", name: "Oriental" },
];

export const initialMenuItems: MenuItem[] = [
  {
    id: "musaakhan-chicken",
    categoryId: "mains",
    name: "Musaakhan Chicken",
    price: 745,
    description:
      "Palestinian roasted chicken, sumac caramelised onions, lavash bread",
    veg: false,
  },
  {
    id: "grilled-sole-mango-salsa",
    categoryId: "mains",
    name: "Grilled Sole With Mango / Pineapple Chilli Salsa",
    price: 795,
    description: "Butter and lemon grilled fish served with mango chilli salsa",
  },
  {
    id: "uzbeki-chicken-pilaf",
    categoryId: "mains",
    name: "Uzbeki Chicken Pilaf",
    price: 695,
    description:
      "Finest rice cooked with chicken, chickpea and yellow raisins",
  },
  {
    id: "rotisserie-chicken-thighs",
    categoryId: "mains",
    name: "Garlic & Herbs Rotisserie Chicken Thighs",
    price: 595,
    description:
      "Garlic and herbs marinated chicken served with spicy hung curd dip",
  },
  {
    id: "lamb-chops-broccoli",
    categoryId: "mains",
    name: "Lamb Chops With Chargrilled Broccoli",
    price: 745,
    description: "Served with harissa & hung curd sauce",
  },
  {
    id: "grilled-chicken-platter",
    categoryId: "mains",
    name: "Grilled Chicken Platter",
    price: 795,
    description:
      "Grilled chicken, baked potatoes and spiced vegetables, red chilli mayo and tzatziki",
  },
  {
    id: "rose-cottage-cheese",
    categoryId: "mains",
    name: "Rosé Cottage Cheese",
    price: 595,
    veg: true,
  },
  {
    id: "parmesan-fish",
    categoryId: "mains",
    name: "Parmesan Fish",
    price: 695,
  },
  {
    id: "melanzane-parmigiana",
    categoryId: "mains",
    name: "Melanzane Parmigiana",
    price: 695,
    description: "Tomato, aubergine, mozzarella, parmesan cheese",
    veg: true,
  },
  {
    id: "rogan-josh-roomali",
    categoryId: "mains",
    name: "Rogan Josh & Roomali Roti",
    price: 595,
  },
  {
    id: "butter-chicken-pocket-naan",
    categoryId: "mains",
    name: "Butter Chicken & Pocket Butter Naan",
    price: 545,
  },
  {
    id: "chicken-tikka-masala-naan",
    categoryId: "mains",
    name: "Chicken Tikka Masala & Pocket Garlic Naan",
    price: 595,
  },
  {
    id: "paneer-makhni-paratha",
    categoryId: "mains",
    name: "Paneer Makhni & Lacha Paratha",
    price: 525,
    veg: true,
  },
  {
    id: "dal-makhni-naan",
    categoryId: "mains",
    name: "Dal Makhni & Garlic Naan",
    price: 525,
    veg: true,
  },
  {
    id: "sheesh-tavuk",
    categoryId: "nonVegTapas",
    name: "Sheesh Tavuk",
    price: 465,
    description:
      "Lebanese grilled chicken served with charred onions and tomatoes on rice bed",
  },
  {
    id: "joojeh-kebab",
    categoryId: "nonVegTapas",
    name: "Joojeh Kebab",
    price: 485,
    description:
      "Grilled boneless chicken marinated with onion juice, saffron and yogurt served with Turkish dips",
  },
  {
    id: "kebab-koobideh",
    categoryId: "nonVegTapas",
    name: "Kebab Koobideh",
    price: 495,
    description:
      "Persian seekh kebab with saffron, parsley and onion served with saffron rice and salad",
  },
  {
    id: "tavuk-kanat",
    categoryId: "nonVegTapas",
    name: "Tavuk Kanat",
    price: 395,
    description:
      "Turkish sumac spiced chicken wings served with spicy garlic sauce",
  },
  {
    id: "cheesy-lamb-kebab",
    categoryId: "nonVegTapas",
    name: "Cheesy Lamb Kebab",
    price: 545,
  },
  {
    id: "peri-peri-kebab",
    categoryId: "nonVegTapas",
    name: "Peri Peri Kebab",
    price: 445,
  },
  {
    id: "prawns-harissa",
    categoryId: "nonVegTapas",
    name: "Prawns Harissa",
    price: 695,
  },
  {
    id: "grilled-samak-mashwi",
    categoryId: "nonVegTapas",
    name: "Grilled Samak Mashwi",
    price: 695,
    description:
      "Char grilled fish with Turkish spices and mango chilli salsa",
  },
  {
    id: "fish-and-chips",
    categoryId: "nonVegTapas",
    name: "Fish & Chips",
    price: 625,
  },
  {
    id: "grilled-zucchini",
    categoryId: "vegTapas",
    name: "Grilled Zucchini",
    price: 395,
    veg: true,
  },
  {
    id: "gorbanzo-falafel",
    categoryId: "vegTapas",
    name: "Gorbanzo Beans Falafel",
    price: 425,
    veg: true,
  },
  {
    id: "exotic-sauteed-vegetables",
    categoryId: "vegTapas",
    name: "Exotic Sautéed Vegetables",
    price: 295,
    veg: true,
  },
  {
    id: "dahi-kebab",
    categoryId: "vegTapas",
    name: "Dahi Kebab",
    price: 395,
    veg: true,
  },
  {
    id: "cottage-cheese-satay",
    categoryId: "vegTapas",
    name: "Cottage Cheese Satay",
    price: 395,
    veg: true,
  },
  {
    id: "tomato-bruschetta",
    categoryId: "vegTapas",
    name: "Tomato Bruschetta",
    price: 315,
    veg: true,
  },
  {
    id: "wild-mushroom-bruschetta",
    categoryId: "vegTapas",
    name: "Wild Mushroom Bruschetta",
    price: 315,
    veg: true,
  },
  {
    id: "smoked-chilli-broccoli",
    categoryId: "vegTapas",
    name: "Smoked Chilli Broccoli",
    price: 435,
    veg: true,
  },
  {
    id: "mama-rossa",
    categoryId: "pastaRisotto",
    name: "Mama Rossa",
    price: 425,
    description: "Fresh tomato and cream sauce",
    veg: true,
  },
  {
    id: "penne-arrabiata",
    categoryId: "pastaRisotto",
    name: "Penne Arrabiata",
    price: 425,
    veg: true,
  },
  {
    id: "spaghetti-cream-mushroom-chicken",
    categoryId: "pastaRisotto",
    name: "Spaghetti Cream & Mushroom / Chicken",
    price: 425,
  },
  {
    id: "fusilli-alfredo",
    categoryId: "pastaRisotto",
    name: "Fusilli Alfredo",
    price: 425,
    veg: true,
  },
  {
    id: "risotto-ai-funghi",
    categoryId: "pastaRisotto",
    name: "Risotto Ai Funghi",
    price: 525,
    veg: true,
  },
  {
    id: "spaghetti-cream-pesto",
    categoryId: "pastaRisotto",
    name: "Spaghetti Cream & Pesto Sauce",
    price: 525,
  },
  {
    id: "mushroom-ravioli",
    categoryId: "pastaRisotto",
    name: "Mushroom Ravioli",
    price: 545,
    veg: true,
  },
  {
    id: "rigatoni-bolognese",
    categoryId: "pastaRisotto",
    name: "Rigatoni Bolognese",
    price: 565,
  },
  {
    id: "rosemary-chicken-risotto",
    categoryId: "pastaRisotto",
    name: "Rosemary Chicken Risotto",
    price: 645,
  },
  {
    id: "smoked-chicken-ravioli",
    categoryId: "pastaRisotto",
    name: "Smoked Chicken Ravioli",
    price: 575,
  },
  {
    id: "prawn-marinara",
    categoryId: "pastaRisotto",
    name: "Prawn Marinara",
    price: 695,
  },
  {
    id: "marbia-veg-mezze",
    categoryId: "platters",
    name: "Marbia Veg Mezze Platter",
    price: 1495,
    description:
      "Hummus, babaghanoush, smoked labneh, falafel, mushroom sambousek, cottage cheese, sautéed vegetables, olives, apricots, pickled vegetables, pita & lavash",
    veg: true,
  },
  {
    id: "marbia-nonveg-mezze",
    categoryId: "platters",
    name: "Marbia Non-Veg Mezze Platter",
    price: 1795,
    description:
      "Sheesh tavuk, joojeh kebab, lamb kebabs, peri peri kebab, fish finger, hummus, labneh, babaghanoush, tabouleh, pickles, pita & lavash",
  },
  {
    id: "classic-margherita-truffle",
    categoryId: "pizzaPide",
    name: "Classic Margherita With Truffle Oil",
    price: 455,
    veg: true,
  },
  {
    id: "peri-peri-chicken-pizza",
    categoryId: "pizzaPide",
    name: "Peri Peri Chicken Pizza",
    price: 595,
  },
  {
    id: "broccoli-sausage-pizza",
    categoryId: "pizzaPide",
    name: "Broccoli & Sausage Pizza",
    price: 595,
  },
  {
    id: "artichoke-spinach-cream-pizza",
    categoryId: "pizzaPide",
    name: "Artichoke Spinach Cream Pizza With Truffle Oil",
    price: 645,
    veg: true,
  },
  {
    id: "mexican-fattoush-pizza",
    categoryId: "pizzaPide",
    name: "Mexican Fattoush Pizza",
    price: 495,
  },
  {
    id: "morel-pizza",
    categoryId: "pizzaPide",
    name: "Morel Pizza",
    price: 495,
    veg: true,
  },
  {
    id: "cheese-chilli-pide",
    categoryId: "pizzaPide",
    name: "Cheese & Chilli Pide",
    price: 455,
    veg: true,
  },
  {
    id: "spinach-cheese-pide",
    categoryId: "pizzaPide",
    name: "Spinach & Cheese Pide",
    price: 455,
    veg: true,
  },
  {
    id: "lahmacun-pide",
    categoryId: "pizzaPide",
    name: "Lahmacun Pide",
    price: 645,
  },
  {
    id: "hummus-pita",
    categoryId: "mezze",
    name: "Hummus & Pita",
    price: 295,
    veg: true,
  },
  {
    id: "hummus-trio",
    categoryId: "mezze",
    name: "Hummus Trio",
    price: 345,
    veg: true,
  },
  {
    id: "cold-mezze",
    categoryId: "mezze",
    name: "Cold Mezze",
    price: 595,
    veg: true,
  },
  {
    id: "fattoush-salad",
    categoryId: "salads",
    name: "Fattoush Salad",
    price: 395,
    veg: true,
  },
  {
    id: "quinoa-tabbouleh",
    categoryId: "salads",
    name: "Quinoua Tabbouleh Salad / Bulgar",
    price: 425,
    veg: true,
  },
  {
    id: "greek-salad",
    categoryId: "salads",
    name: "Greek Salad",
    price: 365,
    veg: true,
  },
  {
    id: "caeser-salad",
    categoryId: "salads",
    name: "Caeser Salad",
    price: 365,
  },
  {
    id: "watermelon-feta-salad",
    categoryId: "salads",
    name: "Watermelon & Feta Cheese Salad",
    price: 425,
    veg: true,
  },
  {
    id: "mediterranean-bowl",
    categoryId: "salads",
    name: "Mediterranean Bowl",
    price: 475,
    veg: true,
  },
  {
    id: "shawarma-bunwich",
    categoryId: "bunwich",
    name: "Shawarma Bun-wich",
    price: 545,
  },
  {
    id: "fried-chicken-bunwich",
    categoryId: "bunwich",
    name: "Fried Chicken Bun-wich",
    price: 545,
  },
  {
    id: "adana-kebab-durum",
    categoryId: "bunwich",
    name: "Adana Kebab Durüm",
    price: 565,
  },
  {
    id: "persian-brie-board",
    categoryId: "cheeseBoards",
    name: "Persian Brie Board",
    price: 845,
  },
  {
    id: "greek-feta-board",
    categoryId: "cheeseBoards",
    name: "Greek Feta Salad Board",
    price: 845,
  },
  {
    id: "roomali-roti",
    categoryId: "breads",
    name: "Roomali Roti",
    price: 60,
    veg: true,
  },
  {
    id: "butter-naan",
    categoryId: "breads",
    name: "Butter Naan",
    price: 145,
    veg: true,
  },
  {
    id: "fresh-pita",
    categoryId: "breads",
    name: "Fresh Pita",
    price: 30,
    veg: true,
  },
  {
    id: "garlic-naan",
    categoryId: "breads",
    name: "Garlic Naan",
    price: 155,
    veg: true,
  },
  {
    id: "butter-garlic-naan",
    categoryId: "breads",
    name: "Butter Garlic Naan",
    price: 165,
    veg: true,
  },
  {
    id: "laccha-paratha",
    categoryId: "breads",
    name: "Laccha Paratha",
    price: 145,
    veg: true,
  },
  {
    id: "blueberry-cheesecake",
    categoryId: "dessert",
    name: "Blueberry Cheesecake",
    price: 350,
    veg: true,
  },
  {
    id: "brownie-strawberry-sundae",
    categoryId: "dessert",
    name: "Brownie Strawberry Sundae",
    price: 350,
    veg: true,
  },
  {
    id: "alphonso-cheesecake",
    categoryId: "dessert",
    name: "Alphonso Cheesecake",
    price: 350,
    veg: true,
  },
  {
    id: "marbia-oreo-brownie-blast",
    categoryId: "dessert",
    name: "Marbia Oreo Brownie Blast",
    price: 350,
    veg: true,
  },
  {
    id: "tiramisu",
    categoryId: "dessert",
    name: "Tiramisu",
    price: 350,
    veg: true,
  },
  {
    id: "cheese-cigar-rolls",
    categoryId: "nibble",
    name: "Cheese Cigar Rolls",
    price: 425,
  },
  {
    id: "loaded-nachos",
    categoryId: "nibble",
    name: "Loaded Nachos",
    price: 395,
  },
  {
    id: "truffle-parmesan-fries",
    categoryId: "nibble",
    name: "Truffle & Parmesan Fries",
    price: 325,
  },
  {
    id: "ny-fries-cheese",
    categoryId: "nibble",
    name: "New York Fries With Cheese Sauce",
    price: 295,
  },
  {
    id: "jalapeno-poppers",
    categoryId: "nibble",
    name: "Jalapeño Poppers",
    price: 425,
  },
  {
    id: "fried-calamari",
    categoryId: "nibble",
    name: "Fried Calamari",
    price: 695,
  },
  {
    id: "pesto-dumplings",
    categoryId: "dumplings",
    name: "Pesto Sauce Dumplings",
    price: 345,
  },
  {
    id: "chilli-oil-dumplings",
    categoryId: "dumplings",
    name: "Chilli Oil Dumplings",
    price: 345,
  },
  {
    id: "kung-pao-chicken",
    categoryId: "oriental",
    name: "Kung Pao Chicken",
    price: 395,
  },
  {
    id: "korean-honey-fried-chicken",
    categoryId: "oriental",
    name: "Korean Honey Fried Chicken",
    price: 425,
  },
].map((item) => ({ available: true, ...item }));

