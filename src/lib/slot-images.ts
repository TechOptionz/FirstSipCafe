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
export const SLOT_IMAGES: Record<string, string> = {};
