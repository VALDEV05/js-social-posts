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
}]




//stampa a schermo
for (let index = 0; index < posts.length; index++) {
    console.log(posts[index].name);
    console.log(posts[index].profilePicture);
    console.log(posts[index].description);
    console.log(posts[index].image);
    post = `<div class="post bg-light my-5">
            <div class="userData user">
                <div class="image_user"></div>
                <div class="name_user"></div>
            </div>
            <div class="userData description">
            </div>
            <div class="image_post">
                <img src="..." alt="">
            </div>
            <div class="userData like bg-light">
                <button class="btnLike d-flex justify-content-center align-items-center text-dark"><i class="fas fa-thumbs-up"></i> &nbsp;MI PIACE</button>
                <div class="counterLike d-flex justify-content-center align-items-center"></div>
            </div>
        </div>`
    placeToPrint.innerHTML += post


}
const nameDataUser = document.querySelector('.name_user');
const profilePicDataUser = document.querySelector('.image_user');
const descriptionDataUser = document.querySelector('.userData.description');
const imageDataUser = document.querySelector('.image_post')
const btnLike = document.querySelector('.btnLike');
const placeLike = document.querySelector('.counterLike')

placeLike.innerHTML = `<p>Piace a <span class="fw-bold">0</span> persone</p>`

nameDataUser.innerHTML = `<p>${posts[0].name}</p>`
profilePicDataUser.innerHTML = `<img src=${posts[0].profilePicture}>`
descriptionDataUser.innerHTML = `<p>${posts[0].description}</p>`
imageDataUser.innerHTML = `<img src=${posts[0].image}>`
let like = 0
btnLike.addEventListener('click', function() {
    like++;
    placeLike.innerHTML = `<p>Piace a <span class="fw-bold">${like}</span> persone</p>`
})