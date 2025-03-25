let userNameInput = document.getElementById("username");
let commentInput = document.getElementById("comment");
let button = document.getElementById("comment_button");
let commentSection = document.getElementById("goal_comments");

function toggleButton() {
    let isFilled = userNameInput.value.trim() && commentInput.value.trim();
    button.disabled = !isFilled;
}

userNameInput.addEventListener("input", toggleButton);
commentInput.addEventListener("input", toggleButton);

function comments(event) {
    event.preventDefault();

    let username = userNameInput.value.trim();
    let comment = commentInput.value.trim();

    if (username && comment) {
        let newComment = document.createElement("p");
        newComment.innerHTML = `${comment} - ${username}`;
        commentSection.appendChild(newComment);

        userNameInput.value = "";
        commentInput.value = "";
        
        toggleButton();
    }
}

let commentForm = document.getElementById("comment_form");
commentForm.addEventListener("submit", comments);