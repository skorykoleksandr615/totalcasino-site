const OFFER_URL = "https://piemento850.online/gQ35HwCm?sub_id_1=totalcasino.club";

document.addEventListener("DOMContentLoaded", () => {
  bindOfferLinks();
  setupNav();
  setupFilters();
});

/**
 * Binds all offer CTA links to the official Total Casino URL.
 */
function bindOfferLinks() {
  document.querySelectorAll(".js-offer").forEach((el) => {
    if (el.tagName === "A") {
      el.setAttribute("href", OFFER_URL);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer sponsored");
      return;
    }
    el.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = OFFER_URL;
    });
  });
}

/**
 * Toggles mobile navigation and solid header state.
 */
function setupNav() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-mobile-nav]");
  const header = document.getElementById("site-header");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.hasAttribute("hidden");
      if (open) nav.removeAttribute("hidden");
      else nav.setAttribute("hidden", "");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (!header) return;
  const onScroll = () => header.classList.toggle("is-solid", window.scrollY > 20);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/**
 * Filters sports rows by league chips.
 */
function setupFilters() {
  document.querySelectorAll("[data-filter]").forEach((chip) => {
    chip.addEventListener("click", () => {
      const group = chip.getAttribute("data-filter-group") || "default";
      const value = chip.getAttribute("data-filter") || "all";
      document.querySelectorAll(`[data-filter][data-filter-group="${group}"]`).forEach((item) => {
        item.classList.toggle("is-on", item === chip);
      });
      document.querySelectorAll(`[data-filter-target="${group}"]`).forEach((item) => {
        const cat = item.getAttribute("data-sport") || item.getAttribute("data-cat") || "all";
        item.classList.toggle("is-hidden", value !== "all" && cat !== value);
      });
    });
  });
}
