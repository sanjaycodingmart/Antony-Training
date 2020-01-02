import React  from 'react'
import Logo from '../../Image/Logo.png';
import LoginModal from './Modal/LoginModal';
import SignupModal from './Modal/SignupModal';

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
        const user = JSON.parse(localStorage.getItem('user'));
        show = (
            <ul style={styles.items}>
                <li style={{...styles.itemText}} onClick={()=>window.location.replace('/home')}><p>Home</p></li>
                <li style={styles.itemText}><p>Logged In as {user['E-mail'].split('@')[0]}</p></li>
                <li style={styles.itemText} onClick={favour}><p><i class="fas fa-heart" style={{color: 'red'}}/> Favourites</p></li>
                <li style={styles.item}><button type="button" className="btn btn-default" data-toggle="modal" data-target="#loginModal" onClick={logoutHandler}>Logout</button></li>
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