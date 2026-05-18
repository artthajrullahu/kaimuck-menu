// kaimuck menu — edit this file to change items, prices, descriptions.
// Each item: { n: name, d: description, p: price in MKD (denars) }
// Categories appear in the order listed here.

window.MENU = {
  brand: {
    name: "kaimuck",
    tag: "specialty roast · skopje",
    hours: "mon–sun · 08:00–00:00",
    hero: "tap a tag. tell our barista. magic happens.",
    secret:
      "ps: ask the barista about today’s off-menu pour. they made it just for you. probably.",
  },

  categories: [
    {
      id: "kafet",
      name: "kafet",
      sub: "the classics, brewed loud",
      items: [
        { n: "espresso",              d: "the official wake-up call",        p: 70  },
        { n: "double espresso",       d: "twice the trouble, twice the love", p: 110 },
        { n: "macchiato",             d: "stained, not painted",             p: 80  },
        { n: "cappuccino",            d: "foam tall enough for a selfie",    p: 90  },
        { n: "latte",                 d: "milk’s love letter",               p: 100 },
        { n: "americano",             d: "espresso, but make it leisurely",  p: 70  },
        { n: "freddo espresso",       d: "shaken, chilled, sharp",           p: 100 },
        { n: "freddo cappuccino",     d: "iced foam, summer drama",          p: 120 },
        { n: "turkish",               d: "slow brew, old soul",              p: 50  },
        { n: "nescafe",               d: "the granny classic",               p: 100 },
        { n: "tea",                   d: "a quiet moment",                   p: 70  },
        { n: "hot chocolate",         d: "a blanket in a cup",               p: 120 },
        { n: "hot chocolate plazma",  d: "cocoa + childhood biscuit",        p: 150 },
        { n: "barista syrups",        d: "your drink, your rules",           p: 150 },
      ],
    },
    {
      id: "drinks",
      name: "drinks",
      sub: "fizzy, fresh, or zero-proof",
      items: [
        { n: "coca cola",       d: "the og",                          p: 100 },
        { n: "fanta",           d: "orange you glad",                 p: 100 },
        { n: "sprite",          d: "lemon-lime alibi",                p: 100 },
        { n: "schweppes",       d: "tonic, but make it bitter",       p: 100 },
        { n: "ice tea",         d: "lipton-style, cold and easy",     p: 100 },
        { n: "jana ice tea",    d: "the upgraded sip",                p: 120 },
        { n: "cdvita",          d: "vitamins in a bottle",            p: 70  },
        { n: "multi sola",      d: "multifruit, no apologies",        p: 100 },
        { n: "strumka",         d: "macedonian summer in a can",      p: 100 },
        { n: "g eagle",         d: "wings, sort of",                  p: 100 },
        { n: "red bull",        d: "afternoon override",              p: 150 },
        { n: "juice",           d: "house pick, ask us",              p: 100 },
        { n: "heineken 0 alc",  d: "all the vibes, none of the proof", p: 180 },
        { n: "water",           d: "stay hydrated",                   p: 50  },
        { n: "pelisterka",      d: "sparkling, straight from pelister", p: 60 },
      ],
    },
    {
      id: "juices",
      name: "juices",
      sub: "freshly squeezed",
      items: [
        { n: "fresh mix", d: "today’s fruit, blended on the spot", p: 150 },
      ],
    },
    {
      id: "smoothie",
      name: "smoothie",
      sub: "thick, cold, fruit-forward",
      items: [
        { n: "plazma",     d: "the biscuit smoothie you didn’t know you needed", p: 150 },
        { n: "exotic",     d: "tropical postcard in a cup",                      p: 160 },
        { n: "strawberry", d: "pink and proud",                                  p: 150 },
        { n: "raspberry",  d: "tart, sweet, summer",                             p: 150 },
      ],
    },
    {
      id: "more",
      name: "more",
      sub: "fix your blood sugar",
      items: [
        { n: "croissant butter",   d: "flaky and proud of it",         p: 60  },
        { n: "nutella croissant",  d: "chocolate hazelnut smuggle",    p: 80  },
        { n: "cookie",             d: "soft middle, crisp edges",      p: 50  },
        { n: "bajadera",           d: "balkan chocolate legend",       p: 60  },
        { n: "ice cream",          d: "one scoop, big mood",           p: 60  },
        { n: "sugarmoney",         d: "sweet, briefly yours",          p: 80  },
        { n: "tresleches",         d: "three milks, one love",         p: 120 },
        { n: "fjodessert",         d: "the house favourite",           p: 130 },
        { n: "fjodessert premium", d: "the house favourite, leveled up", p: 150 },
        { n: "chia pudding",       d: "breakfast pretending to be dessert", p: 150 },
        { n: "chia pudding pro",   d: "extra toppings, extra smug",    p: 180 },
        { n: "biscuit cake",       d: "no-bake, all yes",              p: 170 },
      ],
    },
  ],
};
