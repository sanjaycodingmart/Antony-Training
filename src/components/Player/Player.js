import React from 'react'

const Player = () => {
    return (
        <nav className="row" style={{width: '100%', height: '80px', backgroundColor: '#eee', position:'sticky', bottom: '0'}}>
            <ul style={{display: 'flex', textAlign: 'center', width: '100%', alignContent: 'center'}}>
                <li style={{listStyle:'none'}}><i class="fa fa-step-backward" style={{color: 'black', fontSize: '28px', position:'absolute', top:'20px', left: '45%'}}></i></li>
                <li style={{listStyle:'none'}}><i class="fas fa-play-circle" style={{color: '#f95838', fontSize: '48px', position:'absolute', top:'14px', left: '50%'}}></i></li>
                <li style={{listStyle:'none'}}><i class="fa fa-step-forward" style={{color: 'black', fontSize: '28px', position:'absolute', top:'20px', left: '56%'}}></i></li>
                <li style={{listStyle:'none'}}><i class="fas fa-bookmark" style={{color: 'black', fontSize: '28px', position:'absolute', top:'20px', left: '90%'}}></i></li>
            </ul>
        </nav>
    )
}

export default Player;