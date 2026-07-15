const dropButton = document.querySelector(".drop-button");
const backdrop = document.querySelector(".backdrop");
const closeButton = document.querySelector(".modal-close");
const copyButton = document.querySelector(".modal-copy");
const modalCode = document.querySelector(".modal-code");

function openModal() {
  backdrop.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  backdrop.classList.add("is-hidden");
  document.body.style.overflow = "";
}

dropButton.addEventListener("click", openModal);

closeButton.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

copyButton.addEventListener("click", function () {
  navigator.clipboard.writeText(modalCode.textContent);

  copyButton.textContent = "COPIED!";

  setTimeout(function () {
    copyButton.textContent = "COPY CODE";
  }, 1000);
});