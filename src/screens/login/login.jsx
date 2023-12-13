import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../core/actions/appslice';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false)

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChangee = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5122/api/Auth/login`, {
      method: "POST", headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify({
        "phoneNumber": username,
        "password": password
      })
    })

    const json = await response.json()
    const res = await dispatch(login(username, password))

    if (response.status === 200) {
      navigate('/home')
    } else {
      setError('Невірний логін або пароль')
    }
  }


  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      <div
        id='left-part'
        style={{
          width: '60%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <h1
          style={{
            marginTop: 'auto',
            marginBottom: '50px',
            fontSize: 96,
            fontFamily: 'Montserrat',
            fontWeight: 800,
            color: '#13795B',
          }}
        >
          СВЯЖ
        </h1>
        <div style={{ flex: 1, display: 'flex', height: '60%' }}>
          <img
            style={{ objectFit: 'fill', maxHeight: '100%', height: 'auto' }}
            src={require('../../assets/login.png')}
          />
        </div>
      </div>

      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#1AA179',
          flex: 1,
        }}
      >
        <h1
          style={{
            marginBottom: '50px',
            fontSize: '40px',
            fontWeight: 700,
            color: 'white',
          }}
        >
          Вхід
        </h1>
        <Form style={{ width: '60%' }} onSubmit={handleSubmit}>
          <Form.Group
            controlId='number'
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <Form.Label
              style={{
                fontSize: '24px',
                marginBottom: 0,
                fontWeight: 800,
                color: 'white',
              }}
            >
              Номер телефону
            </Form.Label>
            <Form.Control
              type='phone'
              value={username}
              onChange={handleUsernameChange}
              style={{ marginTop: '13px', marginBottom: '13px', fontSize: 16 }}
              placeholder='+380 (XXX) XXX-XXXX'
            />
          </Form.Group>
          <Form.Group
            controlId='password'
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <Form.Label
              style={{
                fontSize: '24px',
                marginBottom: 0,
                fontWeight: 800,
                color: 'white',
              }}
            >
              Пароль
            </Form.Label>
            <Form.Control
              type='password'
              value={password}
              onChange={handlePasswordChangee}
              style={{ marginTop: '13px', marginBottom: error ? '8px' : '50px', fontSize: 16 }}
              placeholder='*****'
            />
            <Form.Label
              style={{
                fontSize: '16px',
                marginBottom: 0,
                fontWeight: 600,
                color: '#E35D6A',
                marginBottom: '50px'
              }}
            >
              {error}
            </Form.Label>
          </Form.Group>
        </Form>
        <Button
          type='submit'
          onClick={handleSubmit}
          style={{
            backgroundColor: 'white',
            color: '#13795B',
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          Увійти
        </Button>
      </div>
    </div>
  );
}

export default Login;
