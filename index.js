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

//adding dialog functionality

const btn1 = document.getElementById("dialogButton1");
const btn2 = document.getElementById("dialogButton2");
const bottomDialog1 = document.getElementById("bottomDialog1");
const bottomDialog2 = document.getElementById("bottomDialog2");

function addBtn1(){
  btn1.classList.add("active");
  btn2.classList.remove("active");
  bottomDialog1.style.display = "flex";
  bottomDialog2.style.display = "none";
}
function addBtn2(){
  btn2.classList.add("active");
  btn1.classList.remove("active");
  bottomDialog2.style.display = "flex";
  bottomDialog1.style.display = "none";
}

// Adding post javascript below


// Deleting post javascript below