(function () {
  const root = document.documentElement;
  const themeBtn = document.getElementById("theme-toggle");
  const menuBtn = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const navLinks = document.querySelectorAll("[data-nav]");
  const langButtons = document.querySelectorAll("[data-lang]");
  const i18nNodes = document.querySelectorAll("[data-i18n]");


  const strings = {
    es: {
      navInicio: "Inicio",
      navComo: "Cómo funciona",
      navPlanes: "Planes",
      navTestimonios: "Testimonios",
      navEquipo: "Equipo",
      ctaUnete: "Únete",
      pill: "Eventos culturales y ferias en Lima Metropolitana",
      heroTitleA: "Descubre lo que está",
      heroTitleB: "por pasar",
      heroTitleC: "en Lima",
      heroSub:
        "Centralizamos ferias de diseño, bazares independientes, conciertos acústicos y movidas culturales con mapa interactivo en tiempo real y entradas al instante.",
      ctaHero: "Únete a NextHappen",
      comunidad: "Comunidad Festora",
      comunidadSub:
        "+120 ferias y colectivos activos en Barranco, Miraflores, Lima Centro y San Isidro",
      why: "¿Por qué NextHappen?",
      whyTitle: "El caos de la movida cultural resuelto en un solo lugar",
      whySub:
        "Encontrar qué hacer o difundir tu feria independiente en Lima solía ser un dolor de cabeza. Diseñamos la respuesta definitiva.",
      problema: "El problema",
      antes: "Antes",
      solucion: "Solución NextHappen",
      p1: "Información dispersa en historias que desaparecen",
      p1d: "Decenas de flyers perdidos en Instagram, ubicaciones imprecisas enviadas por DM y horarios sin confirmar.",
      s1: "Catálogo geolocalizado centralizado",
      s1d: "Todo ordenado en un mapa dinámico con filtro por distrito, categoría y costo.",
      p2: "Cambios de horario y cancelaciones fantasma",
      p2d: "Llegas al parque o galería y el evento cambió de local por lluvia o se reprogramó sin previo aviso.",
      s2: "Alertas y notificaciones en tiempo real",
      s2d: "Avisos instantáneos al teléfono ante reprogramaciones, line-ups actualizados o cambios de sala.",
      p3: "No-shows y falta de aforo controlado",
      p3d: 'Para los feriantes es imposible estimar insumos o asistencia real basándose solo en clics o "likes".',
      s3: "Reservas y tickets QR sin fricción",
      s3d: "Control de acceso ágil desde el celular y analítica en vivo para calcular aforo con precisión.",
      paso: "Paso a Paso",
      pasosTitle: "Disfruta de Lima en 3 simples pasos",
      pasosSub:
        "Diseñado para que descubras tu próximo plan cultural en menos de 60 segundos, sin registros engorrosos.",
      step1: "Descubre en el mapa",
      step1d:
        "Filtra por distrito (Barranco, Miraflores, San Isidro, Surquillo), categoría de feria, precio o fechas y mira qué está sucediendo a tu alrededor.",
      step2: "Reserva tu entrada",
      step2d:
        "Obtén tu pase digital o QR sin registrarte en páginas confusas, con confirmación inmediata directo a tu WhatsApp y Google Wallet.",
      step3: "Recibe alertas en tiempo real",
      step3d:
        "Te avisamos si hay cambio de clima, nueva programación acústica, talleres flash o sorteos exclusivos organizados por el colectivo.",
      voz: "Voz de la comunidad",
      testiTitle: "Lo que dicen quienes mueven la cultura",
      orgTitle: "Para Organizadores y Colectivos",
      planesTitle: "Impulsa tu evento al siguiente nivel",
      planesSub:
        "Planes flexibles diseñados para colectivos emergentes, ferias consolidadas y festivales culturales.",
      plan1: "Plan Comunitario",
      plan2: "Plan Pro Feria",
      plan3: "Festivales & Circuitos",
      ctaGratis: "Comenzar gratis",
      ctaPro: "Elegir Plan Pro",
      ctaFest: "Contactar a Festora",
      equipoEyebrow: "Equipo Festora",
      equipoTitle: "Conoce al equipo detrás de Festora",
      equipoSub:
        "Creadores, programadores y entusiastas del arte limeño construyendo el futuro del entretenimiento local.",
      finalEyebrow: "100% Hecho en Perú · Sin comisiones ocultas",
      finalTitle: "¿Listo para descubrir o difundir tu próximo evento en Lima?",
      finalSub:
        "Únete hoy a la comunidad de NextHappen y sé parte de la mayor red cultural independiente de la ciudad.",
      ctaFinal: "Unirme a NextHappen",
      navLabel: "Navegación",
      idioma: "Idioma",
      footerCopy: "Festora: Impulsando la cultura y el entretenimiento independiente en Lima Metropolitana.",
      hecho: "Hecho con pasión en Lima, Perú",
    },
    en: {
      navInicio: "Home",
      navComo: "How it works",
      navPlanes: "Plans",
      navTestimonios: "Stories",
      navEquipo: "Team",
      ctaUnete: "Join",
      pill: "Cultural events and fairs in Metropolitan Lima",
      heroTitleA: "Discover what's",
      heroTitleB: "coming next",
      heroTitleC: "in Lima",
      heroSub:
        "We centralize design fairs, independent bazaars, acoustic concerts and cultural scenes with a live interactive map and instant tickets.",
      ctaHero: "Join NextHappen",
      comunidad: "Festora Community",
      comunidadSub:
        "+120 active fairs and collectives in Barranco, Miraflores, Downtown Lima and San Isidro",
      why: "Why NextHappen?",
      whyTitle: "Lima's cultural chaos, solved in one place",
      whySub:
        "Finding something to do — or promoting your independent fair in Lima — used to be a headache. We designed the definitive answer.",
      problema: "The problem",
      antes: "Before",
      solucion: "NextHappen solution",
      p1: "Info scattered in stories that vanish",
      p1d: "Dozens of flyers lost on Instagram, imprecise locations sent by DM, and unconfirmed schedules.",
      s1: "Centralized geolocated catalog",
      s1d: "Everything sorted on a live map with district, category and price filters.",
      p2: "Ghost cancellations and time changes",
      p2d: "You arrive at the park or gallery and the event moved because of rain or was rescheduled with no notice.",
      s2: "Real-time alerts and notifications",
      s2d: "Instant phone alerts for reschedules, updated line-ups or room changes.",
      p3: "No-shows and no capacity control",
      p3d: "Vendors cannot estimate supplies or real attendance from clicks or likes alone.",
      s3: "Frictionless QR tickets and RSVPs",
      s3d: "Fast mobile access control and live analytics to measure capacity with precision.",
      paso: "Step by step",
      pasosTitle: "Enjoy Lima in 3 simple steps",
      pasosSub:
        "Built so you can find your next cultural plan in under 60 seconds, without messy sign-ups.",
      step1: "Discover on the map",
      step1d:
        "Filter by district (Barranco, Miraflores, San Isidro, Surquillo), fair category, price or dates and see what is happening around you.",
      step2: "Reserve your ticket",
      step2d:
        "Get a digital pass or QR without confusing extra forms, with instant confirmation to WhatsApp and Google Wallet.",
      step3: "Get real-time alerts",
      step3d:
        "We notify you about weather changes, new acoustic sets, flash workshops or exclusive raffles from the collective.",
      voz: "Community voice",
      testiTitle: "What the people who move culture say",
      orgTitle: "For organizers and collectives",
      planesTitle: "Take your event to the next level",
      planesSub:
        "Flexible plans for emerging collectives, established fairs and cultural festivals.",
      plan1: "Community Plan",
      plan2: "Pro Fair Plan",
      plan3: "Festivals & Circuits",
      ctaGratis: "Start free",
      ctaPro: "Choose Pro",
      ctaFest: "Contact Festora",
      equipoEyebrow: "Festora Team",
      equipoTitle: "Meet the team behind Festora",
      equipoSub:
        "Creators, developers and Lima art enthusiasts building the future of local entertainment.",
      finalEyebrow: "100% Made in Peru · No hidden fees",
      finalTitle: "Ready to discover or share your next event in Lima?",
      finalSub:
        "Join the NextHappen community today and be part of the city's largest independent cultural network.",
      ctaFinal: "Join NextHappen",
      navLabel: "Navigation",
      idioma: "Language",
      footerCopy:
        "Festora: Fueling independent culture and entertainment in Metropolitan Lima.",
      hecho: "Made with passion in Lima, Peru",
    },
  };


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
