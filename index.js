document.addEventListener("DOMContentLoaded", function () {
  var dialog = document.getElementById("dialog");
  dialog.style.display = "none";

  var dialogImg = document.getElementById("dialogImg");
  dialogImg.style.display = "none";
});

function dialog() {
  var dialog = document.getElementById("dialog");
  var content = document.getElementById("dialogContent");

  dialog.style.display = dialog.style.display === "flex" ? "none" : "flex";
  dialog.classList.toggle("dialog");
  content.style.display = content.style.display === "block" ? "none" : "block";
  content.classList.toggle("dialogContent");
}

function dialogImg() {
  var dialogImg = document.getElementById("dialogImg");
  var imgcontent = document.getElementById("dialogImgContent");

  dialogImg.style.display = dialogImg.style.display === "flex" ? "none" : "flex";
  dialogImg.classList.toggle("dialogImg");
  imgcontent.style.display = imgcontent.style.display === "block" ? "none" : "block";
  imgcontent.classList.toggle("dialogImgContent");
}

function dialogClose() {

  var dialog = document.getElementById("dialog");
  var content = document.getElementById("dialogContent");
  textInput.value = '';
  postData.value = '';
  dialog.style.display = "none";
  content.style.display = "none";
  dialog.classList.toggle("dialog");

  content.classList.toggle("dialogContent");
}

function dialogImgClose() {

  var dialogImg = document.getElementById("dialogImg");
  var imgcontent = document.getElementById("dialogImgContent");
  dialogImg.style.display = "none";
  imgcontent.style.display = "none";
  dialogImg.classList.toggle("dialogImg");
  imgcontent.classList.toggle("dialogImgContent");
  imgInput.value = '';
}

// no scroll when dialog visible

const dialogContain = document.getElementById("dialog");
const dialogImgContain = document.getElementById('dialogImg');
const body = document.querySelector("body");
if (dialogContain.style.display !== "none") {
  body.classList.add("no-scroll");
}
dialogContain.addEventListener("transitionend", () => {
  if (dialogContain.style.display === "none") {
    body.classList.remove("no-scroll");
  }
});

if (dialogImgContain.style.display !== "none") {
  body.classList.add("no-scroll");
}
dialogImgContain.addEventListener("transitionend", () => {
  if (dialogImgContain.style.display === "none") {
    body.classList.remove("no-scroll");
  }
});

//adding dialog functionality

const btn1 = document.getElementById("dialogButton1");
const btn2 = document.getElementById("dialogButton2");
const bottomDialog1 = document.getElementById("bottomDialog1");
const bottomDialog2 = document.getElementById("bottomDialog2");

function addBtn1() {
  btn1.classList.add("active");
  btn2.classList.remove("active");
  bottomDialog1.style.display = "flex";
  bottomDialog2.style.display = "none";
}
function addBtn2() {
  btn2.classList.add("active");
  btn1.classList.remove("active");
  bottomDialog2.style.display = "flex";
  bottomDialog1.style.display = "none";
}

// Adding post and ques javascript below

const postmidp = document.getElementsByClassName("postmid-ans");
const postData = document.getElementById("postData");
const postContainer = document.getElementById("postContain");
function postValue() {
  if (postData.value == '') {
    alert('Please write something');
    addBtn2();
    return;

  }


  let post = createPost();
  imgSrc ='';
  imgInput.value = '';
  postContainer.prepend(post);
  postData.value = "";
  
  dialogClose();
}

function quesValue() {
  if (textInput.value == '') {
    alert('Please write something');
    addBtn1();
    return;
  }
  let post = createQuestion();
  postContainer.prepend(post);
  textInput.value = '';
  dialogClose();
}
let counterPost  = 0;
function createPost() {
  // e.preventDefault();
  const postdiv = document.createElement("div");
  postdiv.classList.add("post");
  let imgTag = '';

  if (imgSrc!=='') {
    imgTag = `<img class="postmid-image" id="imgId" loading="lazy" src=${imgSrc} />`;
  }
  
  

  postdiv.innerHTML = ` <div class="post-top">
              <div class="pt">
                <div class="posttop-user">
                  <i class="bx bxs-user-circle"></i>
                </div>
                <div class="posttop-name">
                  <div class="posttopname-name">
                    <h5>Trip O Dell . <span>Follow</span></h5>
                  </div>
                  <div class="posttopname-desig">
                    <p>
                      Worked at Microsoft (company) (2009–2011) .
                      <span>Updated 3y</span>
                    </p>
                  </div>
                </div>
              </div>
              <div id="${counterPost}" class="posttop-close" onclick="ansDelete(${counterPost})"><i class="bx bx-x"></i></div>
            </div>
            <div class="post-mid">
              
              <p class="postmid-ans">
                ${postData.value}
              </p>
              ${imgTag}
              
            </div>
            <div class="post-end">
              <div class="postend-likes">
                <div class="postendlikes-like">
                  <div class="upvote">
                    <i class="bx bx-upvote"></i>
                    <h5>Upvote . 88</h5>
                  </div>
                  <div class="downvote" title="Downvote">
                    <i class="bx bx-downvote"></i>
                  </div>
                </div>
                <div class="postendlikes-comment" title="Comment">
                  <i class="bx bx-message-rounded-dots"></i>
                </div>
                <div class="postendlikes-share" title="Share">
                  <i class="bx bx-share"></i>
                </div>
              </div>
              <div class="postend-menu" title="More">
                <i class="bx bx-dots-horizontal-rounded"></i>
              </div>
            </div>`;
            
  counterPost += 1;
  return postdiv;
}

const postmidh4 = document.getElementById("postmid-ques");
const textInput = document.getElementById('textInput');
let counter =0;
function createQuestion() {
  // e.preventDefault();
  const postdiv = document.createElement("div");
  postdiv.classList.add("post");

  postdiv.innerHTML = `<div class="post-top">
              <div class="pt">
                <div class="posttop-user">
                  <i class="bx bxs-user-circle"></i>
                </div>
                <div class="posttop-name">
                  <div class="posttopname-name">
                    <h5>Trip O Dell . <span>Follow</span></h5>
                  </div>
                  <div class="posttopname-desig">
                    <p>
                      Worked at Microsoft (company) (2009-2011) .
                      <span>Updated 3y</span>
                    </p>
                  </div>
                </div>
              </div>
              <div id="${counter}" class="posttop-close" onclick="postDelete(${counter})"><i class="bx bx-x"></i></div>
            </div>
            <div class="post-mid">
              <h4 class="postmid-ques">
                ${textInput.value}
              </h4> 
            </div>
            <div class="post-end">
              <div class="postend-likes">
                <div class="postendlikes-like">
                  <div class="upvote">
                  <i class='bx bx-edit'></i>
                    <h5>Answer</h5>
                  </div>
                  <div class="downvote" title="Downvote">
                  <i class='bx bx-like'></i>
                  </div>
                </div>
                <div class="postendlikes-comment" title="Comment">
                  <i class="bx bx-message-rounded-dots"></i>
                </div>
                <div class="postendlikes-share" title="Share">
                  <i class="bx bx-share"></i>
                </div>
              </div>
              <div class="postend-menu" title="More">
                <i class="bx bx-dots-horizontal-rounded"></i>
              </div>
            </div>
`;
  counter += 1;
  return postdiv;
}

// Deleting post javascript below

function postDelete(count) {
  const postDelElement = document.getElementById(count);
  const postTopElement = postDelElement.closest(".post");

  if (postTopElement) {
    postTopElement.remove();
  }
}

function ansDelete(count) {
  const ansDelElement = document.getElementById(count);
  const postTopElement = ansDelElement.closest(".post");

  if (postTopElement) {
    postTopElement.remove();
  }
}

// user input image handling

const imgInput = document.getElementById("imgInput");
const postImg = document.getElementById("postImg");
var imgSrc;

function imageAdd(){
  imgSrc = imgInput.value || '';
  // imgInput.value='';
  dialogImgClose();
  
}

