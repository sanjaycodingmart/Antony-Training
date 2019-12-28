import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({value, cartHandler}) => {
  const {Dosa, Aapam, Chapathi,Idly,Pongal,Puri} = value;
  const style = {
    navbar: {
      width: '100%',
      height: '80px',
      backgroundColor: 'white',
      top: '0',
      marginTop: '-20px',
      position: 'fixed',
      color: '#000',
      fontSize: '18px',
      boxShadow: '1px 1px 10px 10px #cecece'
    },
    item: {
      listStyle: 'none',
      display: 'inline',
      padding: '10px',
      marginTop: '20px'
    }
  };
  const check = nos => nos > 0 ? 1 : 0
  return (
    <nav style={style.navbar}>
      <h2 style={{ paddingTop: '13px', paddingLeft: '15px' }}>Food Cart</h2>
      <ul
        className="nav-items"
        style={{
          display: 'inline',
          float: 'right',
          padding: '20px',
          marginTop: '-60px'
        }}
      >
        <li style={style.item}>
          <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
            Home
          </Link>{' '}
        </li>
        {/* <li style={style.item}>
          <Link to="/cart" style={{ textDecoration: 'none', color: '#000' }}>
            Cart ({check(Dosa)+check(Aapam)+check(Chapathi)+check(Idly)+check(Pongal)+check(Puri)})
          </Link>{' '}
        </li> */}
        <li style={style.item}>
            <a style={{ textDecoration: 'none', color: '#000',cursor: 'pointer' }} onClick={cartHandler}>
              Cart({check(Dosa)+check(Aapam)+check(Chapathi)+check(Idly)+check(Pongal)+check(Puri)})
            </a>
        </li>
        <li style={style.item}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
