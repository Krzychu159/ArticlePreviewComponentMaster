const shareButton = document.querySelector("#share");
const shareButtonOff = document.querySelector("#shareOff");
shareButton.addEventListener("click", () => {
  document.querySelector(".share-popup").classList.toggle("active");
  document.querySelector(".author").classList.toggle("active");
});
shareButtonOff.addEventListener("click", () => {
  document.querySelector(".share-popup").classList.toggle("active");
  document.querySelector(".author").classList.toggle("active");
});
