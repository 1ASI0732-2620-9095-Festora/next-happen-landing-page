(function () {
  const root = document.documentElement;
  const themeBtn = document.getElementById("theme-toggle");
  const menuBtn = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const navLinks = document.querySelectorAll("[data-nav]");
  const langButtons = document.querySelectorAll("[data-lang]");
  const i18nNodes = document.querySelectorAll("[data-i18n]");


    function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("nh-theme", theme);
    if (themeBtn) {
      themeBtn.setAttribute("aria-label", theme === "dark" ? "Activar modo claro" : "Activar modo oscuro");
      themeBtn.innerHTML = theme === "dark" ? sunIcon() : moonIcon();
    }
  }

  
  function moonIcon() {
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4 7 7 0 0 0 20 14.5Z" stroke="currentColor" stroke-width="2" fill="currentColor"/></svg>';
  }

  function sunIcon() {
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  }

  const savedTheme = localStorage.getItem("nh-theme");
  applyTheme(savedTheme || "light");

  themeBtn?.addEventListener("click", function () {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
  });

  menuBtn?.addEventListener("click", function () {
    const open = mobileNav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });

  mobileNav?.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mobileNav.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });

  function applyLang(lang) {
    localStorage.setItem("nh-lang", lang);
    langButtons.forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });
    const dict = strings[lang] || strings.es;
    i18nNodes.forEach(function (node) {
      const key = node.getAttribute("data-i18n");
      if (dict[key]) node.textContent = dict[key];
    });
    document.documentElement.lang = lang === "en" ? "en" : "es";
  }
  
  applyLang(localStorage.getItem("nh-lang") || "es");

  langButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  const sections = ["inicio", "como-funciona", "testimonios", "planes", "equipo"];
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach(function (link) {
          link.classList.toggle("is-active", link.getAttribute("href") === "#" + id);
        });
      });
    },
    { rootMargin: "-45% 0px -45% 0px" }
  );

  sections.forEach(function (id) {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
})();
