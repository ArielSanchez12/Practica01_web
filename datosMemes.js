// LABORATORIO #2
// Richard Padilla - Ivan Castillo - Ariel Sanchez

const obtenerMemes = async() => {
    
    // esto nos permite acceder al contenedor de memes
    const memesContainer = document.getElementById("list-memes")

    // accede a la plantilla de memes
    const memeTemplate = document.getElementById("meme")

    // nos da accedeso a la API de memes
    const request = await fetch("https://api.imgflip.com/get_memes")

    // esto nos permite ver la respuesta de la API
    const respuesta = await request.json()

    // muestra la respuesta de la API en la consola del navegador
    console.log(respuesta)

     // nos permite acceder a la parte de respuesta a data y dentro de data a memes
     respuesta.data.memes.slice(0,8).forEach(meme => {
        const newMemeCard = memeTemplate.cloneNode(true)
        const img = newMemeCard.querySelector("img")
        img.src = meme.url
        memesContainer.appendChild(newMemeCard)
        
    });

    // nos permite eliminar la plantilla de memes
    memeTemplate.remove()

}

// ejecutarmos la función obtenerMemes
obtenerMemes()