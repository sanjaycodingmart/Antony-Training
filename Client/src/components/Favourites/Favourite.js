import React, {useState, useEffect} from 'react'
import YourFav from './YourFavourites';

const Favourite = () => {
    const [fav, setFav] = useState('');
    useEffect(()=> {
        setFav(JSON.parse(localStorage.getItem('songs')));
    },[])
    const addTOPlay = (preview, img, name) => {
        // console.log('obj')
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