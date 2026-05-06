const cursor = document.getElementById("pollen-cursor");

// 1. Il polline che segue il mouse
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// 2. Feedback visivo sugli elementi cliccabili
const hovers = document.querySelectorAll(
  ".bee-hover, .review-card, .btn-primary, a",
);

hovers.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "scale(4)";
    cursor.style.background = "rgba(178, 141, 66, 0.15)";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "scale(1)";
    cursor.style.background = "#b28d42";
  });
});

// 3. Invio form
const formEmail = document.getElementById("form-email");
if (formEmail) {
  formEmail.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Benvenuta nello sciame!");
  });
}

// 4. Menu hamburger mobile
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navLinkItems = document.querySelectorAll(".nav-links a");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen.toString());
  });

  navLinkItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// 5. Carosello frasi
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".slide-dot");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  currentSlide = (index + slides.length) % slides.length;

  if (slides[currentSlide]) {
    slides[currentSlide].classList.add("active");
  }
  if (dots[currentSlide]) {
    dots[currentSlide].classList.add("active");
  }
}

if (slides.length > 0) {
  showSlide(0);

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const index = parseInt(e.target.dataset.index);
      showSlide(index);
    });
  });

  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);
}
