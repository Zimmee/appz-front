import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './home.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

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
        src={require(`../../assets/${user.role === "Doctor" ? "Card" : ""}ImgOverlay.png`)}
        style={{ width: '30%' }}
        onClick={() => navigate('/list')}
      />
      <img
        id='main-img'
        src={require(`../../assets/${user.role === "Doctor" ? "Card" : ""}ImgOverlay-1.png`)}
        style={{ width: '30%' }}
      />
      <img
        id='main-img'
        src={require(`../../assets/${user.role === "Doctor" ? "Card" : ""}ImgOverlay-2.png`)}
        style={{ width: '30%' }}
      />
    </div>
  );
}

export default Home;
