document.addEventListener("DOMContentLoaded", function () {
  var dialog = document.getElementById("dialog");
  dialog.style.display = "none";
});

function dialog() {
  var dialog = document.getElementById("dialog");
  var content = document.getElementById("dialogContent");

  dialog.style.display = dialog.style.display === "flex" ? "none" : "flex";
  dialog.classList.toggle("dialog");
  content.style.display = content.style.display === "block" ? "none" : "block";
  content.classList.toggle("dialogContent");
}

function dialogClose() {
  var dialog = document.getElementById("dialog");
  var content = document.getElementById("dialogContent");
  dialog.style.display = "none";
  content.style.display = "none";
  dialog.classList.toggle("dialog");
  content.classList.toggle("dialogContent");
}

// no scroll when dialog visible

const dialogContain = document.getElementById("dialog");
const body = document.querySelector("body");
if (dialogContain.style.display !== "none") {
  body.classList.add("no-scroll");
}
dialogContain.addEventListener('transitionend', () => {
  if (dialogContain.style.display === 'none') {
    body.classList.remove('no-scroll');
  }
});

// no scroll end