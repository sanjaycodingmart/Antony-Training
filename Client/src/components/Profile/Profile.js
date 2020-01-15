import React,{useState, useEffect} from 'react'
import User from './sections/User';
import Spinner from '../Gif/Spinner.gif'

const Profile = () => {


    const [confirmEmail, setconfirmEmail] = useState('');
    const [curUser, setCurUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(async ()=>{
        const email = await localStorage.getItem('id');
        const users = {email}
        console.log(email)
        const response = await fetch('/info',{
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(users)
                })
        const {user} = await response.json();
        console.log(user)
        setCurUser(user[0]);
        setLoading(false);
    },[]);
    if(loading) {
        return (
            <div style={{height: '90vh', width: '100vw', display: 'flex', alignContent: 'center', alignItems: 'center',textAlign:'center',justifyContent:'center'}}>
                <img src={Spinner} height= "100" width="100"/>
            </div>
        )
    }

    const deleteHandler = async () => {
        const email = localStorage.getItem('id');
        const existUser = {email};
        if(confirmEmail === email){
            const response = await fetch('/delete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(existUser)
            });

            const {isDeleted} = await response.json();
        
            if(isDeleted) {
                localStorage.clear();
                window.location.replace('/');
            }else{
                window.alert('User deactivation failed');
            }
        }else{
            window.alert('U have entered wrong email id');
        }
    }
    return (
        <div style={{margin:'100px 550px'}}>
            <User user={curUser}/>
            <button className="btn btn-default" data-toggle="modal" data-target="#deactivate" style={{float:'right', backgroundColor:'#f95838', color:'#fff', marginTop:'10px'}}>DEACTIVATE</button>
            <div class="modal fade" id="deactivate" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                            <p>Are you sure u want to deactivate this account. </p>
                            <h5><b>{curUser.email}</b></h5>&nbsp;
                            <input type="confirmEmail" className="form-control" placeholder="Enter your email here to deactivate"  value={confirmEmail} onChange={event => setconfirmEmail(event.target.value)} required/>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-danger" onClick={deleteHandler}>Deactivate</button>
                            <button type="button" class="btn btn-default" style={{backgroundColor:'#eee'}} data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Profile; 