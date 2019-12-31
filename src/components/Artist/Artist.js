import React, { Component } from 'react'
import ArtistInfo from './Info/ArtistInfo';
import ArtistAlbum from './Info/ArtistAlbum';
import Player from '../Player/Player';

class Artist extends Component {
    state = {
        artist: null,
        isLoding: true
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
    render() {
       
        const {artist, isLoding} = this.state;
        if( isLoding) {
            return <p>Loading . . . </p>
        }
        console.log(artist);
        const name = artist[0].artist.name;
        const img  = artist[0].artist.picture_medium;
        const toShow = artist.splice(0, 10);
        return (
            <div>
                <div style={{margin: '40px 8vw'}}>
                    <ArtistInfo name={name} img={img}/>
                    <ArtistAlbum artist={toShow} />
                </div>
                <Player />
            </div>
        )
    }
}

export default Artist;