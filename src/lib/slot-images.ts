/**
 * Photo for each <ImageSlot>. Empty by default — exactly how the design ships,
 * where every slot is an unfilled placeholder.
 *
 * To fill one: drop the file in `public/images/` and map its slot id here.
 *
 *   export const SLOT_IMAGES: Record<string, string> = {
 *     'menu-hot-3': '/images/spanish-latte.jpg',
 *     'tile-menu': '/images/latte-art.jpg',
 *     'visit-storefront': '/images/storefront.jpg',
 *   };
 *
 * Slot ids in use:
 *   tile-menu · tile-visit · tile-reviews          (home tiles)
 *   feature-hot · feature-brew · feature-matcha · feature-food
 *   visit-hero · visit-storefront
 *   menu-<categoryId>-<index>                      (every menu item, e.g. menu-hot-3)
 */
export const SLOT_IMAGES: Record<string, string> = {
  // Menu photos live in public/images/menu/. Numbers are the item's position
  // in the full menu order (see MENU in data.ts). Items without an entry
  // Every item currently has a photo; remove an entry to fall back to the
  // empty placeholder.
  'menu-hot-0': '/images/menu/espresso.jpg', // #01 Espresso
  'menu-hot-1': '/images/menu/americano.jpg', // #02 Americano
  'menu-hot-2': '/images/menu/cappuccino.jpg', // #03 Cappuccino
  'menu-hot-3': '/images/menu/hot-spanish-latte.jpg', // #04 Spanish Latte
  'menu-hot-4': '/images/menu/flat-white.jpg', // #05 Flat White
  'menu-hot-5': '/images/menu/caffe-latte.jpg', // #06 Caffe Latte
  'menu-hot-6': '/images/menu/caramel-latte.jpg', // #07 Caramel Latte
  'menu-hot-7': '/images/menu/cafe-mocha.jpg', // #08 Cafe Mocha
  'menu-hot-8': '/images/menu/popcorn-latte.jpg', // #09 Popcorn Latte
  'menu-hot-9': '/images/menu/spanish-cortado.jpg', // #10 Spanish Cortado
  'menu-hot-10': '/images/menu/cortado.jpg', // #11 Cortado
  'menu-hot-11': '/images/menu/piccolo.jpg', // #12 Piccolo
  'menu-hot-12': '/images/menu/macchiato.jpg', // #13 Macchiato
  'menu-hot-13': '/images/menu/hot-chocolate.jpg', // #14 Hot Chocolate
  'menu-iced-0': '/images/menu/iced-v60.jpg', // #15 Iced V60
  'menu-iced-1': '/images/menu/iced-coffee.jpg', // #16 Iced
  'menu-iced-2': '/images/menu/iced-spanish-latte.jpg', // #17 Iced Spanish Latte
  'menu-iced-3': '/images/menu/iced-espresso.jpg', // #18 Iced Espresso
  'menu-iced-4': '/images/menu/iced-latte.jpg', // #19 Iced Latte
  'menu-iced-5': '/images/menu/iced-cappuccino.jpg', // #20 Iced Cappuccino
  'menu-iced-6': '/images/menu/pistachio.jpg', // #21 Pistachio
  'menu-brew-0': '/images/menu/manual-v60.jpg', // #22 V60
  'menu-brew-1': '/images/menu/turkish-coffee.jpg', // #23 Turkish Coffee
  'menu-brew-2': '/images/menu/chemex.jpg', // #24 Chemex
  'menu-brew-3': '/images/menu/aeropress.jpg', // #25 Aeropress
  'menu-matcha-0': '/images/menu/cloud-matcha.jpg', // #26 Cloud Matcha
  'menu-matcha-1': '/images/menu/classic-matcha.jpg', // #27 Classic Matcha
  'menu-matcha-2': '/images/menu/hot-matcha-latte.jpg', // #28 Matcha Latte (Hot)
  'menu-smoothies-0': '/images/menu/strawberry-split.jpg', // #29 Strawberry Split
  'menu-smoothies-1': '/images/menu/mango-paradise.jpg', // #30 Mango Paradise
  'menu-smoothies-2': '/images/menu/acai-kick.jpg', // #31 Acai Kick
  'menu-smoothies-3': '/images/menu/pink-dragon.png', // #32 Pink Dragon
  'menu-smoothies-4': '/images/menu/caribbean-kiss.jpg', // #33 Carubbeab Kiss
  'menu-shakes-0': '/images/menu/banana-caramel-milkshake.jpg', // #34 Banana & Caramel
  'menu-shakes-1': '/images/menu/vanilla-milkshake.jpg', // #35 Vanilla
  'menu-shakes-2': '/images/menu/strawberry-choc-milkshake.jpg', // #36 Strawberry & Choc
  'menu-shakes-3': '/images/menu/chocolate-milkshake.jpg', // #37 Chocolate
  'menu-frappes-0': '/images/menu/coffee-caramel-frappe.jpg', // #38 Coffee Caramel
  'menu-frappes-1': '/images/menu/mocha-frappe.jpg', // #39 Mocha Frappe
  'menu-frappes-2': '/images/menu/matcha-frappe.jpg', // #40 Matcha Frappe
  'menu-mojitos-0': '/images/menu/blue-lagoon-mojito.jpg', // #41 Blue Lagoon
  'menu-mojitos-1': '/images/menu/strawberry-mojito.jpg', // #42 Strawberry
  'menu-mojitos-2': '/images/menu/lemonade-mojito.jpg', // #43 Lemonade
  'menu-mojitos-3': '/images/menu/passion-fruit-mojito.jpg', // #44 Passion Fruit
  'menu-mojitos-4': '/images/menu/mint-mojito.jpg', // #45 Mint
  'menu-juice-0': '/images/menu/orange-juice.jpg', // #46 Orange Juice
  'menu-juice-1': '/images/menu/apple-juice.jpg', // #47 Apple Juice
  'menu-juice-2': '/images/menu/lemon-juice.png', // #48 Lemon Juice
  'menu-juice-3': '/images/menu/watermelon-juice.jpg', // #49 Watermelon Juice
  'menu-juice-4': '/images/menu/pineapple-juice.jpg', // #50 Pineapple Juice
  'menu-food-0': '/images/menu/cheese-butter-croissant.png', // #51 Cheese Butter Croissant
  'menu-food-1': '/images/menu/zaatar-butter-croissant.png', // #52 Zaatar Butter Croissant
  'menu-food-2': '/images/menu/plain-butter-croissant.png', // #53 Plain Butter Croissant
  'menu-food-3': '/images/menu/almond-butter-croissant.png', // #54 Almond Butter Croissant
  'menu-food-4': '/images/menu/chocolate-muffin.png', // #55 Chocolate Muffin
  'menu-food-5': '/images/menu/blueberry-muffin.png', // #56 Blueberry Muffin
  'menu-food-6': '/images/menu/pistachio-muffin.png', // #57 Pistachio Muffin
  'menu-food-7': '/images/menu/red-velvet-muffin.png', // #58 Red Velvet Muffin
  'menu-food-8': '/images/menu/vanilla-muffin.png', // #59 Vanilla Muffin
  'menu-food-9': '/images/menu/chocolate-nut-brownie.png', // #60 Chocolate Nut Brownie
  'menu-food-10': '/images/menu/blueberry-cheesecake.png', // #61 Blueberry Cheesecake
  'menu-food-11': '/images/menu/hotdog-sandwich.png', // #62 Hotdog Sandwich
  'menu-food-12': '/images/menu/water.jpg', // #63 Water
};
