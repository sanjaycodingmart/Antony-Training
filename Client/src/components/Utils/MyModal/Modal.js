import React, {Component} from 'react'
import ReactPlayer from 'react-player'

class Modal extends Component{

    state = {
        ad: [
            {
                pirority: 1,
                url: 'https://firebasestorage.googleapis.com/v0/b/play-music-22.appspot.com/o/Video%2FLegendSaravana.mp4?alt=media&token=309e0e73-de44-4dea-906b-b855efaa0a91',
                title: 'SARAVANA STORES',
                sponser: 'Legend saravana'
            },
            {
                pirority: 2,
                url: 'https://firebasestorage.googleapis.com/v0/b/play-music-22.appspot.com/o/Video%2Fubereats.mp4?alt=media&token=82fe71f6-e557-4569-a8f6-8abf19c7b76d',
                title: 'Uber Eats',
                sponser: 'Uber'
            }
        ],
        sec: 9
    }
    render(){
        const { ad } = this.state;
        setTimeout(()=>this.setState({sec: this.state.sec-1}), 1000);

        return (
            <div>
                <div style={{height: '100vh', width: '100%', backgroundColor: '#0000009A', position: 'fixed', top: '0', left:'0'}}>
                    
                <div style={{height: '70vh', width: '55%', backgroundColor: '#fff', position: 'fixed', top: '90px', left:'400px', borderRadius: '3px'}}>
                    
                    <div style={{position: 'fixed', top:'200px',left:'600px', textAlign:'center'}}>
                        <h2>{ad[this.props.pior].title}</h2>
                        <ReactPlayer url={ad[this.props.pior].url} playing />
                        <p style={{marginTop:'10px', marginLeft: '430px'}}>powered by {ad[this.props.pior].sponser}</p>
                    </div>
                    <div style={{position:'absolute',bottom:'10px', right: '20px'}}>
                        <p style={{backgroundColor: '#eee', padding: '10px'}}>SONG WILL BE RESUMED WITH IN {this.state.sec} SEC</p>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Modal;
