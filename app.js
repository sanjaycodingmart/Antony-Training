const Fetch = async url => {
    const response = await fetch(url);
    const result = await response.json();
    return result;
}

const newElement = element => {
    return document.createElement(element);
}

const newText = text => {
    return document.createElement(text);
}


const cols = document.getElementById('cols');
let tiles = 12;

const image_clicked = event => {
    const id = event.target.id;
    while (cols.hasChildNodes()) {
        cols.removeChild(cols.firstChild);
    }
    Fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=sNlGHtc5dHEepKZp0qoGwue3zu0KhHIN`)
        .then(response => {
            console.log(response);
            const { title } = response.data;
            const { url, height, width } = response.data.images.downsized_large;
            const show = document.getElementById('explore');
            show.innerHTML = `Title : ${title}`
            const newImg = newElement('img');
            newImg.src = url;
            newImg.height = height;
            newImg.width = width;
            cols.appendChild(newImg);
        })
        .catch(err => console.log(err));
}

const display = search => {
    var url = undefined;
    if (search === undefined) {
        url = `https://api.giphy.com/v1/gifs/trending?api_key=sNlGHtc5dHEepKZp0qoGwue3zu0KhHIN&limit=${tiles}&rating=G`
    } else {
        url = `https://api.giphy.com/v1/gifs/search?api_key=sNlGHtc5dHEepKZp0qoGwue3zu0KhHIN&q=${search}&limit=${tiles}&offset=0&rating=G&lang=en`
        const show = document.getElementById('explore');
        show.innerHTML = `Searched for ${search}`
    }
    Fetch(url).then(
        response => {
            response.data.forEach(gif => {
                const img = document.createElement('img');
                img.src = gif.images.downsized_large.url;
                img.alt = "./images/red.jpg";
                img.onclick = image_clicked;
                img.setAttribute('height', 250);
                img.setAttribute('width', 350);
                img.setAttribute('id', gif.id);
                cols.appendChild(img);
            });
        });
}

display();


var isInViewport = function(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
const footer = document.getElementById('footer');

window.onscroll = () => {
    if (isInViewport(footer)) {
        display();
    }
}


const searched = () => {
    const search = document.getElementById('search');
    if (search !== '') {
        while (cols.hasChildNodes()) {
            cols.removeChild(cols.firstChild);
        }
        display(search.value);
    }
}