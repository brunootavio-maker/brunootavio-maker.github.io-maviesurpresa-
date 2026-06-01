const intro = document.getElementById("intro");
const surpresa = document.getElementById("surpresa");

const sim = document.getElementById("sim");
const nao = document.getElementById("nao");

const modal = document.getElementById("modal");
const fecharModal = document.getElementById("fecharModal");

const musica1 = document.getElementById("musica1");
const musica2 = document.getElementById("musica2");

function iniciarSurpresa(){

    intro.style.display = "none";
    surpresa.style.display = "block";

    musica1.play().catch(()=>{});
}

sim.addEventListener("click", iniciarSurpresa);

nao.addEventListener("click", ()=>{
    modal.style.display = "flex";
});

fecharModal.addEventListener("click", ()=>{
    modal.style.display = "none";
    iniciarSurpresa();
});

let trocouMusica = false;

window.addEventListener("scroll", ()=>{

    const scrollTop = window.scrollY;
    const alturaPagina =
        document.documentElement.scrollHeight -
        window.innerHeight;

    if(scrollTop >= alturaPagina - 50 && !trocouMusica){

        trocouMusica = true;

        musica1.pause();
        musica1.currentTime = 0;

        musica2.play().catch(()=>{});
    }
});