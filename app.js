let vid=document.getElementById("video");

vid.addEventListener("play", function() {
    console.log("diste play en el video");
    
})

vid.addEventListener("seeking", function() {
    console.log("Cambiaste la posicion del video");
})

vid.addEventListener("ended", function() {
    console.log("El video termino");
    let replay= confirm("Volver a reproducir el video?");
        if (replay) {
            this.currentTime = 0;
            this.play()
        } else {
            setTimeout(function(){
                alert("El video no se reproducira");
            },1000);
}
})

setInterval(function () {
    ponerColorBody();
}, 4000);

function ponerColorBody() {
   let pantalla=document.body;
   pantalla.style.backgroundColor =
   pantalla.style.backgroundColor==
   "blue" ? "green" : "blue"; 
};
