import React, {useState} from 'react'
import ModalInput from '../InputFeild/InputModal';
import GoogleLogin from 'react-google-login';

const Modal = ({users, AuthUserHandler}) => {

    const [user, setUser] = useState({});

    const updateHandler = event => 
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });

    const validateHandler = async () => {
        console.log(user);

        try {
                const response = await fetch('/login', {
                        method: 'POST', 
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(user)
                        })
                const res = await response.json()
                localStorage.setItem('token', res.token);
                localStorage.setItem('id', res.id);
                localStorage.setItem('language', JSON.stringify(res.language[0].languages));
                localStorage.setItem('songs',JSON.stringify(res.favourites));
                window.location.replace('/home');
        } catch (err) {
            console.log(err.message);
        }
    }       

     
    const responseGoogle = async response => {
        const email = response.profileObj.email;
        const AuthUser = {
            'E-mail': email,
            oauth: true
        }
        
        try {
            
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(AuthUser)
                })
            const res = await response.json()
            localStorage.setItem('token', res.token);
            localStorage.setItem('id', res.id);
            localStorage.setItem('language', JSON.stringify(res.language[0].languages));
            localStorage.setItem('songs',JSON.stringify(res.favourites));
            localStorage.setItem('subscribe', res.subscribe);
            if(res.deleted === 'true') {
                return window.location.replace('/exist');
            }

            window.location.replace('/home');
        } catch (err) {
            console.log(err.message);
        }
    }
    return (
        <div className="modal fade" id="loginModal">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            
                <div className="modal-header">
                <h4 className="modal-title">Login Page</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                
                <div className="modal-body">
                    <ModalInput label="E-mail" type="email" value={user['E-mail']} updateHandler={updateHandler} />
                    <ModalInput label="Password" type="password" value={user['Password']} updateHandler={updateHandler}/>
                </div>
                
                <div className="modal-footer">
                    <button type="button" className="btn btn-success" onClick={validateHandler} data-dismiss="modal">Login</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                <GoogleLogin
                    clientId="981270358450-jatrlu8gvr28qhesu19vus649bn0a1al.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                
            </div>
            </div>
        </div>
    )
}

export default Modal;