import React, {useState} from 'react'
import ModalInput from '../InputFeild/InputModal';
import Card from './Utils/Card';

const Modal = ({updateUserHandler}) => {
    const [signup, setSignup] = useState(true);
    const [user, setUser] = useState({});

    const updateHandler = event => 
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });

    const submitHandler = () => {
        if(user['Password'] !== user['Confirm-Password']) {
            alert('Password miss match');
            return setUser({});
        }
        if(user['Phone'].length !== 10) {
            return alert('Invalid Phone');
        }
        if(user['E-mail'].split('@').length!==2) {
            return alert('Invalid Email');
        }
        // updateUserHandler(user);
        setUser({
            ...user,
            languages: [],
            favourites: []
        })
        setSignup(false);
    }

    let toShow = (
            <div className="modal-body">
                <ModalInput label="E-mail" type="email" value={user['E-mail']} updateHandler={updateHandler} />
                <ModalInput label="Phone" type="number" value={user['Phone']} updateHandler={updateHandler}/>
                <ModalInput label="Password" type="password" value={user['Password']} updateHandler={updateHandler}/>
                <ModalInput label="Confirm-Password" type="password" value={user['Confirm-Password']} updateHandler={updateHandler} />
            </div>     
    );
    const selectLanguageHandler = lang => {
        setUser({
            ...user,
            languages: [...user.languages, lang]
        });
    }
    if(!signup) {
        toShow = (
                <div style={{margin: '20px'}}>
                    <div className="row">
                        <div className="col-md-6">
                            <Card language="Tamil" color="#47AC65" selectLanguageHandler={selectLanguageHandler}/>
                        </div>
                        <div className="col-md-6">
                            <Card language="English" color="red" selectLanguageHandler={selectLanguageHandler}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Card language="Hindi" selectLanguageHandler={selectLanguageHandler}/>
                        </div>
                        <div className="col-md-6">
                            <Card language="Arabic" selectLanguageHandler={selectLanguageHandler}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Card language="Telugu" selectLanguageHandler={selectLanguageHandler}/>
                        </div>
                        <div className="col-md-6">
                            <Card language="French" selectLanguageHandler={selectLanguageHandler}/>
                        </div>
                    </div>
                </div>  
        );
    }

    const addUSerHandler = async () =>{
        updateUserHandler(user);
        console.log(user);
        try {
            const response = await fetch('/register', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
                })
                const {message} = await response.json()
                if(message === 'success'){
                    alert('Created successful')
                }else{
                    alert('Server problem try after sometimes');
                }
        } catch (err) {
            console.log(err.message);
        }
    } 

    return (
        <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">SignUp Page</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                {toShow}
                <div className="modal-footer">
                    {
                        signup ? <button type="button" className="btn btn-success" onClick={submitHandler}> SignUp</button> :  <button type="button" className="btn btn-success" onClick={addUSerHandler} data-dismiss="modal"> Finish</button>
                    }
                    
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
        </div>
            </div>
        </div>
    )
}

export default Modal;