import React from 'react'
import UserImg from '../../../Image/User.png'

const User = ({user}) => {
    console.log(user)
    return (
        <div className="row" style={{display:'block', justifyContent:'center',justifyItems:'center',alignItems: 'center',alignItems:'center', textAlign:'center'}}>
            <div  >
                <h3 style={{fontSize: '2rem', fontWeight: '10'}}>Personal info</h3>
                <p style={{fontSize: '1.2rem',color:'#3C4045'}}>Basic info, like your name and photo, that you use on Google services</p>
                {/* <
                <p style={{fontSize: '2.3rem', fontWeight: '10'}}>Welcome, Anto Richard</p>
                <p style={{fontSize: '1.2rem',color:'#3C4045'}}>Manage your info, privacy, and security to make Google work better for you.</p> */}
                <div className="card" style={{textAlign: 'left', padding:'30px 30px'}}>
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Profile</h3>
                            <p>Some info may be visible to other people using Google services. <a>Learn more</a></p>
                        </div>
                        <div className="col-md-6">
                            <img  src={UserImg} style={{marginBottom: '20px', float:'right'}} height="100" width="100"/>
                        </div>
                    </div>
                    
                    <hr/>
                    <div className="row">
                        <div className="col-md-6">
                            <p>PHOTO</p>
                        </div>
                        <div className="col-md-6">
                            <p>A photo helps personalizing your account</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-6">
                            <p>E-MAIL</p>
                        </div>
                        <div className="col-md-6">
                            <p>{user.email}</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-6">
                            <p>Date Of Birth</p>
                        </div>
                        <div className="col-md-6">
                            <p>Sep 22, 1998</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-6">
                            <p>GENDER</p>
                        </div>
                        <div className="col-md-6">
                            <p>Male</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-6">
                            <p>PHONE</p>
                        </div>
                        <div className="col-md-6">
                            <p>{user.phone}</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-6">
                            <p>PASSWORD</p>
                        </div>
                        <div className="col-md-6">
                            <p> 
                            <i class="fas fa-circle" style={{fontSize: '10px', marginRight: '3px'}}></i>
                            <i class="fas fa-circle" style={{fontSize: '10px', marginRight: '3px'}}></i>
                            <i class="fas fa-circle" style={{fontSize: '10px', marginRight: '3px'}}></i>
                            <i class="fas fa-circle" style={{fontSize: '10px', marginRight: '3px'}}></i>
                            <i class="fas fa-circle" style={{fontSize: '10px', marginRight: '3px'}}></i>
                            <i class="fas fa-circle" style={{fontSize: '10px', marginRight: '3px'}}></i>
                            <i class="fas fa-circle" style={{fontSize: '10px', marginRight: '3px'}}></i>
                            <i class="fas fa-circle" style={{fontSize: '10px', marginRight: '3px'}}></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;