const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const response = document.getElementById("response");
const container = document.querySelector(".ticket");

yesButton.addEventListener("click", () => {
  container.innerHTML = `
    <div style="padding:30px; text-align:center; color:white;">
      <h1>🎬 FUNCIÓN CONFIRMADA 🍿</h1>
      <p>Perfecto… ahora me debes una cita inolvidable. 😏</p>

      <div class="image-grid">
        <img src="images/scary6-1.webp">
        <img src="images/scary6-2.jpg">
        <img src="images/scary6-3.jpg">
        <img src="images/scary6-4.jpg">
        <img src="images/scary6-5.jpg">
        <img src="images/scary6-6.jpg">
      </div>

      <p style="margin-top:20px; color:#ffd54f;">🎟️ La mejor parte no es la película… es verte.</p>
    </div>
  `;
});

function moveNoButton() {
  const maxX = window.innerWidth - noButton.offsetWidth;
  const maxY = window.innerHeight - noButton.offsetHeight;

  noButton.style.position = "fixed";
  noButton.style.left = Math.random() * maxX + "px";
  noButton.style.top = Math.random() * maxY + "px";
}

noButton.addEventListener("mouseover", () => {
  response.textContent = "Ese no no existe 😏";
  moveNoButton();
});