import React, {useState}  from 'react'
import Logo from '../../Image/Logo.png';
import LoginModal from '../Utils/Modal/LoginModal';
import SignupModal from '../Utils/Modal/SignupModal';

const Navbar = ({updateUserHandler, users}) => {

    const styles = {
        navbar: {
            height: '65px', 
            width: '100%', 
            backgroundColor:'white',
            borderBottom: '1px solid #ccc'
        },
        logo:{
                paddingTop: '10px'
            },
        items : {display: 'flex', float: 'right', paddingRight: '20px'},
        item: {listStyle: 'none', padding: '10px'},
        link:{textDecoration: 'none'}
    }
    return (
        
        <nav style={styles.navbar}>
            <img src={Logo} height="50"  style={styles.logo}/>
            <ul style={styles.items}>
                <li style={styles.item}><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal" >SIGN Up</button></li>
                <li style={styles.item}><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#loginModal">LOGIN</button></li>
            </ul>
            <LoginModal users={users}/> 
            <SignupModal updateUserHandler={updateUserHandler}/>
        </nav>
    )
}

export default Navbar;