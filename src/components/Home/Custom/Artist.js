import React from 'react'
import Card from '../Utils/Card';

const Artist = ({artist}) => {
    console.log(artist)
    return (
        <div style={{paddingTop: '50px'}}>
            <h2>Artists on this station</h2>
            <div className="row">
                {
                    artist.map(person => {
                        const {name, picture_medium, id} = person.artist;
                        return (
                            <div className="col-md-2" style={{margin: '20px'}} key={id}>
                                <Card id={id} name={name} img={picture_medium}/>
                            </div>
                        );
                    })
                }   
                
            </div>
        </div>
    )
}

export default Artist;