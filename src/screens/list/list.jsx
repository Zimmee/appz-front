import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import PersonCard from '../../components/card';
import './list.css';
import { useNavigate } from 'react-router-dom';

function List() {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'start',
        alignItems: 'center',
        paddingBottom: '100px',
      }}
    >
      <div
        style={{
          width: '100%',
          height: 112,
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.10)',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          display: 'inline-flex',
        }}
      >
        <div
          style={{
            alignSelf: 'stretch',
            height: 112,
            paddingTop: 32,
            paddingBottom: 32,
            background: 'white',
            borderBottom: '1px #DEE2E6 dotted',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <div
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <div
              style={{
                fontSize: 40,
                fontFamily: 'Inter',
                fontWeight: '700',
              }}
            >
              Список пацієнтів
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          height: 55,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          maxWidth: '410px',
          paddingLeft: 16,
          paddingRight: 16,
          marginBottom: '80px',
          marginTop: '80px',
          paddingTop: 9,
          paddingBottom: 9,
          background: 'white',
          borderRadius: 6,
          border: '1px #DEE2E6 solid',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            color: '#ADB5BD',
            fontSize: 16,
            fontFamily: 'Inter',
            fontWeight: '400',
            marginRight: 'auto',
          }}
        >
          Знайти пацінєта
        </div>
        <img
          src={require('../../assets/search.png')}
          style={{ width: 16, height: 16 }}
        />
      </div>

      <div
        style={{
          justifyContent: 'center',
          marginBottom: '80px',
        }}
        className='grid-container'
      >
        <PersonCard
          name={'Анна Ковальчук'}
          subtitile={
            "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
        />
        <PersonCard
          name={'Анна Ковальчук'}
          subtitile={
            "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
        />
        <PersonCard
          name={'Анна Ковальчук'}
          subtitile={
            "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
        />
        <PersonCard
          name={'Анна Ковальчук'}
          subtitile={
            "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
        />
        <PersonCard
          name={'Анна Ковальчук'}
          subtitile={
            "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
        />
        <PersonCard
          name={'Анна Ковальчук'}
          subtitile={
            "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
        />
      </div>

      <div
        style={{
          width: 284,
          height: 40,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: 4,
          display: 'inline-flex',
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            backgroundColor: 'white',
            borderRadius: 4,
            border: '1px #E9ECEF solid',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <img
            src={require('../../assets/chevron-left.png')}
            width={16}
            height={16}
          />
        </div>
        {[1, 2, 3, 4].map((item) => {
          return (
            <div
              style={{
                width: 40,
                height: 40,
                backgroundColor: item === 1 ? '#1AA179' : 'white',
                borderRadius: 4,
                border: item === 1 ? 'none' : '1px #E9ECEF solid',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                  color: item === 1 ? 'white' : '#6C757D',
                  fontSize: 16,
                  fontFamily: 'Inter',
                  fontWeight: '400',
                }}
              >
                {item}
              </div>
            </div>
          );
        })}
        <div
          style={{
            width: 40,
            height: 40,
            backgroundColor: 'white',
            borderRadius: 4,
            border: '1px #E9ECEF solid',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <img
            src={require('../../assets/chevron-left.png')}
            width={16}
            height={16}
            style={{ transform: 'rotate(180deg)' }}
          />
        </div>
      </div>
    </div>
  );
}

export default List;
