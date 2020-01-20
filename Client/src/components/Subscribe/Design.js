import React from 'react'
import Music from '../../Image/Music.png'

const Design = () => {
    const styles = {
        center: {display:'block', alignContent: 'center',textAlign:'center',alignItems:'center'}
    }
    return (
        <div style={{ height: '60vh', backgroundColor: '#5C4CE6', fontSize: '30px'}}>
            <div style={{...styles.center,padding: '160px', color: '#FFF', fontWeight: '300'}}>
                <h1>Bring your music along</h1>
                <div style={{color: '#B3ADF4', paddingTop: '60px'}}>
                <p>Add up to 50,000 songs from your computer and</p>
                <p>stream them anywhere for free.</p>
                </div>
            </div>
            <img src={Music} style={{position:'absolute',bottom:'0', right:'0'}}/>
        </div>
    )
}

export default Design;
