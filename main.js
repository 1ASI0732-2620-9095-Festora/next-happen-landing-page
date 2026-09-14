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