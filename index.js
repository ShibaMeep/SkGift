const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Pues a jugar :)')
    window.open("https://www.mediafire.com/file/xphsacmy5po8sw4/Sk.rar/file")
    document.head.innerHTML = `
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./css/board.css">
        <link rel="stylesheet" href="./css/style.css">
        <title>SkGift</title>
    </head>
`;
    document.body.innerHTML =
    `    <body>

    <h1>A jugar!!! 😎</h1>

    <main class="board-game">

        <figure>
            <img class="back" src="./images/back.png" alt="Back">
            <div class="searched-image">
                <img src="./images/Carta_1.png" alt="Back">
            </div>
        </figure>

        <figure>
            <img class="back" src="./images/back.png" alt="Back">
            <div class="searched-image">
                <img src="./images/Carta_2.png" alt="Back">
            </div>
        </figure>

        <figure>
            <img class="back" src="./images/back.png" alt="Back">
            <div class="searched-image">
                <img src="./images/Carta_3.png" alt="Back">
            </div>
        </figure>

        <figure>
            <img class="back" src="./images/back.png" alt="Back">
            <div class="searched-image">
                <img src="./images/Carta_4.png" alt="Back">
            </div>
        </figure>

        <figure>
            <img class="back" src="./images/back.png" alt="Back">
            <div class="searched-image">
                <img src="./images/Carta_1.png" alt="Back">
            </div>
        </figure>

        <figure>
            <img class="back" src="./images/back.png" alt="Back">
            <div class="searched-image">
                <img src="./images/Carta_2.png" alt="Back">
            </div>
        </figure>

        <figure>
            <img class="back" src="./images/back.png" alt="Back">
            <div class="searched-image">
                <img src="./images/Carta_3.png" alt="Back">
            </div>
        </figure>

        <figure>
            <img class="back" src="./images/back.png" alt="Back">
            <div class="searched-image">
                <img src="./images/Carta_4.png" alt="Back">
            </div>
        </figure>

    </main>

</body>`;
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

// 16
// 7
// 102
// 103

class Sk {

    constructor() {

        this.canPlay = false;

        this.card1 = null;
        this.card2 = null;

        this.availableImages = [1, 2, 3, 4];
        this.orderForThisRound = [];
        this.cards = Array.from( document.querySelectorAll(".board-game figure") );

        this.maxPairNumber = this.availableImages.length;

        this.startGame();

    }

    startGame() {

        this.foundPairs = 0;
        this.setNewOrder();
        this.setImagesInCards();
        this.openCards();

    }

    setNewOrder() {

        this.orderForThisRound = this.availableImages.concat(this.availableImages);
        this.orderForThisRound.sort( () => Math.random() - 0.5 );

    }

    setImagesInCards() {

        for (const key in this.cards) {

            const card = this.cards[key];
            const image = this.orderForThisRound[key];
            const imgLabel = card.children[1].children[0];

            card.dataset.image = image;
            imgLabel.src = `./images/Carta_${image}.png`;

        }

    }

    openCards() {

        this.cards.forEach(card => card.classList.add("opened"));

        setTimeout(() => {
            this.closeCards();
        }, 10000);

    }

    closeCards() {

        this.cards.forEach(card => card.classList.remove("opened"));
        this.addClickEvents();
        this.canPlay = true;

    }

    addClickEvents() {

        this.cards.forEach(_this => _this.addEventListener("click", this.flipCard.bind(this)));

    }

    removeClickEvents() {

        this.cards.forEach(_this => _this.removeEventListener("click", this.flipCard));

    }

    flipCard(e) {

        const clickedCard = e.target;

        if (this.canPlay && !clickedCard.classList.contains("opened")) {

            clickedCard.classList.add("opened");
            this.checkPair( clickedCard.dataset.image );

        }

    }

    checkPair(image) {

        if (!this.card1) this.card1 = image;
        else this.card2 = image;

        if (this.card1 && this.card2) {

            if (this.card1 == this.card2) {

                this.canPlay = false;
                setTimeout(this.checkIfWon.bind(this), 300)

            }
            else {

                this.canPlay = false;
                setTimeout(this.resetOpenedCards.bind(this), 800)

            }

        }

    }

    resetOpenedCards() {

        const firstOpened = document.querySelector(`.board-game figure.opened[data-image='${this.card1}']`);
        const secondOpened = document.querySelector(`.board-game figure.opened[data-image='${this.card2}']`);

        firstOpened.classList.remove("opened");
        secondOpened.classList.remove("opened");

        this.card1 = null;
        this.card2 = null;

        this.canPlay = true;

    }

    checkIfWon() {

        this.foundPairs++;

        this.card1 = null;
        this.card2 = null;
        this.canPlay = true;

        if (this.maxPairNumber == this.foundPairs) {

            alert("¡Ganaste!");
            this.setNewGame();

        }

    }

    setNewGame() {

        this.removeClickEvents();
        this.cards.forEach(card => card.classList.remove("opened"));

        setTimeout(this.startGame.bind(this), 1000);

    }

}

document.addEventListener("DOMContentLoaded", () => {

    new Memorama();

});