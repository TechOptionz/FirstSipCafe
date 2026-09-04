// Menu / content data — ported verbatim from the "First Sip Cafe v2" design source.

export type MenuItem = {
  id: string;
  name: string;
  price: number;
  catId: string;
  catName: string;
  serve: string;
  description: string;
};

export type Category = {
  id: string;
  name: string;
  serve: string;
  count: number;
  items: MenuItem[];
};

type RawCategory = [string, string, string, [string, number][]];

const MENU: RawCategory[] = [
  ['hot', 'Hot Coffees', 'Hot · 4–8 oz', [['Espresso', 10], ['Americano', 10], ['Cappuccino', 18], ['Spanish Latte', 20], ['Flat White', 18], ['Caffe Latte', 18], ['Caramel Latte', 20], ['Cafe Mocha', 20], ['Popcorn Latte', 18], ['Spanish Cortado', 18], ['Cortado', 15], ['Piccolo', 15], ['Macchiato', 15], ['Hot Chocolate', 18]]],
  ['iced', 'Iced Coffees', 'Iced · 16 oz', [['Iced V60', 22], ['Iced', 15], ['Iced Spanish Latte', 20], ['Iced Espresso', 14], ['Iced Latte', 20], ['Iced Cappuccino', 18], ['Pistachio', 22]]],
  ['brew', 'Manual Brew', 'Hand-poured to order', [['V60', 22], ['Turkish Coffee', 15], ['Chemex', 20], ['Aeropress', 15]]],
  ['matcha', 'Matcha', 'Hot or iced', [['Cloud Matcha', 21], ['Classic Matcha', 21], ['Matcha Latte (Hot)', 20]]],
  ['smoothies', 'Smoothies', 'Iced · 16 oz', [['Strawberry Split', 17], ['Mango Paradise', 17], ['Acai Kick', 17], ['Pink Dragon', 17], ['Carubbeab Kiss', 17]]],
  ['shakes', 'Milkshakes', 'Iced · 16 oz', [['Banana & Caramel', 17], ['Vanilla', 17], ['Strawberry & Choc', 17], ['Chocolate', 17]]],
  ['frappes', 'Frappes', 'Blended · 16 oz', [['Coffee Caramel', 17], ['Mocha Frappe', 17], ['Matcha Frappe', 17]]],
  ['mojitos', 'Mojitos', 'Iced · 16 oz', [['Blue Lagoon', 14], ['Strawberry', 14], ['Lemonade', 14], ['Passion Fruit', 14], ['Mint', 14]]],
  ['juice', 'Fresh Juice', 'Freshly pressed · 12 oz', [['Orange Juice', 15], ['Apple Juice', 15], ['Lemon Juice', 17], ['Watermelon Juice', 17], ['Pineapple Juice', 17]]],
  ['food', 'Food Items', 'Baked fresh daily', [['Cheese Butter Croissant', 9], ['Zaatar Butter Croissant', 10], ['Plain Butter Croissant', 10], ['Almond Butter Croissant', 15], ['Chocolate Muffin', 14], ['Blueberry Muffin', 14], ['Pistachio Muffin', 14], ['Red Velvet Muffin', 14], ['Vanilla Muffin', 14], ['Chocolate Nut Brownie', 15], ['Blueberry Cheesecake', 19], ['Hotdog Sandwich', 10], ['Water', 2]]],
];

const CAT_DESC: Record<string, string> = {
  hot: 'Pulled from our house specialty espresso and finished with silky steamed milk. Served hot, made to order at the bar.',
  iced: 'Our specialty espresso poured over ice for a clean, refreshing cup. Built for Dubai afternoons.',
  brew: "Single-origin beans, weighed and hand-poured to order. Ask the barista about today's roast.",
  matcha: 'Ceremonial-grade matcha whisked fresh, then paired with cold or steamed milk.',
  smoothies: 'Real fruit blended with ice until velvety. No syrups, no shortcuts.',
  shakes: 'Thick, cold and indulgent. Blended with premium ice cream and topped generously.',
  frappes: 'Ice-blended until frosty and smooth, finished with whipped cream.',
  mojitos: 'Sparkling, mint-fresh and alcohol-free. Our lightest, most refreshing pour.',
  juice: 'Pressed the moment you order. Nothing added.',
  food: 'Baked fresh every morning and served warm on request. Perfect alongside your first sip.',
};

const ITEM_DESC: Record<string, string> = {
  'Spanish Latte': 'Our signature cup. Double espresso, steamed milk and a touch of sweetened condensed milk for a caramel-smooth finish. The most-ordered drink at First Sip.',
  'Cloud Matcha': 'Ceremonial matcha under a pillow of cold foam. Creamy, earthy and not too sweet — a guest favourite.',
  'Iced V60': 'A hand-poured V60 brewed strong and flash-chilled over ice. Bright, clean and layered.',
  'Pink Dragon': 'Dragon fruit, banana and berries blended to a vivid pink. As beautiful as it tastes.',
  'Blueberry Cheesecake': 'Baked New York-style cheesecake with a buttery base and fresh blueberry compote.',
  Pistachio: 'A house specialty: real pistachio paste with steamed milk. Unique, nutty and worth the trip.',
  V60: 'Single-origin beans, weighed, ground and hand-poured through a V60 dripper. Roughly four minutes of care per cup.',
  'Turkish Coffee': 'Finely ground and slow-simmered the traditional way. Served in a small cup with a glass of water.',
  Chemex: 'A clean, tea-like pour-over through a thick Chemex filter. Best for lighter roasts.',
  Aeropress: 'Pressure-brewed for a rich, low-acid cup that lands between espresso and filter.',
  Espresso: 'A double shot of our specialty blend. Sweet, syrupy and balanced.',
  Americano: 'Double espresso lengthened with hot water. Simple and clean.',
  Cappuccino: 'Equal parts espresso, steamed milk and thick microfoam.',
  'Flat White': 'A double ristretto under velvety, thin-textured milk. Stronger than a latte.',
  'Popcorn Latte': 'Buttery popcorn syrup meets our espresso and steamed milk. Playful and a little nostalgic.',
  'Hot Chocolate': 'Real melted chocolate whisked into steamed milk.',
  Water: 'Chilled bottled water. Served with every manual brew, or on its own.',
  'Cheese Butter Croissant': 'A flaky all-butter croissant filled with melted cheese. Best served warm.',
  'Zaatar Butter Croissant': 'All-butter croissant with a generous layer of zaatar and olive oil.',
  'Almond Butter Croissant': 'Twice-baked with almond cream and topped with toasted flaked almonds.',
  'Chocolate Nut Brownie': 'Dense, fudgy and studded with roasted nuts.',
};

export const CATS: Category[] = MENU.map(([id, name, serve, items]) => ({
  id,
  name,
  serve,
  count: items.length,
  items: items.map(([n, p], i) => ({
    id: id + '-' + i,
    name: n,
    price: p,
    catId: id,
    catName: name,
    serve,
    description: ITEM_DESC[n] || CAT_DESC[id],
  })),
}));

export const ALL_ITEMS: MenuItem[] = CATS.flatMap((c) => c.items);

export const ITEM_BY_ID: Record<string, MenuItem> = Object.fromEntries(
  ALL_ITEMS.map((i) => [i.id, i]),
);

export type Review = { name: string; meta: string; when: string; text: string; initial: string };

const RAW_REVIEWS: [string, string, string, string][] = [
  ['Ahmed Al Mansoori', 'Local Guide · 14 reviews', '2 weeks ago', 'Best Spanish Latte in the area — perfectly balanced, not too sweet. The staff are genuinely friendly and the vibe is incredibly cozy. My go-to spot every single week at Madina Mall!'],
  ['Sara M.', '5 reviews', '1 month ago', 'The Cloud Matcha is absolutely divine — creamy, earthy, not too sweet. The Blueberry Cheesecake was incredibly fresh. Amazing value for money. Will keep coming back without hesitation!'],
  ['Khalid R.', 'Local Guide · 30 reviews', '3 weeks ago', 'Had the V60 manual brew — outstanding! You can tell they truly care about quality here. The Chemex was excellent too. A proper hidden gem inside Madina Mall. Highly recommended!'],
  ['Fatima H.', '8 reviews', '1 month ago', 'Came with my whole family — everyone loved it! Kids had smoothies, husband had Turkish coffee, I had the Iced Spanish Latte. Croissants were freshly baked and buttery. Perfect family stop!'],
  ['Mohammed Al Farsi', 'Local Guide · 52 reviews', '2 months ago', "First Sip Cafe is a rare find — proper specialty coffee at genuinely fair prices. The Pistachio drink is unique and absolutely worth trying. Fast service, always fresh. One of Dubai's best!"],
  ['Layla K.', '3 reviews', '3 weeks ago', "Pink Dragon smoothie was stunning — beautiful colour and tasted amazing! Such a warm welcoming atmosphere. Perfect break while shopping. I'm already planning my next visit this weekend!"],
];

export const REVIEWS: Review[] = RAW_REVIEWS.map(([name, meta, when, text]) => ({
  name,
  meta,
  when,
  text,
  initial: name[0],
}));

export const PICKS: { id: string; wide?: boolean; tagline: string }[] = [
  { id: 'hot-3', wide: true, tagline: 'Our signature. Espresso, steamed milk, condensed-milk sweetness.' },
  { id: 'matcha-0', tagline: 'Ceremonial matcha under a pillow of cold foam.' },
  { id: 'iced-0', tagline: 'Hand-poured V60, flash-chilled over ice.' },
  { id: 'smoothies-3', wide: true, tagline: 'Dragon fruit, banana and berries. Vivid pink.' },
  { id: 'food-10', tagline: 'Baked New York-style, fresh blueberry compote.' },
  { id: 'brew-1', tagline: 'Slow-simmered the traditional way.' },
];

export const MARQUEE = [
  'Spanish Latte',
  'Cloud Matcha',
  'Iced V60',
  'Pink Dragon',
  'Turkish Coffee',
  'Blueberry Cheesecake',
  'Pistachio',
  'Flat White',
];

export const PAGES = ['home', 'menu', 'reviews', 'visit'] as const;
export const PAGE_LABELS: Record<string, string> = {
  home: 'Home',
  menu: 'Menu',
  reviews: 'Reviews',
  visit: 'Visit',
};
export const PAGE_HREFS: Record<string, string> = {
  home: '/',
  menu: '/menu',
  reviews: '/reviews',
  visit: '/visit',
};

export const FEATURE_IDS = ['hot', 'brew', 'matcha', 'food'];
export const FEATURE_BLURBS: Record<string, string> = {
  hot: 'Fourteen ways to start the day, from a straight double espresso to our signature Spanish Latte.',
  brew: 'Slow coffee for people who care. V60, Chemex, Aeropress and traditional Turkish, brewed by hand.',
  matcha: 'Ceremonial-grade matcha, whisked fresh. Try the Cloud Matcha under its pillow of cold foam.',
  food: 'Croissants, muffins, brownies and cheesecake, baked fresh every morning to go with your cup.',
};

export const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const MAPS_URL = 'https://maps.google.com/?q=Madina+Mall+Dubai';
export const TEL_LANDLINE = '+97142880478';
export const TEL_MOBILE = '+971529400208';

export const pad2 = (n: number) => String(n).padStart(2, '0');
