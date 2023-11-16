const app = document.getElementById("app");
const loading =  document.getElementById("loading");

loading.style.color = 'violet';

async function getPhotos(number=12) { // number by default of photos
    loading.textContent = 'Loading...' // set text Loading
    app.textContent=''
    try {
        // this is to generate a diferents photos
        const randomNumber = Math.floor(Math.random() * 200)

        const resp = await fetch('https://jsonplaceholder.typicode.com/photos')
        const data = await resp.json()
        const dataSlice = data.slice(randomNumber, randomNumber+number)

        setTimeout(() => {
            printList(dataSlice) 
        }, 1000);

    } catch (error){
        console.error(error)
    } finally {
        setTimeout(() => {
            loading.textContent = ''  // remove Loading aften time
        }, 900);
    }
}

// this funtion crint de card list
function printList(data=[]) {
    let list=''
    data.map((element)=>{
        list += cart(element.id, element.title) 
    })
    app.innerHTML = `<ul>${list}</ul>`
}

// a simple card with images
function cart(id, title){
    return (
        `<li class='card'>
            <img src="https://picsum.photos/id/${id}/200/300" alt="${title}" >
            <div class='title'>${title}</div>
        </li>` 
    )
}  