import React, {useState} from 'react';
import FoodItems from './FoodList/FoodItems';
import Cart from '../Cart/Cart-sidebar/Cart';

const Home = ({ addCardHandler, data, addOne, minusOne, sidebar }) => {
  const {Dosa,
    Aapam,
    Chapathi,
    Idly,
    Pongal,
    Puri} = data;
  return (
    <div style={{overflowX: 'hidden', color: 'black'}}>
      <div style={{display:'block',height: '100vh', width: `${sidebar}%`, backgroundColor:'white', float:'right',color: 'white', zIndex: '11111111', borderLeft: '2px solid black'}}>
          <br/><br/><br/><br/><br/><br/><br/><br/>
          <h2 style={{color:'black', textAlign:'center'}}>Your Cart</h2>
          <Cart data={data} value={sidebar}/>
      </div>
      <h1>Indian Foodssss</h1>
      <div style={{zIndex:'-11111'}}>
        <FoodItems addCardHandler={addCardHandler} data={data} addOne={addOne} minusOne={minusOne}/>
      </div>
      <Cart data={data} />
    </div>
  );
};

export default Home;
 