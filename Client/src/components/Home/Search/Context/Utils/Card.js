import React, {useState, useEffect} from 'react';
import Spinner from '../../../../Gif/CardSpinner.gif';
import MusicPlayer from 'react-audio-player';

const Card = (data) => {
    const [loading, setLoding] = useState(true);
    useEffect(()=> {
        setTimeout(()=>setLoding(false), 800);
    }, []);
    const {title, duration, preview} = data.data;
    const {picture_medium} = data.data.artist;

    if(loading) {
        return <img src={Spinner} height="100" width="100"/>
    }
    
    return (
        <div class="card" style={{margin:'10px 50px', padding:'10px', width:'290px'}}>
            <img class="card-img-top" src={picture_medium} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-text">{title}</h5>
                <p class="card-text">{duration}</p>
            </div>
            <MusicPlayer src= {preview} controls  style={{marginLeft: '-6px'}}/>
        </div>
    )
}

export default Card;