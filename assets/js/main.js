/* Descrizione:
Creare una pagina che elenchi una lists di post socials a partire da un array di oggetti.
Gli attributi minimi del modello di un post: id, contenuto, immagine,
autore (nome, avatar), numero di likes, data creazione.
Un secondo array conterrà solo gli id dei posts a cui abbiamo dato like.

Immagini: va bene utilizzare qualsiasi servizio di placeholder
ad es. Unsplash (https://unsplash.it/300/300?image=<id>)

BONUS:
Bonus 1: Date formattate come tempo relativo (es. "due mesi fa")
Bonus 2: Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Sofia Perlari > SP)
 Bonus 3: Click al pulsante "Mi Piace" incrementa il counter dei like al post. */


/* aggiunta del titolo */
const firstTitle = 'Social Posts'
const placeToPrint = document.querySelector('.container')
let titleToPrint = `<h1 class="title text-center text-light mt-4 fw-bold">${firstTitle}</h1>`
placeToPrint.insertAdjacentHTML("afterbegin", titleToPrint)





//costruzione oggetto di un utente
const posts = [{
    name: 'Phil Mangione',
    profilePicture: 'https://picsum.photos/50/50',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consectetur cumque alias consequuntur dolorum aspernatur!Odit consectetur cumque alias consequuntur',
    image: 'https://picsum.photos/450/500'
}, {
    name: 'Phil Iamocela',
    profilePicture: 'https://picsum.photos/50/50',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consectetur cumque alias consequuntur dolorum aspernatur!Odit consectetur cumque alias consequuntur',
    image: 'https://picsum.photos/450/500'
}, {
    name: 'Phil Iannarelli',
    profilePicture: 'https://picsum.photos/50/50',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consectetur cumque alias consequuntur dolorum aspernatur!Odit consectetur cumque alias consequuntur',
    image: 'https://picsum.photos/450/500'
}, {
    name: 'Mario Rossi',
    profilePicture: 'https://picsum.photos/50/50',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consectetur cumque alias consequuntur dolorum aspernatur!Odit consectetur cumque alias consequuntur',
    image: 'https://picsum.photos/450/500'
}, {
    name: 'Girolamo Seghetta',
    profilePicture: 'https://picsum.photos/50/50',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consectetur cumque alias consequuntur dolorum aspernatur!Odit consectetur cumque alias consequuntur',
    image: 'https://picsum.photos/450/500'
}]




//stampa a schermo
for (let index = 0; index < posts.length; index++) {

    post = `<div class="post bg-light my-5">
                <div class="userData user">
                    <div class="image_user"><img src=${posts[index].profilePicture}></div>
                    <div class="name_user"><p>${posts[index].name}</p></div>
                </div>
                <div class="userData description">
                    <p>${posts[index].description}</p>
                </div>
                <div class="image_post">
                    <img src=${posts[index].image}>
                </div>
                <div class="userData like bg-light">
                    <button class="btnLike d-flex justify-content-center align-items-center text-dark"><i class="fas fa-thumbs-up">
                    </i> &nbsp;MI PIACE
                </button>
                <div class="counterLike d-flex justify-content-center align-items-center">Piace a  persone</div>
            </div>`
    placeToPrint.innerHTML += post


}