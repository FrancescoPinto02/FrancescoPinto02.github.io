// Menu mobile + filtri della pagina Papers
document.addEventListener("DOMContentLoaded", () => {
  // --- Apertura/chiusura sidebar su mobile ---
  const toggle = document.querySelector(".menu-toggle");
  const sidebar = document.getElementById("sidebar");
  if (toggle && sidebar) {
    toggle.addEventListener("click", () => {
      const open = sidebar.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
      toggle.innerHTML = open
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });
  }

  // --- Tema chiaro/scuro ---
  const root = document.documentElement;
  const themeBtn = document.querySelector(".theme-toggle");
  const syncThemeBtn = () => {
    if (!themeBtn) return;
    const dark = root.getAttribute("data-theme") === "dark";
    const label = dark ? "Switch to light mode" : "Switch to dark mode";
    themeBtn.setAttribute("aria-pressed", dark);
    themeBtn.setAttribute("aria-label", label);
    themeBtn.setAttribute("title", label);
  };
  syncThemeBtn();
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      syncThemeBtn();
    });
  }
  // Se l'utente non ha scelto, segue i cambi del sistema operativo
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    let saved = null;
    try { saved = localStorage.getItem("theme"); } catch (err) {}
    if (!saved) {
      root.setAttribute("data-theme", e.matches ? "dark" : "light");
      syncThemeBtn();
    }
  });

  // --- News: mostra/nascondi le più vecchie ---
  const newsToggle = document.querySelector(".news-toggle");
  const newsList = document.getElementById("news-list");
  if (newsToggle && newsList) {
    newsToggle.addEventListener("click", () => {
      const open = newsList.classList.toggle("expanded");
      newsToggle.setAttribute("aria-expanded", open);
      newsToggle.querySelector("span").textContent = open ? "Show less" : "Show all";
    });
  }

  // --- Filtri papers ---
  const filters = document.querySelectorAll(".filter");
  const papers = document.querySelectorAll(".paper");
  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      filters.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      papers.forEach((p) => {
        p.classList.toggle("hidden", f !== "all" && p.dataset.type !== f);
      });
    });
  });
});
