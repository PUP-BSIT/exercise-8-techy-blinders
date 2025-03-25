let myInput = document.getElementById("my_input_name");
let myMessage = document.getElementById("my_message_input");
let myButton = document.getElementById("form_button");
let myComments = document.getElementById("comment_goals");

function validateForm() {    
    if (myInput.value.length > 0 && myMessage.value.length > 0) {
        myButton.disabled = false;
        myButton.style.cursor = "pointer";
    } else {
        myButton.disabled = true;
        myButton.style.cursor = "not-allowed";
    }
}

myInput.addEventListener("input", validateForm);
myMessage.addEventListener("input", validateForm);

function addComments() {
    let name = myInput.value.trim();
    let message = myMessage.value.trim();
    validateForm();

    if (name && message) {
        let newComment = document.createElement("p");
        newComment.innerHTML = `${message} - ${name}`;
        myComments.appendChild(newComment);

        myInput.value = "";
        myMessage.value = "";
    }
}