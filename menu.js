// kaimuck menu — vanilla JS renderer.
// Reads from window.MENU (defined in menu-data.js) and renders into the DOM.
// No build step. Drop on any static host.

(function () {
  const M = window.MENU;
  if (!M) {
    console.error("menu-data.js not loaded — window.MENU is undefined.");
    return;
  }

  // ── Build a flat list of items with stable variant styles ─────────
  function buildTags() {
    const out = [];
    let i = 0;
    for (const c of M.categories) {
      for (const it of c.items) {
        // Deterministic tilt + offset based on index → same look every render
        const tilt = (((i * 37) % 7) - 3) * 0.6;       // -1.8°..1.8°
        const offset = ((i * 53) % 3) - 1;             // -1..1
        const palette = i % 7;

        let variant = "";
        const secret = c.id === "secret";
        if (secret) variant = "v-secret";
        else if (palette === 2) variant = "v-ink";
        else if (palette === 5) variant = "v-accent";

        out.push({
          ...it,
          cat: c.id,
          catName: c.name,
          tilt, offset, variant, secret,
          key: c.id + "-" + i,
        });
        i++;
      }
    }
    return out;
  }

  const ALL = buildTags();

  // ── Render filter chips ───────────────────────────────────────────
  const filtersEl = document.getElementById("filters");
  const cats = [{ id: "all", name: "all" }, ...M.categories.map((c) => ({ id: c.id, name: c.name }))];
  let active = "all";

  function renderFilters() {
    filtersEl.innerHTML = "";
    for (const c of cats) {
      const b = document.createElement("button");
      b.className = "filter" + (active === c.id ? " is-active" : "");
      b.type = "button";
      b.textContent = c.name;
      b.addEventListener("click", () => {
        active = c.id;
        renderFilters();
        renderWall();
        // Smooth scroll to top of wall on filter change
        wallEl.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      filtersEl.appendChild(b);
    }
  }

  // ── Render tag wall ───────────────────────────────────────────────
  const wallEl = document.getElementById("wall");

  function renderWall() {
    const list = active === "all" ? ALL : ALL.filter((t) => t.cat === active);
    wallEl.innerHTML = "";

    const showChapters = (document.body.dataset.theme === "chapters") && active === "all";
    let lastCat = null;

    for (const t of list) {
      // Chapter divider between categories (only when "all" + theme=chapters)
      if (showChapters && t.cat !== lastCat) {
        const ch = document.createElement("div");
        ch.className = "chapter";
        ch.innerHTML = `
          <img src="assets/kaimuck-logo-transparent.png" alt="" aria-hidden="true">
          <span class="chapter-label">${escape(t.catName)}</span>
        `;
        wallEl.appendChild(ch);
      }
      lastCat = t.cat;

      const row = document.createElement("div");
      row.className = "tag";
      row.style.transform = `rotate(${t.tilt}deg) translateX(${t.offset * 3}px)`;

      const inner = document.createElement("div");
      inner.className = "tag-inner" + (t.variant ? " " + t.variant : "");

      const body = document.createElement("div");
      body.className = "tag-body";
      body.innerHTML = `
        <div class="tag-cat">${t.secret ? "✦ off-menu" : escape(t.catName)}</div>
        <div class="tag-name">${escape(t.n)}</div>
        <div class="tag-desc">${escape(t.d)}</div>
      `;

      const badge = document.createElement("div");
      badge.className = "tag-badge";
      badge.innerHTML = `${t.p}<span class="unit">ден</span>`;

      inner.appendChild(body);
      inner.appendChild(badge);
      row.appendChild(inner);
      wallEl.appendChild(row);
    }
  }

  function escape(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // ── Fill brand strings ────────────────────────────────────────────
  const heroEl = document.getElementById("hero");
  if (heroEl) heroEl.textContent = M.brand.hero;
  const hoursEl = document.getElementById("hours");
  if (hoursEl) hoursEl.textContent = "made with milk · " + M.brand.hours;
  const secretEl = document.getElementById("secret-note");
  if (secretEl) secretEl.textContent = M.brand.secret;

  document.title = M.brand.name + " · menu";

  renderFilters();
  renderWall();

  // ── Theme-aware dynamic elements (marquee, stamp) ─────────────────
  function applyTheme() {
    const theme = document.body.dataset.theme || "";

    // Remove existing dynamic elements
    document.querySelectorAll(".marquee, .stamp").forEach((el) => el.remove());

    // Top marquee
    if (theme === "marquee" || theme === "combo") {
      const top = document.createElement("div");
      top.className = "marquee";
      top.innerHTML = `<div class="marquee-track">${marqueeContent()}</div>`;
      document.body.insertBefore(top, document.body.firstChild);

      const bot = document.createElement("div");
      bot.className = "marquee bottom";
      bot.innerHTML = `<div class="marquee-track">${marqueeContent()}</div>`;
      document.querySelector("main").appendChild(bot);
    }

    // End stamp
    if (theme === "stamp" || theme === "combo") {
      const stamp = document.createElement("div");
      stamp.className = "stamp";
      stamp.innerHTML = `<img src="assets/kaimuck-logo-transparent.png" alt="" aria-hidden="true">`;
      document.querySelector("footer").parentNode
        .insertBefore(stamp, document.querySelector("footer"));
    }

    // Re-render wall so chapter dividers update
    renderWall();
  }

  function marqueeContent() {
    const one = `<span>${M.brand.name}</span><span class="dot">·</span>` +
                `<span>specialty roast</span><span class="dot">·</span>` +
                `<span>${M.brand.name}</span><span class="dot">·</span>` +
                `<span>skopje</span><span class="dot">·</span>`;
    // duplicate so the seamless loop has enough content
    return one.repeat(6);
  }

  // Watch for body data-theme changes (used by experiments.html switcher)
  const observer = new MutationObserver(applyTheme);
  observer.observe(document.body, { attributes: true, attributeFilter: ["data-theme"] });
  applyTheme();
})();
