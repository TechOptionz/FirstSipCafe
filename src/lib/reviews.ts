// Real Google reviews for First Sip Cafe (Madina Mall, Dubai), pulled from the
// Google Maps listing on 2026-09-04. Photos and avatars are self-hosted copies
// in public/images/reviews/ (run scripts/optimize-images.mjs after adding any).
// Photo files are named <slug>-p<n>.webp: a plain -<n> suffix would be mistaken
// for a generated size variant by the optimiser.
//
// To refresh: open GOOGLE_REVIEWS_URL (src/lib/data.ts), copy new reviews here,
// drop their photos into public/images/reviews/photos and re-run the optimiser.

export const GOOGLE_RATING = 4.8;
export const GOOGLE_REVIEW_COUNT = 76;
/** Star histogram straight from the listing: [stars, count]. */
export const GOOGLE_RATING_BREAKDOWN: [number, number][] = [
  [5, 68],
  [4, 6],
  [3, 0],
  [2, 1],
  [1, 1],
];

export type Review = {
  name: string;
  /** e.g. "Local Guide · 29 reviews" — shown under the name, as on Google. */
  meta: string;
  localGuide: boolean;
  stars: number;
  /** Month the review was posted (absolute, so it never reads stale). */
  when: string;
  text: string;
  /** Self-hosted profile photo; omit to fall back to the initial. */
  avatar?: string;
  /** Photos the reviewer attached to their review. */
  photos: string[];
  initial: string;
};

type Raw = Omit<Review, 'initial' | 'localGuide' | 'photos'> & { photos?: string[] };

const R = (r: Raw): Review => ({
  ...r,
  photos: r.photos ?? [],
  localGuide: r.meta.startsWith('Local Guide'),
  initial: r.name.trim()[0].toUpperCase(),
});

const AV = (s: string) => `/images/reviews/avatars/${s}.webp`;
const PH = (s: string, n: number) =>
  Array.from({ length: n }, (_, i) => `/images/reviews/photos/${s}-p${i + 1}.webp`);

/**
 * Ordered for display: the first HOME_REVIEW_COUNT run in the home-page ticker,
 * the full list fills the /reviews page.
 */
export const REVIEWS: Review[] = [
  R({
    name: 'ansa abdul offur',
    meta: 'Local Guide · 25 reviews',
    stars: 5,
    when: 'July 2026',
    text: 'Had a wonderful experience at First Sip in Madina Mall. The atmosphere was comfortable and relaxing, the staff were friendly, and the service was excellent. The coffee were fresh, delicious, and served quickly. What made the visit even better was the availability of free Wi-Fi and convenient charging ports, making it a great place to work, study, or simply unwind. Overall, a perfect spot to enjoy a drink and spend some quality time. Highly recommended!',
    avatar: AV('ansa'),
    photos: PH('ansa', 1),
  }),
  R({
    name: 'Mansoor Ahmad Samar',
    meta: 'Local Guide · 29 reviews',
    stars: 5,
    when: 'November 2025',
    text: 'First Sip Cafe is an absolute gem! Tried their smoothie and it was perfectly refreshing and flavorful. The environment was cozy, calm, and beautifully designed, a great spot to relax or catch up with friends.',
    avatar: AV('mansoor'),
    photos: PH('mansoor', 3),
  }),
  R({
    name: 'Abdullah Salarzi',
    meta: '4 reviews',
    stars: 5,
    when: 'July 2026',
    text: 'Excellent café with a great atmosphere. Friendly staff, delicious coffee, and good customer service. The place is clean and comfortable. Highly recommended for anyone looking to enjoy quality coffee and snacks. Will definitely visit again!',
    avatar: AV('abdullah'),
    photos: PH('abdullah', 1),
  }),
  R({
    name: 'Isaq H Leader',
    meta: 'Local Guide · 403 reviews',
    stars: 4,
    when: 'February 2026',
    text: 'Need to impress a client or have a focused business chat? This is your spot. Tucked at the ground floor entrance of Madina Mall, it’s all about convenience and the right atmosphere. Ambiance: quiet, clean, and professional. Feels more like a boutique café than a mall food court. Drinks: a winning card. From serious espresso to indulgent milkshakes and healthy smoothies, there’s something for every taste and meeting tone. Will be my first choice for future business meets.',
    avatar: AV('isaq'),
  }),
  R({
    name: 'Riri',
    meta: '1 review',
    stars: 5,
    when: 'October 2025',
    text: 'Was very impressed with the Barista’s professionalism and friendliness — shoutout to Ivan! He did not only made an excellent coffee but also created a welcoming atmosphere.',
    photos: PH('riri', 1),
  }),
  R({
    name: 'Afan Sadiq',
    meta: 'Local Guide · 10 reviews',
    stars: 5,
    when: 'October 2025',
    text: 'This coffee shop is honestly one of the best places I’ve visited. The atmosphere is warm and cozy, making it a perfect spot to relax, work, or catch up with friends. The aroma of freshly brewed coffee hits you the moment you step inside, and it sets the perfect mood.',
    avatar: AV('afan'),
    photos: PH('afan', 1),
  }),
  R({
    name: 'Ambily Menon',
    meta: '6 reviews',
    stars: 5,
    when: 'May 2026',
    text: 'I usually come here for work meetings, and it’s one of the more reliable spots for that purpose. The service is efficient without being intrusive, staff take orders quickly and don’t rush you. Most tables are large enough for laptops and notes, which is a big plus. Wi-Fi is stable, and there are a few power outlets available. The food and beverages are very good. Overall, I would recommend it for casual business meetings or work sessions.',
    avatar: AV('ambily'),
  }),
  R({
    name: 'Atheef Abdurahman',
    meta: 'Local Guide · 20 reviews',
    stars: 5,
    when: 'January 2026',
    text: 'The coffee is good. But the service is amazing. Ivan is one of the most friendliest and welcoming baristas I have come across. Now I am a usual customer.',
    avatar: AV('atheef'),
  }),
  R({
    name: 'Eram Shaheen',
    meta: 'Local Guide · 86 reviews',
    stars: 4,
    when: 'August 2026',
    text: 'We grabbed a few drinks at First Sip Cafe. Great Coffee Caramel to stop by. Passion fruit drink is refreshing! Must try.',
    avatar: AV('eram'),
    photos: PH('eram', 3),
  }),
  R({
    name: 'mohsin hashmi',
    meta: 'Local Guide · 20 reviews',
    stars: 5,
    when: 'October 2025',
    text: 'Superb experience, nice taste and hospitality was awesome. Ivan is a wonder man. He is one of the best baristas. Taste and presentation was awesome.',
    avatar: AV('mohsin'),
    photos: PH('mohsin', 2),
  }),
  R({
    name: 'Gezim Hoxha',
    meta: 'Local Guide · 91 reviews',
    stars: 5,
    when: 'January 2026',
    text: 'Great service. Very friendly staff. Ivan was acting like the owner. That’s how much he cares about his customers.',
    avatar: AV('gezim'),
  }),
  R({
    name: 'Inaas Mughis',
    meta: '12 reviews',
    stars: 5,
    when: 'November 2025',
    text: 'Amazing coffee! And the barista Ivan is great, he always makes excellent coffee. The popcorn latte is a must try.',
    avatar: AV('inaas'),
  }),
  R({
    name: 'Umamah Mughis',
    meta: 'Local Guide · 24 reviews',
    stars: 5,
    when: 'November 2025',
    text: 'Great coffee, I love their popcorn latte! Great service from Ivan, he’s so friendly!',
    photos: PH('umamah', 1),
  }),
  R({
    name: 'Arjun Sanal Kumar',
    meta: '10 reviews',
    stars: 5,
    when: 'August 2026',
    text: 'Great coffee & excellent service from Janice, Ivan and Promise. Good place to work and chill.',
    avatar: AV('arjun'),
  }),
  R({
    name: 'Judy Ngari',
    meta: '9 reviews',
    stars: 5,
    when: 'June 2026',
    text: 'I loved the muffins, they are fresh, and the coffee is awesome. Also Miss Janis has very good customer service.',
  }),
  R({
    name: 'Latifa Latifa',
    meta: '5 reviews',
    stars: 5,
    when: 'November 2025',
    text: 'Their coffee is delicious and the place is beautiful. I recommend the coffee; the barista is friendly and has a great attitude.',
  }),
];

export const HOME_REVIEW_COUNT = 8;
export const HOME_REVIEWS = REVIEWS.slice(0, HOME_REVIEW_COUNT);

/** Guest photo wall on /reviews: every review photo plus a few from the listing. */
export const GUEST_PHOTOS: { src: string; alt: string }[] = [
  { src: '/images/reviews/photos/riri-p1.webp', alt: 'Latte art in a black cup' },
  { src: '/images/reviews/photos/mohsin-p1.webp', alt: 'Blueberry cheesecake, cappuccino and espresso' },
  { src: '/images/reviews/photos/mansoor-p2.webp', alt: 'The pastry counter and bar' },
  { src: '/images/reviews/photos/eram-p3.webp', alt: 'Coffee Caramel frappe' },
  { src: '/images/reviews/photos/place-barista.webp', alt: 'Barista serving a flat white' },
  { src: '/images/reviews/photos/abdullah-p1.webp', alt: 'Seating inside the café' },
  { src: '/images/reviews/photos/place-cheesecake-cups.webp', alt: 'Cheesecake with takeaway cups' },
  { src: '/images/reviews/photos/afan-p1.webp', alt: 'Sip Smile Repeat wall' },
  { src: '/images/reviews/photos/eram-p2.webp', alt: 'Mojito with fresh mint' },
  { src: '/images/reviews/photos/mohsin-p2.webp', alt: 'Cappuccino on a tray' },
  { src: '/images/reviews/photos/mansoor-p3.webp', alt: 'Begin the day with a cup of coffee' },
  { src: '/images/reviews/photos/ansa-p1.webp', alt: 'Café entrance at Madina Mall' },
  { src: '/images/reviews/photos/umamah-p1.webp', alt: 'Iced coffee with the menu' },
  { src: '/images/reviews/photos/mansoor-p1.webp', alt: 'Two takeaway cups' },
  { src: '/images/reviews/photos/place-seating.webp', alt: 'Lounge seating' },
  { src: '/images/reviews/photos/eram-p1.webp', alt: 'Smoothie and milkshake menu' },
];
