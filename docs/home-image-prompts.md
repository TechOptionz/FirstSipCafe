# Home page image prompts

Eight empty slots on the home page, plus the existing hero background. Brand palette: dark espresso `#2b1d16`, warm cream `#f4ede4`, terracotta `#c8623a`, tan `#c9a88f`. Location: First Sip Café, Madina Mall, Ground Floor, Dubai.

Paste the **style suffix** at the end of every prompt so all images feel like one photoshoot.

## Style suffix (append to every prompt)

```
Professional editorial café photography, shot on a full-frame camera with an 85mm lens at f/2.8, soft natural window light, warm colour grade with espresso-brown shadows and cream highlights, subtle terracotta accents, shallow depth of field, clean composition with negative space, no text, no logos, no watermarks, no people's faces in focus, photorealistic, high resolution.
```

## Slot map

| Slot id | Aspect | File to save as | Subject |
|---|---|---|---|
| `tile-menu` | 4:5 portrait | `public/images/home/tile-menu.jpg` | Latte art close-up |
| `tile-visit` | 4:5 portrait | `public/images/home/tile-visit.jpg` | Storefront |
| `tile-reviews` | 4:5 portrait | `public/images/home/tile-reviews.jpg` | Guests in the café |
| `feature-hot` | 5:4 landscape | `public/images/home/feature-hot.jpg` | Spanish latte / espresso bar |
| `feature-brew` | 5:4 landscape | `public/images/home/feature-brew.jpg` | V60 / Chemex slow brew |
| `feature-matcha` | 5:4 landscape | `public/images/home/feature-matcha.jpg` | Ceremonial matcha |
| `feature-food` | 5:4 landscape | `public/images/home/feature-food.jpg` | Fresh pastries |
| `visit-hero` | 21:9 ultra-wide | `public/images/home/visit-hero.png` | Wide interior, shown under a dark overlay |
| `visit-storefront` | 21:9 ultra-wide | `public/images/home/visit-storefront.png` | Hero of the /visit page (counter shot, added 2026-09-04) |
| `footer-cta` | 21:9 ultra-wide | `public/images/home/footer-cta.png` | Behind the footer "Come by the Ground Floor" strip on Menu, Reviews and Visit pages |
| hero background | 16:9 | `public/assets/hero-bg.png` (replaced 2026-09-04) | Dark moody café backdrop |

## Prompts

### 1. tile-menu (4:5)

```
Extreme close-up of a flat white in a matte cream ceramic cup, intricate rosetta latte art with crisp white-on-caramel contrast, cup resting on a dark walnut café counter, a single espresso bean and a linen napkin softly blurred in the background, steam faintly visible, top-down 45-degree angle, vertical 4:5 portrait composition.
```

### 2. tile-visit (4:5)

```
Exterior of a modern specialty coffee shop inside an upscale Dubai mall, dark espresso-brown facade with warm cream signage panel left blank, floor-to-ceiling glass front glowing with warm interior light, terracotta and brass accents, polished stone mall floor reflecting the lights, a few potted olive plants by the entrance, evening ambience, vertical 4:5 portrait composition, straight-on architectural perspective.
```

### 3. tile-reviews (4:5)

```
Candid lifestyle shot inside a warm minimalist café, two friends seen from behind and slightly to the side laughing over coffee at a small oak table, cream-coloured walls, hanging pendant lights, a barista blurred in the background at the espresso bar, natural daylight from a large window, faces turned away or softly out of focus, vertical 4:5 portrait composition.
```

### 4. feature-hot (5:4)

```
A signature Spanish latte in a tall clear glass showing three distinct layers of condensed milk, espresso and velvety steamed milk, placed on a dark stone espresso bar, a chrome espresso machine portafilter and a dusting of coffee grounds softly out of focus behind it, warm morning light, horizontal 5:4 composition.
```

### 5. feature-brew (5:4)

```
Barista's hands pouring hot water in a slow spiral from a matte black gooseneck kettle into a white ceramic V60 dripper on a wooden stand, a glass Chemex and an Aeropress arranged beside it, coffee blooming and steam rising, dark walnut brew bar, moody side lighting, horizontal 5:4 composition, hands only, no face.
```

### 6. feature-matcha (5:4)

```
Ceremonial-grade matcha being whisked in a handmade stoneware bowl with a bamboo chasen whisk, vivid jade-green froth, a finished iced matcha latte with a thick cloud of cold foam beside it in a tall glass, cream linen tablecloth, a small dish of matcha powder, soft daylight, horizontal 5:4 composition.
```

### 7. feature-food (5:4)

```
Overhead flat-lay of a freshly baked pastry spread on a rustic cream marble surface: golden flaky butter croissants, a zaatar croissant, blueberry muffins, fudgy brownie squares and a slice of New York cheesecake with berry compote, scattered flour and a folded linen napkin, a cappuccino at the edge of the frame, warm morning light, horizontal 5:4 composition.
```

### 8. visit-hero (21:9)

```
Ultra-wide interior shot of an elegant specialty café at golden hour, long walnut communal table, cream plaster walls, brass pendant lights, an espresso bar with a chrome machine at the far end, terracotta cushions, a few guests seated with backs to camera, sunlight streaking across the floor, cinematic 21:9 panoramic composition, symmetrical one-point perspective, slightly darker exposure suitable for white text overlay.
```

### 9. hero-bg (16:9, optional regeneration)

```
Dark moody background of a café espresso bar out of focus, deep espresso-brown tones with soft bokeh from warm pendant lights, faint steam, a hint of terracotta and brass, heavily blurred so it works as a backdrop behind large cream headline text, no sharp subject, 16:9 widescreen composition, low-key lighting, very dark left half.
```

## Wiring

After saving the files, add to `src/lib/slot-images.ts`:

```ts
'tile-menu': '/images/home/tile-menu.jpg',
'tile-visit': '/images/home/tile-visit.jpg',
'tile-reviews': '/images/home/tile-reviews.jpg',
'feature-hot': '/images/home/feature-hot.jpg',
'feature-brew': '/images/home/feature-brew.jpg',
'feature-matcha': '/images/home/feature-matcha.jpg',
'feature-food': '/images/home/feature-food.jpg',
'visit-hero': '/images/home/visit-hero.jpg',
```

## Page headers (Menu and Reviews)

Full-width strips with the headline on the left. Subject goes on the right, left third stays dark. No slot exists yet for these; add `hero-menu` / `hero-reviews` slots when the images arrive.

### Menu page hero, "What We Craft" (21:9)

```
Ultra-wide cinematic shot along a specialty café espresso bar at golden hour, a lineup of signature drinks arranged on the dark stone counter on the right side of the frame: a layered Spanish latte in a tall glass, an iced matcha with cold foam, a flat white with latte art, a pour-over carafe and a mocha frappe, chrome espresso machine and copper pendant lights softly blurred behind them, left third of the frame dark and empty with only warm bokeh, subject weighted to the right, 21:9 panoramic composition, slightly underexposed for white text overlay on the left.
```

### Reviews page hero, "What Guests Say" (21:9)

```
Ultra-wide cinematic shot of a warm modern café interior at golden hour, guests seated at marble tables in the right half of the frame laughing over coffee with their backs or profiles to the camera, velvet chairs in green, blush pink and tan with brass legs, big windows with sunset light behind them, brick wall and pendant lights, the left third of the frame a quiet dark brick wall with soft bokeh, faces turned away or out of focus, 21:9 panoramic composition, slightly underexposed for white text overlay on the left.
```

Append the style suffix from the top of this file to both.
