import React from 'react'
import {price} from '../price';
import CartItem from '../Cart-sidebar/CartItem';
import Stripe from 'react-stripe-checkout';

const Cart = ({data, value}) => {

    let toShow = [], ind=0, total=0;
    if(value === 30){
        for(let property in data){
            if(data.hasOwnProperty(property)){
                // toShow.push({[property]: data[property]});
                toShow = [...toShow, property, data[property]];
            }
        }
        for(let i=0;i<toShow.length-2;i+=2)
        {
            toShow[ind++] = <CartItem title={toShow[i]} key={ind} value={toShow[i+1]} price={price[toShow[i]]} />
            if(toShow[i+1]!==0){
                total+=toShow[i+1]*price[toShow[i]];
            }
        }
        toShow = toShow.splice(0,ind);
        console.log(toShow);    
    }

    const tokenHandler = (token, address) => console.log(token,address)

    return (
        <div>
            {toShow.map(item => item)}
            <p style={{color:'black', float: 'left', padding: '10px', paddingRight: '20px'}}>Total : {total}</p>
            <div style={{marginTop: '18px', float: 'right'}}>
                {total!== 0 ? (<Stripe
            stripeKey="pk_test_iMmLSAxXx0AxLBH8tRZwKx8I00LmaTH1BH"
            token={tokenHandler}
            shippingAddress="E-11 Casa grande"
            amount={total}
            name={'Anto'}
            />):null}
            </div>
            
        </div>
    )
}

export default Cart;