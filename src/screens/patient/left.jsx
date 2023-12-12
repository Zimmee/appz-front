import React, { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import PersonCard from '../../components/card';
import './patient.css';
import Card from 'react-bootstrap/Card';
import RightPart from './right';

const LeftPart = ({ onRead, onInterval }) => {
  return (
    <div
      className='cardd'
      style={{ display: 'flex', flexDirection: 'column', flex: 1 }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <div style={{ marginRight: 'auto' }}>
          <div
            style={{
              fontSize: 28,
              fontFamily: 'Inter',
              fontWeight: '700',
            }}
          >
            Актуальні фізіологічні дані
          </div>
          <div
            style={{
              fontSize: 16,
              fontFamily: 'Inter',
              fontWeight: '700',
            }}
          >
            (Беруться з інтервалом кожних 2 години)
          </div>
        </div>
        <div
          style={{
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 16,
            paddingBottom: 16,
            background: '#1AA179',
            borderRadius: 6,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 8,
          }}
          onClick={onRead}
        >
          <div
            style={{
              color: 'white',
              fontSize: 16,
              fontFamily: 'Inter',
              fontWeight: '600',
            }}
          >
            Отримати дані
          </div>
        </div>
        <div
          onClick={onInterval}
          style={{
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 16,
            paddingBottom: 16,
            background: '#1AA179',
            borderRadius: 6,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 8,
            marginLeft: '12px',
          }}
        >
          <div
            style={{
              color: 'white',
              fontSize: 16,
              fontFamily: 'Inter',
              fontWeight: '600',
            }}
          >
            Задати інтервал
          </div>
        </div>
      </div>

      <div
        style={{
          height: '1px',
          marginTop: '14px',
          marginBottom: '14px',
          backgroundColor: '#DEE2E6',
        }}
      />
      <Table striped hover variant='default' style={{ flex: 1 }}>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Пульс</th>
            <th>Тиск</th>
            <th>Температура</th>
            <th>Кисень</th>
            <th>Сон</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>{' '}
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default LeftPart;
