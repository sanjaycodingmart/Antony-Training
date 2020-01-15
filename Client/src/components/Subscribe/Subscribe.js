import React from 'react'
import Logo from '../../Image/onlyLogo.png';
import TextLogo from '../../Image/Logo.png';
import Design from './Design';
import { Plans } from './Plans';


const Subscribe = () => {
    const styles = {
        center: {display:'block', alignContent: 'center',textAlign:'center',alignItems:'center'}
    }
    return (
        <div> 
            <div style={{marginTop: '80px', height: '70vh', overflowX: 'hidden'}}>
            <div style={styles.center}>
                <img src={Logo} height="300" /><br/>
                <img src={TextLogo} height="100"/>
                <p >Your mood. Your activities. Your tastes. Music that</p>
                <p>gets you.</p>
                <div className="row" style={styles.center}>
                    <button type="button" className="btn btn-default" style={{backgroundColor: '#f95838',fontWeight: '900', border: '6px sloid #f95838', margin: '10px', color:'#fff', padding: '7px 25px'}} data-toggle="modal" data-target="#myModal">SUBSCRIBE</button>
                    <button type="button" className="btn btn-default" style={{ border: '2px solid #ccc', fontWeight: '900', margin: '10px', padding: '7px 25px'}} data-toggle="modal" data-target="#myModal">No THANKS</button>
                </div>
            </div>
        </div>
        <Design />
        <Plans />
        </div>
    )
}

export default Subscribe;