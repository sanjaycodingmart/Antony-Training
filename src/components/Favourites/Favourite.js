import React, {useState, useEffect} from 'react'
import YourFav from './YourFavourites';

const Favourite = () => {
    const [fav, setFav] = useState('');
    useEffect(()=> {
        setFav(JSON.parse(localStorage.getItem('songs')));
    },[])
    const addTOPlay = (preview, img, name) => {
        
        return console.log('object')
    }
    return (
        <div>
            <div  style={{margin:'90px'}}>
                <YourFav fav={fav} addTOPlay={addTOPlay} />
            </div>
        </div>
    )
}

export default Favourite;