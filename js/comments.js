document.addEventListener("DOMContentLoaded", () => {
    const commentForm = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment-input");
    const commentsList = document.getElementById("comments-list");
  
    commentForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const commentText = commentInput.value.trim();
  
      if (commentText) {
        const commentItem = document.createElement("li");
        commentItem.textContent = commentText;
  
        commentsList.appendChild(commentItem);
        commentInput.value = "";
      }
    });
  });