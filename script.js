const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) document.documentElement.dataset.theme = savedTheme;
updateThemeIcon();

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("portfolio-theme", nextTheme);
  updateThemeIcon();
});

function updateThemeIcon() {
  themeToggle.textContent = document.documentElement.dataset.theme === "light" ? "🌙" : "☀️";
  themeToggle.setAttribute("aria-label", document.documentElement.dataset.theme === "light" ? "Switch to dark mode" : "Switch to light mode");
}

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();