var buttons = document.querySelectorAll("button");

for (let index = 0; index < buttons.length; index++) 
{
    buttons[index].addEventListener("click", function () {
        playAudio(this.textContent);
        animateButton(this.textContent);
    });
}

document.addEventListener("keypress", function (event){
    playAudio(event.key);
    animateButton(event.key);

})

function playAudio(txt) {
    switch (txt) {
        case 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case 's':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
 
        case 'd':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case 'j':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case 'k':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        
        case 'l':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        default:
            console.log(this.textContent);
            break;
    }
}

function animateButton(buttonText) {
    if (buttonText=="w" || buttonText=="a" || buttonText=="s" || 
    buttonText=="d" || buttonText=="j" || buttonText=="k" || buttonText=="l") 
{    
    document.querySelector("."+buttonText).classList.add("pressed");
    setTimeout(() => {
    document.querySelector("."+buttonText).classList.remove("pressed");
    }, 100);
}
}
