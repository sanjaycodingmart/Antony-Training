import React from 'react'
import MusicPlayer from 'react-audio-player';

const YourFavourites = ({fav, addTOPlay}) => {
    const keys = Object.keys(fav);
    const timeConvert = sec => {
        let min=0;
        while(sec > 60) {
            min++;
            sec-=60;
        }
        return [min, sec];
    }
    console.log(fav)
    return (
        <div>
            <h1>Favourites</h1>

            {keys.length === 0 ? (<div style={{paddingTop: '100px',paddingLeft:'0%', textAlign:'center'}}>
                    <h2>Noting Added to Favourites</h2>
                    <button className="btn btn-primary" onClick={()=> window.location.replace('/home')}>Home Page</button>
            </div> ) :
                keys.map(key=> {
                    const [min, sec] = timeConvert(fav[key].duration); 
                    return (
                    <div className="card" style={{margin:'20px'}} onClick={()=>addTOPlay(fav[key].preview, fav[key].img, fav[key].name)}>
                        <div className="row" style={{height: '120px', width: '100%'}}>
                            <div className="col-md-2" style={{paddingLeft: '30px', paddingTop:'10px'}}>
                                <img src={fav[key].img} height="100"/>
                            </div>
                            <div className="col-md-2" style={{padding:'15px'}}>
                                <div className="row">
                                <h4>{fav[key].name}</h4>

                                </div>
                                <div className="row">

                                    <h4 style={{color: '#aaa'}}>Duration: {min}min {sec}sec</h4>
                                </div>
                            </div>
                            <div className="col-md-6" style={{paddingTop:'35px'}}>
                                <MusicPlayer src= {fav[key].preview} controls style={{width: '1000px', backgroundColor: '#f95838',border: '1px solid #f95838', borderRadius: '100px'}}/>
                            </div>
                        </div>
                    </div>
                )
                })

            }
                
        </div>
    )
}

export default YourFavourites;