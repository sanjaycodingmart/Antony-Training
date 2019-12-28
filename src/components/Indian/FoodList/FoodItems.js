import React from 'react';
import Dosa from '../../../Images/Food/indian/dosa.jpeg';
import Aapam from '../../../Images/Food/indian/aapam.jpg';
import Chapathi from '../../../Images/Food/indian/chapathi.jpg';
import Idly from '../../../Images/Food/indian/idly.jpg';
import Pongal from '../../../Images/Food/indian/pongal.jpg';
import Puri from '../../../Images/Food/indian/puri.jpeg';
import FoodItem from './FoodItem';

const FoodItems = ({ addCardHandler, data, addOne, minusOne }) => {
  const foods = [
    { title: 'Dosa', img: Dosa },
    { title: 'Aapam', img: Aapam },
    { title: 'Chapathi', img: Chapathi },
    { title: 'Idly', img: Idly },
    { title: 'Pongal', img: Pongal },
    { title: 'Puri', img: Puri }
  ];
  const show = [];
  for (let i = 0; i < foods.length; i += 3) {
    show.push(
      <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
        <FoodItem
          title={foods[i].title}
          image={foods[i].img}
          addCardHandler={addCardHandler}
          val={data[foods[i].title]}
          addOne={addOne}
          minusOne={minusOne}
        />
        <FoodItem
          title={foods[i + 1].title}
          image={foods[i + 1].img}
          addCardHandler={addCardHandler}
          val={data[foods[i + 1].title]}
          addOne={addOne}
          minusOne={minusOne}
        />
        <FoodItem
          title={foods[i + 2].title}
          image={foods[i + 2].img}
          addCardHandler={addCardHandler}
          val={data[foods[i + 2].title]}
          addOne={addOne}
          minusOne={minusOne}
        />
      </div>
    );
  }
  return (
    <div>
      {/* {foods.map(food => <FoodItem title={food.title} image = {food.img} addCardHandler={addCardHandler}/>)}
       */}
      {show}
    </div>
  );
};

export default FoodItems;
