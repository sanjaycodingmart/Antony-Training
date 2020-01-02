import React, { Component } from 'react'
import ArtistInfo from './Info/ArtistInfo';
import ArtistAlbum from './Info/ArtistAlbum';
import Player from '../Player/Player';
import Spinner from '../Gif/Spinner.gif';

class Artist extends Component {
    state = {
        artist: null,
        isLoding: true,
        playing: null
    }

    UNSAFE_componentWillMount = async () =>  {
        const id = this.props.match.params.id;
        try {
            const response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q="+id, {
                                "method": "GET",
                                "headers": {
                                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                                    "x-rapidapi-key": "e79495a078mshb503c710a93d15ap17d7e4jsn1e8ed5bfe6d8"
                                }
                            });
            const data = await response.json();
            this.setState({artist: data.data, isLoding: false});
        } catch (err) {
            console.log(err.message);
        }
    }

    playHandler = (name, img, preview, duration) =>  
            this.setState({playing: {name,img,preview,duration}});
    render() {
       
        const {artist, isLoding, playing} = this.state;
        if( isLoding) {
            return (
                <div style={{height: '90vh', width: '100vw', display: 'flex', alignContent: 'center', alignItems: 'center',textAlign:'center',justifyContent:'center'}}>
                    <img src={Spinner} height= "100" width="100"/>
                </div>
            )
        }
        const name = artist[0].artist.name;
        const img  = artist[0].artist.picture_medium;
        const toShow = artist.splice(0, 10);
        return (
            <div>
                <div style={{margin: '40px 8vw'}}>
                    <ArtistInfo name={name} img={img}/>
                    <ArtistAlbum artist={toShow} favouritesHandler={this.props.favouritesHandler} playHandler={this.playHandler}/>
                </div>
                <Player playing = {playing}/>
            </div>
        )
    }
}

export default Artist;