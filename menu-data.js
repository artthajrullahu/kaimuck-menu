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
      id: "hot",
      name: "hot",
      sub: "the classics, brewed loud",
      items: [
        { n: "espresso",     d: "the official wake-up call",          p: 70  },
        { n: "doppio",       d: "twice the trouble, twice the love",  p: 110 },
        { n: "macchiato",    d: "stained, not painted",               p: 80  },
        { n: "cortado",      d: "the diplomatic double",              p: 120 },
        { n: "flat white",   d: "no foam, no drama",                  p: 140 },
        { n: "cappuccino",   d: "foam tall enough for a selfie",      p: 130 },
        { n: "latte",        d: "milk’s love letter",                 p: 140 },
        { n: "mocha",        d: "a cocoa-covered confession",         p: 150 },
        { n: "americano",    d: "espresso, but make it leisurely",    p: 100 },
      ],
    },
    {
      id: "cold",
      name: "cold",
      sub: "for when skopje hits 38°",
      items: [
        { n: "iced latte",     d: "summer, bottled",                  p: 160 },
        { n: "iced americano", d: "rocks, no roll",                   p: 130 },
        { n: "cold brew",      d: "12 hours of waiting, zero regret", p: 170 },
        { n: "iced mocha",     d: "brain freeze — worth it",          p: 180 },
        { n: "matcha latte",   d: "green is the new black",           p: 180 },
        { n: "iced chai",      d: "spice, but make it chill",         p: 170 },
      ],
    },
    {
      id: "soft",
      name: "soft",
      sub: "all vibes, no caffeine",
      items: [
        { n: "hot chocolate", d: "a blanket in a cup",                p: 150 },
        { n: "matcha",        d: "tea ceremony, casual edit",         p: 160 },
        { n: "chai latte",    d: "a hug from a stranger",             p: 150 },
        { n: "lemonade",      d: "made this morning, swear",          p: 120 },
        { n: "fresh oj",      d: "sunshine, squeezed",                p: 130 },
      ],
    },
    {
      id: "bite",
      name: "bite",
      sub: "fix your blood sugar",
      items: [
        { n: "croissant",     d: "flaky and proud of it",             p: 90  },
        { n: "pain au choco", d: "french for “yes, please”",          p: 110 },
        { n: "burek",         d: "the local hero",                    p: 110 },
        { n: "cheesecake",    d: "the new york cousin",               p: 180 },
        { n: "banana bread",  d: "tanja bakes it every tuesday",      p: 130 },
      ],
    },
    {
      id: "secret",
      name: "secret",
      sub: "shh — off-menu specials",
      items: [
        { n: "barista’s pick", d: "whatever they’re obsessing over this week", p: 150 },
        { n: "the boss",       d: "on the house if it’s your birthday",       p: 70  },
        { n: "mystery cup",    d: "we choose, you cheer",                     p: 120 },
      ],
    },
    {
      id: "extra",
      name: "extra",
      sub: "because you’re fancy",
      items: [
        { n: "oat milk",      d: "swap any drink",                    p: 30 },
        { n: "almond milk",   d: "swap any drink",                    p: 30 },
        { n: "extra shot",    d: "we’re not judging",                 p: 30 },
        { n: "vanilla syrup", d: "or hazelnut, or caramel",           p: 20 },
        { n: "whipped cream", d: "a tiny cloud",                      p: 20 },
      ],
    },
  ],
};
