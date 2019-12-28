import React from 'react';

const FoodItem = ({ title, image, addCardHandler, val, addOne, minusOne }) => {
  const style = {
    card: {
      padding: '10px',
      paddingLeft: '40px',
      border: '1px solid #ccc',
      margin: '10px',
      boxShadow: '5px 7px #eee'
    },
    input: {
      width: '12px',
      padding: '3px 15px',
      margin: '0px 7px'
    },
    minus: {
      backgroundColor: '#fff',
      color: 'red',
      padding: '3px 10px',
      fontWeight: '900',
      fontSize: '12px',
      borderRadius: '3px',
      border: '1px solid red'
    },
    add: {
      backgroundColor: '#fff',
      color: 'green',
      padding: '3px 10px',
      fontWeight: '900',
      fontSize: '12px',
      borderRadius: '3px',
      border: '1px solid green'
    }
  };

  // const addOne = () => {
  //   setValue(value + 1);
  //   setVisible('visible');
  // };
  // const removeOne = () => {
  //   if (value > 0) {
  //     setValue(value - 1);
  //   }
  //   if (value < 2) {
  //     setVisible('hidden');
  //   }
  // };
  const showAlert = value =>
    value === 0 ? alert('Add something to cart') : null;
  return (
    <div style={style.card}>
      <img
        src={image}
        alt=""
        height="200"
        width="350"
        style={{ borderRadius: '6px' }}
      />
      <p style={{ fontSize: '20px', fontWeight: '700' }}>{title}</p>
      <div>
        <button
          onClick={() => {
            minusOne(title, val - 1);
          }}
          style={style.minus}
        >
          -
        </button>
        <input type="text" value={val} style={style.input} />
        <button
          onClick={() => {
            addOne(title, val + 1);
          }}
          style={style.add}
        >
          +
        </button>
        <button
          style={{
            visibility: 'visible',
            marginLeft: '90px',
            padding: '5px 15px',
            color: 'orange',
            backgroundColor: '#fff',
            borderRadius: '3px',
            border: '1px solid orange'
          }}
          onClick={() => {
            addCardHandler(title, val);
            showAlert(val);
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
