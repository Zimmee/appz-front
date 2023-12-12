import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div
      id='main'
      style={{
        paddingTop: 'auto',
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'center',
        gap: '3%',
        alignItems: 'center',
        paddingBottom: '100px',
      }}
    >
      <img
        id='main-img'
        src={require('../../assets/CardImgOverlay.png')}
        style={{ width: '30%' }}
        onClick={() => navigate('/list')}
      />
      <img
        id='main-img'
        src={require('../../assets/CardImgOverlay-1.png')}
        style={{ width: '30%' }}
      />
      <img
        id='main-img'
        src={require('../../assets/CardImgOverlay-2.png')}
        style={{ width: '30%' }}
      />
    </div>
  );
}

export default Home;
