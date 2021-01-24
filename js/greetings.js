const nameForm = document.querySelector(".js-name-form");
const nameInput = nameForm.querySelector("input");
const greetings = document.querySelector(".js-greetings");

const toDo = document.querySelector(".todo");

const USER_LS = "currentUser";
const SHOWING = "showing";

function saveName(name) {
    localStorage.setItem(USER_LS, name);
}

function greetingUser(name) {
    const date = new Date();
    const hour = date.getHours();
    nameForm.classList.remove(SHOWING);
    greetings.classList.add(SHOWING);
    toDo.classList.add(SHOWING);
    if (hour < 5) {
        hello = "Good down";
    } else if (hour < 12) {
        hello = "Good morning";
    } else if (hour < 18) {
        hello = "Good afternoon"
    } else if (hour < 22) {
        hello = "Good evening";
    } else {
        hello = "Good night";
    }
    greetings.innerText = `${hello}! ${name}`;
}

function handleSubmit(e) {
    e.preventDefault();
    const value = nameInput.value;
    greetingUser(value);
    saveName(value);
}

function askForName() {
    nameForm.classList.add(SHOWING);
    nameForm.addEventListener("submit", handleSubmit);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
    } else {
        greetingUser(currentUser);
    }
}

function init() {
    loadName();
}

init();