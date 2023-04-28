
const getCatButton = document.querySelector('#get-cat-button');
const catImageContainer = document.querySelector('#cat-image-container');

function getCat() {
    fetch('http://placekitten.com/200/300')
        .then(response => {

            if (response.ok) {
                return response.blob();
            } else {
                throw new Error('Não foi possível obter a imagem do gato');
            }
        })
        .then(imageBlob => {
            const imageUrl = URL.createObjectURL(imageBlob);
            catImageContainer.innerHTML = `<img src="${imageUrl}" alt="Imagem de gato">`;
        })
        .catch(error => {
            catImageContainer.innerHTML = `<p>${error.message}</p>`;
        });
}


getCatButton.addEventListener('click', getCat);
