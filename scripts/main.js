
//Btn modo dark

const modoOscuroBtn = document.getElementById("modoOscuroBtn");

//Evento click modo dark

modoOscuroBtn.addEventListener("click", ()=> {
    document.body.classList.toggle("dark-mode");
});

// Compartir frase

function compartirFrase(){
    const frase = document.getElementById("mensaje")
    if (navigator.share){
        navigator.share ({
            title: "Tu frase del dia",
            text: frase,
            url: document.location.href
        }).then (()=> {
            HTMLFormControlsCollection.log("Gracias por compartir")
        })
        .catch((error)=> {
            console.log("Error al compartir", error)
        })
    }else {
        alert("Tu navegador no soporta la funcion de compartir nativa")
    }
}

//compartir facebook

document.getElementById('facebook-share-btn').addEventListener("click", function(event) {
    event.preventDefault();
    const url = encodeURIComponent(document.location.href);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(facebookUrl, '_blank');
})