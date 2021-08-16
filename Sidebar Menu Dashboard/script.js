const selecionandoMenu = document.querySelector('#sidebar_btn');
const fecharMenu = document.querySelector('#btn-close');

selecionandoMenu.addEventListener('click', function(){
    console.log("entrou")
    selecionandoMenu.classList.add("hidden");
    fecharMenu.classList.add("show");
})