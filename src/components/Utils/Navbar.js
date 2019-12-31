import React, {useState}  from 'react'
import Logo from '../../Image/Logo.png';
import LoginModal from '../Utils/Modal/LoginModal';
import SignupModal from '../Utils/Modal/SignupModal';


const Navbar = ({updateUserHandler, users, AuthUserHandler, user, isAuthenticated}) => {

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
        itemText:{listStyle: 'none', padding: '10px', paddingTop: '17px'}
    }

    let show = (
        <ul style={styles.items}>
            <li style={styles.item}><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal" >SIGN Up</button></li>
            <li style={styles.item}><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#loginModal" >LOGIN</button></li>
        </ul>
        
    );

    if(isAuthenticated) {
        show = (
            <ul style={styles.items}>
                <li style={styles.itemText}><p>Logged In as {user['E-mail'].split('@')[0]}</p></li>
                <li style={styles.itemText}><p><i class="fas fa-heart" style={{color: 'red'}}/> Favourites</p></li>
                <li style={styles.item}><button type="button" className="btn btn-default" data-toggle="modal" data-target="#loginModal" >Logout</button></li>
            </ul>
        );
    }
    return (
        
        <nav className="sticky-top" style={styles.navbar}>
            <img src={Logo} height="50"  style={styles.logo}/>
            {show}
            <LoginModal users={users} AuthUserHandler={AuthUserHandler}/> 
            <SignupModal updateUserHandler={updateUserHandler}/>
        </nav>
    )
}

export default Navbar;