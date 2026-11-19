document.addEventListener("DOMContentLoaded", () => {
  // Highlight active nav link
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Fade/slide in cards as they scroll into view
  const cards = document.querySelectorAll(".card");
  if (cards.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    cards.forEach((card, i) => {
      card.style.transitionDelay = `${Math.min(i * 60, 300)}ms`;
      observer.observe(card);
    });
  }
});