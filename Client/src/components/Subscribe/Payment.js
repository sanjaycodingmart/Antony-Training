import React from 'react'
import OnlyLogo from '../../Image/onlyLogo.png'
import Logo from '../../Image/Logo.png'
import Stripe from 'react-stripe-checkout';
import {freeSongs} from './FreeSongs';

const Payment = ({type, price}) => {
    const styles = {
        modal: {
            position:'fixed',
            top:'0',
            left: '0',
            height: '100vh',
            width: '100vw',
            backdropFilter: 'blur(3px)'
        }
    }
    const tokenHandler = async (token, address) => {
        try {
            if(token.id) {
                const user = {
                    email: localStorage.getItem('id')
                }
                const res = await fetch('/subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                });
                const { message } = await res.json();
                console.log(message)
                alert('payment successful');
                localStorage.setItem('subscribe', true);
                freeSongs(type);
                window.location.replace('/home');
            }
        } catch (err) {
            console.log('payment fail')
        }
        
    }
    return (
        <div style={styles.modal}>
            <div style={{backgroundColor: '#fff', height: '40vh',width: '50vw', margin: '200px 450px', border:'2px solid #eee' }}>
                <div className='row' style={{margin: '30px'}}>
                    <div className="col-md-6" >
                        <img src={OnlyLogo} height="100" width="100"></img>
                    </div>
                    <div className="col-md-6">
                        <img src={Logo} height="100" width="400"></img>
                    </div>
                </div>
                <div style={{marginLeft:'14px', textAlign:'center'}}>
                    <h1>{type} Member</h1>
                    <h2 style={{color: '#f95838'}}>ENJOY</h2>
                    <p>Ad Less Music</p>
                </div>
                <Stripe
                stripeKey="pk_test_iMmLSAxXx0AxLBH8tRZwKx8I00LmaTH1BH"
                token={tokenHandler}
                shippingAddress="E-11 Casa grande"
                amount={price}
                name={'Google Play Subscription'}
                />
            </div>
        </div>
    )
}

export default Payment;