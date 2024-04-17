
//Btn modo dark

const modoOscuroBtn = document.getElementById("modoOscuroBtn");

//Evento click modo dark

modoOscuroBtn.addEventListener("click", ()=> {
    document.body.classList.toggle("dark-mode");
});