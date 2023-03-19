var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//Adding event listeners to all the drum buttons
for(var i=0; i< numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick)
}

// Adding event listener to the entire document, to listen for keyboard presses
document.addEventListener("keydown", function(event){
    playSound(event.key);
    buttonAnimation(event.key);
});

//Handles mouse click
function handleClick(){
    var buttonInnerHtml =this.innerHTML;
    playSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
}


function playSound(key){
    
    switch(key){
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'a':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break; 
        case 's':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;    
        case 'd':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break; 
        case 'k':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;                

    }
}


//Shadow effect when the button is pressed
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed");}, 100);
    
}