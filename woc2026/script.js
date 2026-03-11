const demoForm = document.getElementById("demo-form");
const formCard = document.getElementById("demo-form-card");
const successCard = document.getElementById("demo-success-card");

if (demoForm && formCard && successCard) {
  demoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    formCard.classList.add("hidden");
    successCard.classList.remove("hidden");
    successCard.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
