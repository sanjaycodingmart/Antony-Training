import React from 'react'

const CartItem = ({title, value, price}) => {
    console.log(title, value, price);
    if(value !== 0){
        return (
            <div style={{color:'black', border:'2px solid #ccc', padding:'10px', margin: '3px'}}>
                <p>
                    {title
                    }<span style={{float:'right'}}>{value} x {price}</span>
                </p>
            </div>
        )
    }
    return null;
}

export default CartItem;