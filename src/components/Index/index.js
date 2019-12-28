import React from 'react';
import Image from '../../Images/Italian.jpg';
import Chinese from '../../Images/chinese.jpg';
import Indian from '../../Images/indian.jpeg';
import BackGrnd from '../../Images/back.png'
import { Link } from 'react-router-dom';
import Explore from './Explore';

const index = () => {
  const style = {
    pTag: {
      fontSize: '18px',
      fontWeight: '700'
    },
    img: {
      borderRadius: '6px'
    }
  };
  return (
    <div>
      <img
        src={BackGrnd}
        alt=""
        style={{ height: '100vh', width: '100%', zIndex: '1' }}
      />
      <div
        style={{
          height: '80vh',
          width: '100%'
        }}
      >
        <h1 style={{ paddingTop: '150px', textAlign: 'center' }}>Food Items</h1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto auto auto',
            paddingLeft: '50px',
            marginTop: '30px'
          }}
        >
          <div>
            <img
              src={Chinese}
              alt=""
              height="250"
              width="400"
              style={style.img}
            />
            <p style={style.pTag}>Chinese</p>
          </div>
          <div>
            <Link to="/indian-food">
              <img
                src={Indian}
                alt=""
                height="250"
                width="400"
                style={style.img}
              />
            </Link>
            <p style={style.pTag}>Indian</p>
          </div>
          <div>
            <img
              src={Image}
              alt=""
              height="250"
              width="400"
              style={style.img}
            />
            <p style={style.pTag}>Italian</p>
          </div>
        </div>
      </div>
      <div>
      </div>
      <Explore />
    </div>
  );
};

export default index;
