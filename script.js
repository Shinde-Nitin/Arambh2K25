document.addEventListener("DOMContentLoaded", function () {
    let text = "Welcome to Arambh 2K25";
    let index = 0;
    let speed = 100;
    
    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typing-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, speed);
        }

    
    }


    typeEffect();

    
});
