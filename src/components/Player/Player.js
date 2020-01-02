import React, {useState} from 'react'

const Player = ({playing}) => {

    const [sec, setSec] = useState(0);
    const [showSec, changeSec] = useState(0);
    const timeConvert = sec => {
        let min=0;
        while(sec > 60) {
            min++;
            sec-=60;
        }
        return [min, sec];
    }

    if(playing === null) {
        return (
            <nav className="row" style={{width: '100%', height: '80px', backgroundColor: '#eee', position:'fixed', bottom: '0'}}>
            <div className="col-md-12">
                <ul style={{display: 'flex', textAlign: 'center', width: '100%', alignContent: 'center'}}>
                    <li style={{listStyle:'none'}}><i class="fa fa-step-backward" style={{color: 'black', fontSize: '28px', position:'absolute', top:'20px', left: '45%'}}></i></li>
                    <li style={{listStyle:'none'}}><i class="fas fa-play-circle" style={{color: '#f95838', fontSize: '48px', position:'absolute', top:'14px', left: '50%'}}></i></li>
                    <li style={{listStyle:'none'}}><i class="fa fa-step-forward" style={{color: 'black', fontSize: '28px', position:'absolute', top:'20px', left: '56%'}}></i></li>
                </ul>
            </div>
            </nav>
        );
    }

    const update = (value) => new Promise((resolve, reject)=> {
        setTimeout(()=> {
            setSec(value*0.208125);
            resolve();

        },62.5)
    });
    
    
    let Song = new Audio(playing.preview);
    const playHandler = async () => {
        Song.play(); 
        for(let i=0; i<= 480; i++)
        {
            await update(i);
            changeSec(parseInt(i/16));
        }
    }
    const pauseHandler = () => {
        Song.pause();
    }

    const [min, second] = timeConvert(playing.duration);
    const style = {
        progressbar: {width: `${sec}%` ,height: '81px', backgroundColor: '#eee', position:'fixed', bottom: '0', borderTop: '3px solid #f95838'}
    }
    
    return (
        <div>
            <nav className="row" style={{width: '100%' ,height: '80px', backgroundColor: '#eee', position:'fixed', bottom: '0'}}>
            <div style={style.progressbar}></div>
                
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={playing.img} height="100" width="100" style={{padding: '10px 10px', paddingBottom: '30px'}}/>
                        </div>
                        <div className="col-md-8">
                            <h3>{playing.name}</h3>
                            <p>Duration : 0 min {showSec} sec</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                <ul style={{display: 'flex', textAlign: 'center', width: '100%', alignContent: 'center'}}>
                    <li style={{listStyle:'none'}}><i class="fa fa-step-backward" style={{color: 'black', fontSize: '28px', position:'absolute', top:'22px', left: '80%'}} ></i></li>
                    <li style={{listStyle:'none'}} ><i class="fas fa-play-circle" onClick={playHandler} style={{color: '#f95838', fontSize: '48px', position:'absolute', top:'12px', left: '85%'}}></i></li>
                    <li style={{listStyle:'none'}} ><i class="fas fa-pause-circle" onClick={pauseHandler}  style={{color: '#f95838', fontSize: '48px', position:'absolute', top:'12px', left: '70%'}}></i></li>
                    <li style={{listStyle:'none'}} ><i class="fa fa-step-forward" style={{color: 'black', fontSize: '28px', position:'absolute', top:'22px', left: '92%'}}></i></li>
                </ul>
            </div>
            </nav>

        </div>
    )
}


export default Player;