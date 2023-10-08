const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

    if (scrollPercentage >= 10) {
        navbar.style.backgroundColor = '#0F0F0E'; // Mudar a cor de fundo para cinza quando a rolagem atingir 20% da página
    } else {
        navbar.style.backgroundColor = 'transparent'; // Voltar à cor transparente quando a rolagem estiver abaixo de 20%
    }
});
