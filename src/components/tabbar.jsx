import React from 'react';
import './tabbar.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TabBar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  function handleClick() {
    navigate('/login');
  }

  return (
    <div
      style={{
        width: '100vw',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: user.role === 'Doctor' ? '#1AA179' : '#0AA2C0',
      }}
    >
      <div
        style={{
          marginLeft: '50px',
          marginRight: 'auto',
          fontSize: 36,
          fontFamily: 'Montserrat',
          fontWeight: 800,
          color: 'white',
        }}
      >
        СВЯЖ
      </div>
      <div
        style={{ marginRight: '20px', display: 'flex', alignItems: 'center' }}
      >
        <div
          id='tabbar-text'
          style={{
            marginRight: '15px',
            fontSize: 20,
            fontFamily: 'Inter',
            fontWeight: 500,
            color: 'white',
          }}
        >
          Особистий кабінет
        </div>
        <img
          src={require('../assets/person.png')}
          style={{ marginRight: '65px' }}
          width={48}
          height={48}
          alt='Person Icon'
        />
        <img
          src={require('../assets/arrow-bar-right.png')}
          style={{ marginRight: '15px' }}
          width={36}
          on
          onClick={handleClick}
          height={36}
          alt='Person Icon'
        />
      </div>
    </div>
  );
};

export default TabBar;
