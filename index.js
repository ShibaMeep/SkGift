const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Pues a jugar :)')
    window.open("https://www.mediafire.com/file/xphsacmy5po8sw4/Sk.rar/file")
    document.body.innerHTML = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./css/board.css">
        <link rel="stylesheet" href="./css/style.css">
        <title>Memorama</title>
    </head>
    <body>

        <h1>A jugar!!! 😎</h1>

        <main class="board-game">
            <!-- Agrega aquí las figuras y cartas -->
        </main>

        <script src="index.js"></script>
    </body>
    </html>
`;
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

