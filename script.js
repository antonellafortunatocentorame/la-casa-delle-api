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
document.getElementById("form-email").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Benvenuta nello sciame!");
});
