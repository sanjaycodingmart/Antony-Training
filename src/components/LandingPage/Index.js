import React from 'react'
import Logo from '../../Image/onlyLogo.png';
import TextLogo from '../../Image/Logo.png';
import Modal from '../Utils/Modal/SignupModal';


const Index = () => {

    return (
        <div style={{marginTop: '80px'}}>
            <div style={{display:'block', alignContent: 'center',textAlign:'center',alignItems:'center'}}>
                <img src={Logo} height="300" /><br/>
                <img src={TextLogo} height="100"/>
                <p >Your mood. Your activities. Your tastes. Music that</p>
                <p>gets you.</p>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">SIGN IN</button>
            </div>
            <Modal/>
        </div>
    )
}


export default Index;