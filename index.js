document.addEventListener("DOMContentLoaded", function () {
  var dialog = document.getElementById("dialog");
  dialog.style.display = "none";
});

function dialog() {
  var dialog = document.getElementById("dialog");
  var content = document.getElementById("dialogContent");

  dialog.style.display = dialog.style.display === "block" ? "none" : "block";
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
