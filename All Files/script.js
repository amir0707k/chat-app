let username = ''
const buttonElement = document.getElementById("join-chat");
const usernameElement = document.getElementById("username-input");
const form = document.getElementById("form");
buttonElement.addEventListener('click', (event) => {
    event.preventDefault();
    username = usernameElement.value;
    if(username){
        form.style.display = 'none';
    }else{
        alert("Enter username")
        console.log("clicked")
    }
})