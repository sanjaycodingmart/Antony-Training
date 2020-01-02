import React, {useState} from 'react'
import MusicPlayer from 'react-audio-player';

const Card = props => {

    const [color, setColor] = useState('black');
    const style = {
        icon : {fontSize: '22px', color:color}
    }
    const {name, id, img, favouritesHandler, artist, playHandler} = props;
    const clickHandler = () => window.location.replace(`/artist/${name}`);
    
    const addToFavourites = () => {
        if(color === 'red') {
            setColor('black') 
         }else{
             setColor('red');
             favouritesHandler(id, name, img, artist.preview, artist.duration);
         } 
    }

    const playSongHandler = () => {
        console.log(artist.preview);
    }
    return (
        <div className="card" style={{width: '19rem', paddingLeft:'2px'}} >
            <img className="card-img-top" src={img} height="250" width="250" alt="Card image cap" onClick={clickHandler}/>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-10">
                        <p className="card-text" onClick={()=>playHandler(name, img, artist.preview, artist.duration)}>{name}</p>
                    </div>
                    <div className="col-md-2">
                        <i class="far fa-bookmark" style={style.icon} onClick={addToFavourites}></i>
                    </div>
                </div>
                {/* <div className="row" style={{ paddingTop: '3px',alignItems: 'center', alignContent: 'center',justifyContent:'center', textAlign: 'center'}}>
                    <div className="col-md-4">
                    <i class="fa fa-angle-double-left"></i>
                    </div>
                    <div className="col-md-4" onClick={playSongHandler} >
                    <i style={{color: '#f95838'}} class="fa fa-play" aria-hidden="true"></i>
                    </div>
                    <div className="col-md-4">
                    <i class="fa fa-angle-double-right"></i>
                    </div>
                </div> */}
                
            </div>
            <MusicPlayer src= {artist.preview} controls />
        </div>
    )
}

export default Card;