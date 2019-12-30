import React, {useState} from 'react'
import ModalInput from '../InputFeild/InputModal';

const Modal = ({users}) => {

    const [user, setUser] = useState({});

    const updateHandler = event => 
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });

    const validateHandler = () => {
        users.forEach(Existuser => {
            if(Existuser['E-mail'] === user['E-mail']) {
                if(Existuser['Password'] === user['Password']) {
                    alert('login successful');
                }
            }
        });
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
                
            </div>
            </div>
        </div>
    )
}

export default Modal;