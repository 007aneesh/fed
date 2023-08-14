const addPostButton = document.getElementById("addPost");
const postContentInput = document.getElementById("postContent");
const postsContainer = document.getElementById("posts");

addPostButton.addEventListener("click", () => {
  const postContent = postContentInput.value.trim();
  if (postContent) {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.textContent = postContent;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      postsContainer.removeChild(postElement);
    });

    postElement.appendChild(deleteButton);
    postsContainer.appendChild(postElement);

    postContentInput.value = "";
  }
});
