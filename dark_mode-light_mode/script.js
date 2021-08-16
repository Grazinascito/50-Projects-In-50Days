const body = document.querySelector('body');
const botao = document.querySelector('.light');

botao.addEventListener('click', () => {
    botao.textContent = botao.textContent === '🖤' ? '🤍':'🖤';

    

    body.style.setProperty('--cor-de-fundo', body.style.getPropertyValue('--cor-de-fundo') === 'rgb(43, 37, 83)' ? '#fff' : 'rgb(43, 37, 83)');
    
    body.style.setProperty('--cor-de-texto', body.style.getPropertyValue('--cor-de-fundo') === 'rgb(43, 37, 83)' ? '#fff' : 'rgb(43, 37, 83)');
});
