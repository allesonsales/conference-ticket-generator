const form = document.getElementById ('form')
const btnSubmit = document.getElementById ('btnSubmit');
const inputAvatar = document.getElementById ('avatar');
const uploadAvatar = document.getElementById ('avatar__area');
const fileInput = document.getElementById ('avatar')
const inputName = document.getElementById ('name');
const inputEmail = document.getElementById ('email');
const inputGitName = document.getElementById ('gitname');
const errorMsg = document.querySelectorAll ('.error__msg');
const boxInput = document.querySelector ('.form__line');
const ticket = document.querySelector ('.form__ticket ');
let ticketName = document.querySelectorAll ('.fullname');
let ticketEmail = document.getElementById ('fullemail');
let ticketAvatar = document.getElementById ('ticketavatar')
let ticketGitHub = document.getElementById ('github__ticket');
let uploadMessage = document.getElementById ('upload-message');
let nameMessage = document.getElementById ('name-message');
let emailMessage = document.getElementById ('email-message');
let gitMessage = document.getElementById ('github-message');

uploadAvatar.addEventListener('click', () => {
    fileInput.click();
})

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) {
        uploadMessage.innerText =`File uploaded: ${file.name}`
    }
})

function checkInput() {
    uploadMessage.style.display = 'none'
    nameMessage.style.display = 'none';
    emailMessage.style.display = 'none';
    gitMessage.style.display = 'none';

    let hasError = false

    if (inputAvatar.value === "") {
        uploadMessage.style.display = 'block';
        uploadMessage.innerText = "Please upload a file!";
        boxInput.classList.add ('error-style')
        hasError = true;
    }

    if (inputName.value === "") {
        nameMessage.style.display = "block";
        nameMessage.innerText = "Name can't be blank";
        hasError = true;
    }

    if (inputEmail.value === "") {
        emailMessage.style.display = "block";
        emailMessage.innerText = "E-mail Can't be blank";
        hasError = true;
    }

    if (inputGitName.value === "") {
        gitMessage.style.display = "block";
        gitMessage.innerText = "Git username Can't be blank";
        hasError = true;
    }

    return hasError;
}

btnSubmit.addEventListener ('click', (event) => {
    event.preventDefault();

    if (!checkInput()) {
        form.style.display = 'none';
        ticket.classList.remove('hide');

        ticketName.forEach(ticketName => {
            ticketName.innerText = ` ${inputName.value}`
        })
        ticketEmail.innerText = ` ${inputEmail.value} `;
        ticketGitHub.innerText = ` ${inputGitName.value}`;
        
        const fileUpload = fileInput.files[0];
        if (fileUpload) {
            const img = document.getElementById ('avatar-image');
            img.src = URL.createObjectURL(fileUpload);
            img.style.maxWidth = '50px';
            ticketAvatar.innerHTML = '';
            ticketAvatar.appendChild(img);
        }
    }
})