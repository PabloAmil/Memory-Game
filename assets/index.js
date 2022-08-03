
const cardArray = [
    {
        name: 'Articuno',
        img: './assets/images/Articuno.png'
    },
    {
        name: 'Gengar',
        img: './assets/images/Gengar.png'
    },
    {
        name: 'Mewtwo',
        img: './assets/images/Mewtwo.png'
    },
    {
        name: 'Pikachu',
        img: './assets/images/Pikachu.png'
    },
    {
        name: 'Snorlax',
        img: './assets/images/Snorlax.png'
    },
    {
        name: 'Suicune',
        img: './assets/images/Suicune.png'
    },
    {
        name: 'Articuno',
        img: './assets/images/Articuno.png'
    },
    {
        name: 'Gengar',
        img: './assets/images/Gengar.png'
    },
    {
        name: 'Mewtwo',
        img: './assets/images/Mewtwo.png'
    },
    {
        name: 'Pikachu',
        img: './assets/images/Pikachu.png'
    },
    {
        name: 'Snorlax',
        img: './assets/images/Snorlax.png'
    },
    {
        name: 'Suicune',
        img: './assets/images/Suicune.png'
    }
];

cardArray.sort((a,b) =>  0.5 - Math.random()) // esto checkea si el numero es mas chico que 0.5 o mas grande que 0.5. si el primero es mas chico, el segundoe es mas grande. ojo con las llaves, NO hay que ponerlas en funciones de 1 sola linea

const grid = document.querySelector('#grid'); // selecciona la grilla
const message = document.querySelector('#message')

let cardsChosen = []; 
let cardChosenIds = [];
let cardsWon = [];

function createBoard() {  // una funcion para crear las tarjetas y la tabla

    for (let i = 0; i < cardArray.length; i++) { // un ciclo for que por cada una (recordar que si son 6 pokemon tiene que haber otros 6 pares): 
        const card = document.createElement('img') // crea la etiqueta de las tarjetas
        card.setAttribute('src', "./assets/images/pokeball.jpg") // a cada elemente img le agrega el atributo src con el enlace de la imagen de la pokebola
        card.setAttribute('data-id', i) // les agrega un atributo data-id y le da el valor de i (en la sitaxis es el atributo a agregar y desp el valor) este valor cambia segun el orden que disponga el math.random
        grid.appendChild(card) // ahora a la etiqueta que tenga el id #grid le va a agregar la card creada. append() o appendChild() eran para agregar un elemento interno
        card.addEventListener('click', flipCard) // se agrega a la card (a la etiqueta img) el eventListener click
    }
}
createBoard()


// flip cards when clicked.

function flipCard() {


    const cardID = this.getAttribute('data-id') // a cualquier elemento que haya invocado el evento le busca el atributo 'data-id' antes creado y el atributo se guarda en una variable. como el e.target, pero mejor
    // esto es para saber exactamente que carta se clickeo


    console.log('clicked', cardID) // este console.log muestra el data-id de cada carta
    console.log(cardArray[cardID]) // cardID es igual al data-id que va cambiando su valor por la variable i. al asignarlo al cardArray en realidad entre corchetes le estoy pasando un indice para que busque,
    console.log(cardArray[cardID].name) 
    cardsChosen.push(cardArray[cardID].name) // se pushea el nombre para poder compararlo despues
    cardChosenIds.push(cardID) // se envian los id a un nuevo array para comparar luego
    console.log(cardChosenIds)
    this.setAttribute('src', cardArray[cardID].img); // para revelar la carta, se hace el mismo proceso que para obtener el nombre y se cambia el atributo

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 300)
    } // si el array tiene 2 valores va a llamar a la funcion que va a comparar si son iguales
}


function checkMatch() {

    const cards = document.querySelectorAll('img') // busca todas las imagenes en el documento y las almacena en una variable cards

    if (cardsChosen[0] == cardsChosen[1]) {  // este compara si los nombres son iguales y si es asi lanza un alert
        message.innerHTML = `<h2 style="color:green">"Match!"</h2>`
        cards[cardChosenIds[0]].setAttribute('src', "./assets/images/pngwing.com.png" )
        cards[cardChosenIds[1]].setAttribute('src', "./assets/images/pngwing.com.png" ) // a ambas images se les cambia el atributo img por una imagen en negro 
        cards[cardChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardChosenIds[1]].removeEventListener('click', flipCard) // se les quita el evento para que ya no puedan volver a ser usadas. nota: al remover el evento tamb tiene que removerse la funcion de callback
        cardsWon.push(cardsChosen);
        
    } else {
        cards[cardChosenIds[0]].setAttribute('src', "./assets/images/pokeball.jpg" )
        cards[cardChosenIds[1]].setAttribute('src', "./assets/images/pokeball.jpg" )
        message.innerHTML = `<h2 style="color:red">"sorry, no match!"</h2>`
    }
    if (cardsWon.length == cardArray.length/2) {
        
        Swal.fire({
            title: 'Congratulations, you won!!',
            text: "play again?",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                location. reload()
              )
            }
          })
    }
    cardsChosen = [];// estos son los que compara
    cardChosenIds = [];
};






