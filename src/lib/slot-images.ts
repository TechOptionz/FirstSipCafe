/**
 * Photo for each <ImageSlot>. Empty by default — exactly how the design ships,
 * where every slot is an unfilled placeholder.
 *
 * To fill one: drop the file in `public/images/` and map its slot id here.
 *
 *   export const SLOT_IMAGES: Record<string, string> = {
 *     'menu-hot-3': '/images/spanish-latte.webp',
 *     'tile-menu': '/images/latte-art.webp',
 *     'visit-storefront': '/images/storefront.webp',
 *   };
 *
 * Slot ids in use:
 *   tile-menu · tile-visit · tile-reviews          (home tiles)
 *   feature-hot · feature-brew · feature-matcha · feature-food
 *   visit-hero · visit-storefront · footer-cta · hero-menu · hero-reviews
 *   menu-<categoryId>-<index>                      (every menu item, e.g. menu-hot-3)
 */
export const SLOT_IMAGES: Record<string, string> = {
  // Home page slots live in public/images/home/.
  'tile-menu': '/images/home/tile-menu.webp',
  'tile-visit': '/images/home/tile-visit.webp',
  'tile-reviews': '/images/home/tile-reviews.webp',
  'feature-hot': '/images/home/feature-hot.webp',
  'feature-brew': '/images/home/feature-brew.webp',
  'feature-matcha': '/images/home/feature-matcha.webp',
  'feature-food': '/images/home/feature-food.webp',
  'visit-hero': '/images/home/visit-hero.webp',
  'visit-storefront': '/images/home/visit-storefront.webp',
  // Interior photo behind the footer "Come by the Ground Floor" strip (all pages except home).
  'footer-cta': '/images/home/footer-cta.webp',
  // Page headers.
  'hero-reviews': '/images/home/hero-reviews.webp',
  'hero-menu': '/images/home/hero-menu.webp',

  // Menu photos live in public/images/menu/. Numbers are the item's position
  // in the full menu order (see MENU in data.ts). Items without an entry
  // Every item currently has a photo; remove an entry to fall back to the
  // empty placeholder.
  'menu-hot-0': '/images/menu/espresso.webp', // #01 Espresso
  'menu-hot-1': '/images/menu/americano.webp', // #02 Americano
  'menu-hot-2': '/images/menu/cappuccino.webp', // #03 Cappuccino
  'menu-hot-3': '/images/menu/hot-spanish-latte.webp', // #04 Spanish Latte
  'menu-hot-4': '/images/menu/flat-white.webp', // #05 Flat White
  'menu-hot-5': '/images/menu/caffe-latte.webp', // #06 Caffe Latte
  'menu-hot-6': '/images/menu/caramel-latte.webp', // #07 Caramel Latte
  'menu-hot-7': '/images/menu/cafe-mocha.webp', // #08 Cafe Mocha
  'menu-hot-8': '/images/menu/popcorn-latte.webp', // #09 Popcorn Latte
  'menu-hot-9': '/images/menu/spanish-cortado.webp', // #10 Spanish Cortado
  'menu-hot-10': '/images/menu/cortado.webp', // #11 Cortado
  'menu-hot-11': '/images/menu/piccolo.webp', // #12 Piccolo
  'menu-hot-12': '/images/menu/macchiato.webp', // #13 Macchiato
  'menu-hot-13': '/images/menu/hot-chocolate.webp', // #14 Hot Chocolate
  'menu-iced-0': '/images/menu/iced-v60.webp', // #15 Iced V60
  'menu-iced-1': '/images/menu/iced-coffee.webp', // #16 Iced
  'menu-iced-2': '/images/menu/iced-spanish-latte.webp', // #17 Iced Spanish Latte
  'menu-iced-3': '/images/menu/iced-espresso.webp', // #18 Iced Espresso
  'menu-iced-4': '/images/menu/iced-latte.webp', // #19 Iced Latte
  'menu-iced-5': '/images/menu/iced-cappuccino.webp', // #20 Iced Cappuccino
  'menu-iced-6': '/images/menu/pistachio.webp', // #21 Pistachio
  'menu-brew-0': '/images/menu/manual-v60.webp', // #22 V60
  'menu-brew-1': '/images/menu/turkish-coffee.webp', // #23 Turkish Coffee
  'menu-brew-2': '/images/menu/chemex.webp', // #24 Chemex
  'menu-brew-3': '/images/menu/aeropress.webp', // #25 Aeropress
  'menu-matcha-0': '/images/menu/cloud-matcha.webp', // #26 Cloud Matcha
  'menu-matcha-1': '/images/menu/classic-matcha.webp', // #27 Classic Matcha
  'menu-matcha-2': '/images/menu/hot-matcha-latte.webp', // #28 Matcha Latte (Hot)
  'menu-smoothies-0': '/images/menu/strawberry-split.webp', // #29 Strawberry Split
  'menu-smoothies-1': '/images/menu/mango-paradise.webp', // #30 Mango Paradise
  'menu-smoothies-2': '/images/menu/acai-kick.webp', // #31 Acai Kick
  'menu-smoothies-3': '/images/menu/pink-dragon.webp', // #32 Pink Dragon
  'menu-smoothies-4': '/images/menu/caribbean-kiss.webp', // #33 Carubbeab Kiss
  'menu-shakes-0': '/images/menu/banana-caramel-milkshake.webp', // #34 Banana & Caramel
  'menu-shakes-1': '/images/menu/vanilla-milkshake.webp', // #35 Vanilla
  'menu-shakes-2': '/images/menu/strawberry-choc-milkshake.webp', // #36 Strawberry & Choc
  'menu-shakes-3': '/images/menu/chocolate-milkshake.webp', // #37 Chocolate
  'menu-frappes-0': '/images/menu/coffee-caramel-frappe.webp', // #38 Coffee Caramel
  'menu-frappes-1': '/images/menu/mocha-frappe.webp', // #39 Mocha Frappe
  'menu-frappes-2': '/images/menu/matcha-frappe.webp', // #40 Matcha Frappe
  'menu-mojitos-0': '/images/menu/blue-lagoon-mojito.webp', // #41 Blue Lagoon
  'menu-mojitos-1': '/images/menu/strawberry-mojito.webp', // #42 Strawberry
  'menu-mojitos-2': '/images/menu/lemonade-mojito.webp', // #43 Lemonade
  'menu-mojitos-3': '/images/menu/passion-fruit-mojito.webp', // #44 Passion Fruit
  'menu-mojitos-4': '/images/menu/mint-mojito.webp', // #45 Mint
  'menu-juice-0': '/images/menu/orange-juice.webp', // #46 Orange Juice
  'menu-juice-1': '/images/menu/apple-juice.webp', // #47 Apple Juice
  'menu-juice-2': '/images/menu/lemon-juice.webp', // #48 Lemon Juice
  'menu-juice-3': '/images/menu/watermelon-juice.webp', // #49 Watermelon Juice
  'menu-juice-4': '/images/menu/pineapple-juice.webp', // #50 Pineapple Juice
  'menu-food-0': '/images/menu/cheese-butter-croissant.webp', // #51 Cheese Butter Croissant
  'menu-food-1': '/images/menu/zaatar-butter-croissant.webp', // #52 Zaatar Butter Croissant
  'menu-food-2': '/images/menu/plain-butter-croissant.webp', // #53 Plain Butter Croissant
  'menu-food-3': '/images/menu/almond-butter-croissant.webp', // #54 Almond Butter Croissant
  'menu-food-4': '/images/menu/chocolate-muffin.webp', // #55 Chocolate Muffin
  'menu-food-5': '/images/menu/blueberry-muffin.webp', // #56 Blueberry Muffin
  'menu-food-6': '/images/menu/pistachio-muffin.webp', // #57 Pistachio Muffin
  'menu-food-7': '/images/menu/red-velvet-muffin.webp', // #58 Red Velvet Muffin
  'menu-food-8': '/images/menu/vanilla-muffin.webp', // #59 Vanilla Muffin
  'menu-food-9': '/images/menu/chocolate-nut-brownie.webp', // #60 Chocolate Nut Brownie
  'menu-food-10': '/images/menu/blueberry-cheesecake.webp', // #61 Blueberry Cheesecake
  'menu-food-11': '/images/menu/hotdog-sandwich.webp', // #62 Hotdog Sandwich
  'menu-food-12': '/images/menu/water.webp', // #63 Water
};
