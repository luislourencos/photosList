const app = document.getElementById("app");
const loading =  document.getElementById("loading");

loading.style.color = 'white';

async function getPhotos(number=12) {
    loading.textContent = 'Loading...'
    app.textContent=''
    try {
        const randomNumber = Math.floor(Math.random() * (200) + 1)

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
            loading.textContent = ''  
        }, 900);
    }
}


function printList(data=[]) {
    let list=''
    data.map((element)=>{
        list += cart(element.id, element.title) 
    })
    app.innerHTML = `<ul>${list}</ul>`
}

function cart(id, title){
    return (
        `<li class='card'>
            <img src="https://picsum.photos/id/${id}/200/300" alt="${title}" >
            <p>${title}</>
        </li>` 
    )
}  