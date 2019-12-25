const Fetch = async url => {
    try {
        const response = await fetch(url);
        const data = await response.json();

    } catch (error) {
        console.log(error);
    }

}


fetch(url)
    .then(response => response)
    .then(data => console.log(data))
    .catch(err => err);