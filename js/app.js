const button = document.querySelector('.btn');
const image = document.querySelector('.img');
const url = "https://randomfox.ca/floof/";

async function fetchHandler () {
    try {
        const response = await fetch(url);
        const data = await response.json(); // получает из body и переводит
        // console.log(data);
        image.src = data.image; //data.image -
    } catch {
        console.log(error);
    }
}

button.addEventListener('click', () => {
    let isLoader = image.complete;

    if (isLoader) {
    fetchHandler();
    }
})

fetchHandler();