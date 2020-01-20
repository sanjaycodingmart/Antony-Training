import React, {useEffect, useState}  from 'react'
import Logo from '../../Image/Logo.png';
import LoginModal from './Modal/LoginModal';
import SignupModal from './Modal/SignupModal';
import { Link } from 'react-router-dom';

const Navbar = props => {
    const {updateUserHandler, users, AuthUserHandler, isAuthenticated, newprops} = props;
    console.log(newprops);

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
        itemText:{listStyle: 'none', padding: '10px', paddingTop: '17px', cursor:'pointer'},
        hover : {
            color: 'red'
        }
    }

    const [subscription, setSubscription] = useState(false);

    useEffect(()=>{
        try {
            const subscribe = JSON.parse(localStorage.getItem('subscribe'));
            setSubscription(subscribe);
        } catch (err) {
            setSubscription(false);
        }
    },[]);

    let show = (
        <ul style={styles.items}>
            <li style={styles.item}><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal" >SIGN Up</button></li>
            <li style={styles.item}><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#loginModal" >LOGIN</button></li>
        </ul>
        
    );
    const logoutHandler = () => {
        localStorage.clear();
        window.location.replace('/');
    }

    const favour = () => window.location.replace('/favourite');

    if(isAuthenticated) {
        const email = localStorage.getItem('id');
        show = (
            <ul style={styles.items}>
                <li style={{...styles.itemText}} onClick={()=>window.location.replace('/home')}><p>Home</p></li>
                <li style={styles.itemText} onClick={favour}><p><i class="fas fa-heart" style={{color: 'red'}}/> Favourites</p></li>
                <li style={styles.itemText}></li>
                <div className="dropdown">
                <li className="btn btn-default" style={styles.itemText} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <p>Logged In as {email.split('@')[0]} <i className="fa fa-angle-down"></i></p>
                </li>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link className="dropdown-item"  to="/profile"><i class="far fa-user-circle"></i> &nbsp;Profile</Link>
                    {!subscription ? <Link className="dropdown-item" to="/subscribe"><i class="far fa-bell"></i> &nbsp;Subscribe</ Link> : null}
                    <a className="dropdown-item" onClick={logoutHandler}><i class="fas fa-sign-out-alt"></i> &nbsp;Logout</a>
                </div>
                </div>
                
            </ul>
        );
    }
    return (
        
        <nav style={styles.navbar}>
            <img src={Logo} height="50"   style={styles.logo}/>
            {show}
            <LoginModal users={users} AuthUserHandler={AuthUserHandler}/> 
            <SignupModal updateUserHandler={updateUserHandler}/>
        </nav>
    )
}

export default Navbar;