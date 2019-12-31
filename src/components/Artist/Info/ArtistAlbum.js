import React from 'react'
import Card from '../../Home/Utils/Card';

const ArtistAlbum = ({artist}) => {
    return (
        <div style={{paddingTop: '50px'}}>
            <h2>{artist[0].artist.name} Album</h2>
            <div className="row">
                {
                    artist.map(person => {
                        const {cover_medium, title, id} = person.album;
                        return (
                            <div className="col-md-2" style={{margin: '20px'}} key={id}>
                                <Card id={id} name={title} img={cover_medium}/>
                            </div>
                        );
                    })
                }   
                
            </div>
        </div>
    )
}

export default ArtistAlbum;