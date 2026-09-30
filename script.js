const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn?.setAttribute("aria-expanded", "false");
  });
});

const modal = document.getElementById("projectModal");
const openModalBtn = document.querySelector("[data-modal-open]");
const closeModalEls = document.querySelectorAll("[data-modal-close]");

function openModal() {
  if (!modal) return;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-lock");
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-lock");
}

openModalBtn?.addEventListener("click", openModal);
closeModalEls.forEach(el => el.addEventListener("click", closeModal));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

form?.addEventListener("submit", () => {
  if (formNote) {
    formNote.textContent = "Wysyłanie wiadomości…";
  }
});
