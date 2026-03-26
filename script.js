const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const response = document.getElementById("response");
const container = document.querySelector(".ticket");

yesButton.addEventListener("click", () => {
  container.innerHTML = `
    <div style="padding:30px; text-align:center; color:white; width:100%;">
      <h1>🎬 FUNCIÓN CONFIRMADA 🍿</h1>
      <p>Perfecto… ahora me debes una cita inolvidable 😌</p>

      <div class="image-grid">
        <div class="photo-card"><img src="./scary6-1.webp" alt="Scary Movie 1"></div>
        <div class="photo-card"><img src="./scary6-2.jpg" alt="Scary Movie 2"></div>
        <div class="photo-card"><img src="./scary6-3.jpg" alt="Scary Movie 3"></div>
        <div class="photo-card"><img src="./scary6-4.jpg" alt="Scary Movie 4"></div>
        <div class="photo-card"><img src="./scary6-5.jpg" alt="Scary Movie 5"></div>
        <div class="photo-card"><img src="./scary6-6.jpg" alt="Scary Movie 6"></div>
      </div>

      <p style="margin-top:20px; color:#ffd54f;">🎟️ La mejor parte no es la película… es verte.</p>
    </div>
  `;
});

function moveNoButton() {
  const maxX = window.innerWidth - noButton.offsetWidth - 20;
  const maxY = window.innerHeight - noButton.offsetHeight - 20;

  noButton.style.position = "fixed";
  noButton.style.left = Math.random() * maxX + "px";
  noButton.style.top = Math.random() * maxY + "px";
}

noButton.addEventListener("mouseover", () => {
  response.textContent = "Ese no no existe 😏";
  moveNoButton();
});
