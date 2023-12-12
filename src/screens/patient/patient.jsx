import React, { useState } from 'react';
import { Button, Form, Table, Modal, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import PersonCard from '../../components/card';
import './patient.css';
import Card from 'react-bootstrap/Card';
import RightPart from './right';
import LeftPart from './left';

function Patient() {
  const [show, setShow] = useState(false);
  const [showInterval, setShowInterval] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleClose = () => setShow(false);
  const handleCloseInterval = () => setShowInterval(false);

  const readData = async () => {
    setShow(true);
    setProgress(0);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    //set timer for 5 seconds and update progress each render
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 300) {
          clearInterval(timer);
        }
        const diff = 5;
        return Math.min(oldProgress + diff, 300);
      });
    }, 100);
  };

  console.log(progress, progress - 100, progress - 200);

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
          marginBottom: '24px',
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
              anna bleyt
            </div>
          </div>
        </div>
      </div>

      <div className='containerr'>
        <div className='leftt'>
          <div className='cardd device'>
            <div style={{}}>
              <div
                style={{
                  fontSize: 28,
                  fontFamily: 'Inter',
                  fontWeight: '700',
                  wordWrap: 'break-word',
                }}
              >
                Xiaomi mi bend 5
              </div>
              <div
                style={{
                  color: '#1AA179',
                  fontSize: 16,
                  fontFamily: 'Inter',
                  fontWeight: '700',
                }}
              >
                Статус: Підключено
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
                display: 'inline-flex',
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
                Налаштування
              </div>
            </div>
          </div>
          <LeftPart
            onRead={readData}
            onInterval={() => setShowInterval(true)}
          />
        </div>
        <RightPart />
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Отримання даних</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              display: 'flex',
              gap: '2.5%',
              paddingBottom: '30px',
              paddingTop: '30px',
            }}
          >
            <div className='proggres'>
              <div
                style={{
                  color: 'black',
                  fontSize: 16,
                  fontFamily: 'Inter',
                  fontWeight: '600',
                  marginBottom: '8px',
                }}
              >
                Встановлення зв’язку
              </div>
              <ProgressBar now={progress} color='#17A2B8' className='first' />
            </div>
            <div className='proggres'>
              <div
                style={{
                  color: 'black',
                  fontSize: 16,
                  fontFamily: 'Inter',
                  fontWeight: '600',
                  marginBottom: '8px',
                }}
              >
                Зчитування даних
              </div>
              <ProgressBar
                now={progress - 100}
                color='#FFC107'
                className='second'
              />
            </div>
            <div className='proggres'>
              <div
                style={{
                  color: 'black',
                  fontSize: 16,
                  fontFamily: 'Inter',
                  fontWeight: '600',
                  marginBottom: '8px',
                }}
              >
                Отримання даних
              </div>
              <ProgressBar
                now={progress - 200}
                color='white'
                className='third'
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer />
      </Modal>

      <Modal
        show={showInterval}
        onHide={handleCloseInterval}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Інтервал зчитування даних</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseInterval}>
            Close
          </Button>
          <Button variant='primary' onClick={handleCloseInterval}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Patient;
