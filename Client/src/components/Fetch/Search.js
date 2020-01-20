
const Search = async (id, name, search, img) => {
    try {
        const response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${id}`, {
                            "method": "GET",
                            "headers": {
                                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                                "x-rapidapi-key": "e79495a078mshb503c710a93d15ap17d7e4jsn1e8ed5bfe6d8"
                            }
                        })
        const data = await response.json();
        const {duration, preview} = data.data[0];
        return {
            name, 
            duration,
            preview,
            img
        }
    } catch (err) {
        console.log(err.message);
    }
}

export default Search;