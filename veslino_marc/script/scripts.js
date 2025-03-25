let nameInput = document.getElementById('name_person');
let commentInput = document.getElementById('comment_of_person');
let submitButton = document.getElementById('comment_button');
let commentsSection = document.getElementById('comment_section');

function checkForm() {
    submitButton.disabled = !nameInput.value.trim() || 
        !commentInput.value.trim();
}

function addComment() {
    let name = nameInput.value.trim();
    let comment = commentInput.value.trim();
    
    if (!name || !comment) {
        return; 
    }
    
    let newComment = document.createElement('p');
    newComment.textContent = `${comment} - ${name}`;
    commentsSection.appendChild(newComment);
    
    document.getElementById('comment_form').reset();

    checkForm();
}

nameInput.addEventListener('input', checkForm);
commentInput.addEventListener('input', checkForm);
submitButton.addEventListener('click', addComment);

checkForm();