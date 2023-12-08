import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div style={{display:'flex', flexDirection:'row', height:'100vh'}}>
      <div style={{ width:'60%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}><h1 style={{marginTop:'auto',marginBottom:'50px', fontSize:96, fontFamily:'Montserrat', fontWeight:800, color:'#13795B'}}>СВЯЖ</h1><img style={{width:'55%'}} src={require('../../assets/login.png')}/></div>
      
      <div style={{justifyContent:'center', alignItems:'center', display:'flex', flexDirection:'column', backgroundColor:'#1AA179', flex:1}}>
        <h1 style={{marginBottom:'50px', fontSize:'40px', fontWeight:700, color:'white'}}>Вхід</h1>
        <Form style={{width:'60%'}}>
          <Form.Group controlId="number" style={{display:'flex', flexDirection:'column'}}>
            <Form.Label style={{fontSize:'24px',marginBottom:0, fontWeight:800, color:'white'}}>Номер телефону</Form.Label>
            <Form.Control type='phone' style={{marginTop:'13px', marginBottom:'13px', fontSize:16}} placeholder="+380 (XXX) XXX-XXXX" />
          </Form.Group>
          <Form.Group controlId="password" style={{display:'flex', flexDirection:'column'}}>
            <Form.Label style={{fontSize:'24px',marginBottom:0, fontWeight:800, color:'white'}}>Пароль</Form.Label>
            <Form.Control type="password" style={{marginTop:'13px', marginBottom:'50px', fontSize:16}} placeholder="*****" /></Form.Group>
        </Form>
        <Button type="submit" style={{backgroundColor:'white', color:'#13795B', fontSize:16, fontWeight:600}}>Увійти</Button>
      </div>
    </div>
  );
}

export default Login;
