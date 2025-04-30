const text = "Qui Somme Nous! ,";
let index = 0;
function typeEffect(){
    if(index < text.length){
        document.getElementById("section-title").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();



// setInterval(function() {
//     document.body.style.backgroundColor = 
//         '#' + Math.floor(Math.random()*16777215).toString(16);
// }, 1000); // every 1 second
