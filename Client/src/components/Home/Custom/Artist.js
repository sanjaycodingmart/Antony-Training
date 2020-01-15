import React, {useState} from 'react'
import Card from '../Utils/Card';
import Modal from '../../Utils/MyModal/Modal';

const Artist = ({artist, favouritesHandler}) => {
    const [show, setShow] = useState(false);
    const [pirority, setPirority] = useState(0);
    const closeModal = (player) => new Promise ((resolve, reject)=> {
        setTimeout(()=>{
            setShow(false);
            player.play()
            resolve(player);
            setPirority(pirority+1);
        }, 10000);
    });
    return (
        <div style={{paddingTop: '50px'}}>
            <h2>Artists on this station</h2>
            <div className="row">
                {
                    artist.map(person => {
                        const {name, picture_medium, id} = person.artist;
                        return (
                            <div className="col-md-2" style={{margin: '20px'}} key={id}>
                                <Card id={id} name={name} img={picture_medium} favouritesHandler={favouritesHandler} artist={person} showModalHandler={()=>setShow(true)} closeModal={closeModal}/>
                            </div>
                        );
                    })
                }   
                
            </div>
            {show ? <Modal pior={pirority}/>: null}
        </div>
    )
}

export default Artist;