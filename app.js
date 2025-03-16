const shareButton = document.querySelector("#share");
shareButton.addEventListener("click", () => {
  document.querySelector(".share-popup").classList.toggle("active");
  console.dir(document.querySelector(".share-popup"));
});
