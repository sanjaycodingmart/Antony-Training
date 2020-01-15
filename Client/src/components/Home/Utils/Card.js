import React, {useState, useEffect} from 'react'
import MusicPlayer from 'react-audio-player';
import Spinner from '../../Gif/CardSpinner.gif';      

const Card = props => {

    const {name, id, img, favouritesHandler, artist, playHandler, showModalHandler, closeModal} = props;

    const [color, setColor] = useState('black');
    const [free, setFree] = useState(null);
    const [times, setTimes] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(async ()=>{
        const freeSongs = parseInt(localStorage.getItem('free'));
        const response = await fetch('/playedcount',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        });
        const { count } = await response.json();
        setTimes(count);
        setFree(freeSongs);
        setLoading(false)
    },[]);
    const style = {
        icon : {fontSize: '22px', color:color}
    }

    const clickHandler = () => window.location.replace(`/artist/${name}`);
    
    const player = React.createRef()

    const addToFavourites = () => {
        if(color === 'red') {
            setColor('black') 
         }else{
             setColor('red');
             favouritesHandler(id, name, img, artist.preview, artist.duration);
         } 
    }



    const fireUp = async () => {
        if(player.current !== null) {
                player.current.audioEl.pause();
                showModalHandler();    
        }
    }

    const pauseHandler = event => {
        closeModal(event.target)
            .then(play=> console.log('play'))
            .catch(err => console.log(err.message));
            console.log(event)
    }

    const freeSongHandler = async () => {
        const freeLeft = localStorage.getItem('free');
        await localStorage.setItem('free', freeLeft-1);
        await setFree(freeLeft-1);
        
    }

    const onPlayHandler = async () => {
        const response = await fetch('/played', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, times: times+1 })
        });
        setTimes(times+1);
        console.log(await response.json());
    }
    if(loading) return (<img src={Spinner} height="150" width="150" />)

    return (
        <div className="card" style={{width: '19rem', paddingLeft:'2px'}}>
            <img className="card-img-top" src={img} height="250" width="250" alt="Card image cap" onClick={clickHandler}/>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-7">
                        <p className="card-text" onClick={()=>playHandler(name, img, artist.preview, artist.duration)}>{name}</p>
                        {/* <i class="fas fa-eye" style={style.icon}></i> */}
                    </div>
                    <div className="col-md-3">
                        <i class="fa fa-eye" aria-hidden="true"> {times}</i>
                    </div>
                    <div className="col-md-2">
                        <i class="far fa-bookmark" style={style.icon} onClick={addToFavourites}></i>
                    </div>
                </div>
                
            </div>
            {
                free > 0 ?   <MusicPlayer src= {artist.preview} onPlay={freeSongHandler} controls/> : <MusicPlayer ref={player} src= {artist.preview} onPlay={onPlayHandler} onPause={pauseHandler} listenInterval={11000} onListen={fireUp} controls/>
            }
            
        </div>
    )
}

export default Card;