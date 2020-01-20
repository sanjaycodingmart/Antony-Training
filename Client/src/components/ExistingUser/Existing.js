import React, {useEffect} from 'react';
import User from '../../Image/User.png';
import {Link} from 'react-router-dom'



const Existing = () => {
    useEffect(async ()=> {
        const email = localStorage.getItem('id')
        await fetch(`/delete/${email}`, {
            method:'GET'
        });
    },[])
    return (
        <div style={{backgroundColor: '#fff', height: '90vh', width: '100%'}}>
            <div style={{ height: '60vh', width: '35vw', top: '200px',left: '650px',position:'fixed' ,border: '2px solid rgba(0,0,0,0.1)'}}>
                <div style={{textAlign:'center', marginTop: '30px'}}>
                    <img src={User} height="100" width="100"/>
                    <h4 style={{margin: '40px', fontWeight: '0.2'}}>{localStorage.getItem('id')}</h4>
                    <p>User already exist, do you like to login with same account.</p>
                <div className="row" style={{marginTop: '130px'}}>
                    <div className="col-md-6">
                        <Link to="/home" onClick={()=>localStorage.setItem('songs', JSON.stringify([]))} className="btn btn-default" style={{color: '#367BFF'}}>New User</Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/home"  className="btn btn-primary">Existing User</Link>
                    </div>
                </div>
                
                </div>
            </div>  
        </div>
    )
}

export default Existing;