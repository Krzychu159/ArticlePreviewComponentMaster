const shareButton = document.querySelector("#share");
const shareButtonOff = document.querySelector("#shareOff");
const sharePopup = document.querySelector(".share-popup");

shareButton.addEventListener("click", () => {
  sharePopup.classList.toggle("active");
  document.querySelector(".author").classList.toggle("active");
});

shareButtonOff.addEventListener("click", () => {
  sharePopup.classList.toggle("active");
  document.querySelector(".author").classList.toggle("active");
});
