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
    author: {
        name: 'Phil Mangione',
        avatar: '2 mesi fa'
    },
    profilePicture: 'https://picsum.photos/50/50',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consectetur cumque alias consequuntur dolorum aspernatur!Odit consectetur cumque alias consequuntur',
    image: 'https://picsum.photos/450/500',
    like: 100
}, {
    author: {
        name: 'Phil Iamocela',
        avatar: '3 mesi fa'
    },
    profilePicture: 'https://picsum.photos/50/50',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consectetur cumque alias consequuntur dolorum aspernatur!Odit consectetur cumque alias consequuntur',
    image: 'https://picsum.photos/450/500',
    like: 150
}, {
    author: {
        name: 'Phil Iannarelli',
        avatar: '1 mesi fa'
    },
    profilePicture: 'https://picsum.photos/50/50',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consectetur cumque alias consequuntur dolorum aspernatur!Odit consectetur cumque alias consequuntur',
    image: 'https://picsum.photos/450/500',
    like: 80
}, {
    author: {
        name: 'Mario Rossi',
        avatar: 'Oggi'
    },
    profilePicture: 'https://picsum.photos/50/50',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consectetur cumque alias consequuntur dolorum aspernatur!Odit consectetur cumque alias consequuntur',
    image: 'https://picsum.photos/450/500',
    like: 0
}, {
    author: {
        name: 'Girolamo Seghettas',
        avatar: 'Ieri'
    },
    profilePicture: 'https://picsum.photos/50/50',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consectetur cumque alias consequuntur dolorum aspernatur!Odit consectetur cumque alias consequuntur',
    image: 'https://picsum.photos/450/500',
    like: 20
}]




//stampa a schermo
for (let index = 0; index < posts.length; index++) {
    post = `<div class="post bg-light my-5">
                <div class="userData user">
                    <div class="image_user">
                        <img src=${posts[index].profilePicture}>
                    </div>
                    <div class="name_user">
                        <p>${posts[index].author.name}</p>
                        <span>${posts[index].author.avatar}</span>
                    </div>
                </div>
                <div class="userData description">
                    <p>${posts[index].description}</p>
                </div>
                <div class="image_post">
                    <img src=${posts[index].image}>
                </div>
                <div class="userData description bg-light">
                    <button class="btnLike d-flex justify-content-center align-items-center text-dark" id= "${index}"><i class="fas fa-thumbs-up"></i> &nbsp;MI PIACE</button>
                    <div class="counterLike d-flex justify-content-center align-items-center"> Piace a ${posts[index].like} persone</div>
                </div>
            </div>`
    placeToPrint.innerHTML += post


}
/* for (let index = 0; index < posts.length; index++) {
    likePost = posts[index].like

    const btnLike = document.getElementById(`${index}`);
    btnLike.addEventListener('click', function() {
        console.log(`like ${index}`);
        newLikePost = likePost++
    })
    newLikePost = posts[index].like
    console.log(newLikePost);
} */