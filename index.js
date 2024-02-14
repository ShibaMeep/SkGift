const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Pues a jugar :)')
});
const noBtn =  document.querySelector('#noBtn')

noBtn.addEventListener('mouseover', function(){
    const randomX = parseInt(Math.random() * 30);
    const randomY = parseInt(Math.random() * 30) * -1; // Valor negativo para mover hacia arriba
    noBtn.style.setProperty('transform', `translate(${randomX}vw, ${randomY}vh)`); // Utiliza vw y vh para abarcar toda la pantalla
});

noBtn.addEventListener('click', function(){
    const randomX = parseInt(Math.random() * 30);
    const randomY = parseInt(Math.random() * 30) * -1; // Valor negativo para mover hacia arriba
    noBtn.style.setProperty('transform', `translate(${randomX}vw, ${randomY}vh)`); // Utiliza vw y vh para abarcar toda la pantalla
});

