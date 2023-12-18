import React, { useEffect, useState } from 'react';
import { Button, Form, Table, Modal, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import PersonCard from '../../components/card';
import './patient.css';
import Card from 'react-bootstrap/Card';
import RightPart from './right';
import LeftPart from './left';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';
import TimePicker from 'react-bootstrap-time-picker';



function Patient() {
  const [show, setShow] = useState(false);
  const [showInterval, setShowInterval] = useState(false);
  const [progress, setProgress] = useState(0);
  let { id } = useParams();
  const [physical, setPhysical] = useState([]);
  const { state } = useLocation();
  const user = useSelector((state) => state.user.user);
  const [readDataState, setReadDataState] = useState('reading');
  const [interval, setIntervalBLEAT] = useState();
  const [time, setTime] = useState();

  const handleClose = () => {
    setReadDataState('reading');
    read()
    return setShow(false);
  };
  const handleCloseInterval = () => setShowInterval(false);

  const read = (async () => {
    if (!id) return

    const response = await fetch('http://localhost:5122/Data/patients/physical/' + id, {
      method: "GET", headers: {
        'Content-Type': 'application/json'
      },
    })
    if (response.status === 404) setPhysical([])
    if (response.status !== 200) return


    setPhysical(await response.json())
  })

  const setIntervall = (async () => {
    if (!id) return

    var today = new Date();

    const hours = Math.floor(time / 3600); // => 4 => the times 3 fits into 13  
    const minutes = (time % 3600) / 60;

    var myToday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), hours + 2, minutes, 0);

    console.log(myToday)

    const response = await fetch(`http://localhost:5122/Patient?patientId=${id}&interval=${interval}&startTime=${myToday.toJSON().slice(0, 19).replace('T', ' ')}`, {
      method: "PUT", headers: {
        'Content-Type': 'application/json'
      },
    })
    if (response.status !== 200) handleCloseInterval()


    // setPhysical(await response.json())
  })

  useEffect(() => {
    read()
  }, [id])

  const readData = async () => {
    setShow(true);
    setProgress(0);
    const response = await fetch('http://localhost:5122/Data?patientID=' + id, {
      method: "POST", headers: {
        'Content-Type': 'application/json'
      },
    })


    //set timer for 5 seconds and update progress each render
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 300) {
          setReadDataState(response.status === 200 ? 'success' : 'error')
          clearInterval(timer);
        }
        const diff = 5;
        return Math.min(oldProgress + diff, 300);
      });
    }, 300);
  };

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
              {state.name + " " + state.surname}
            </div>
            <div
              style={{
                fontSize: 28,
                fontFamily: 'Inter',
                fontWeight: '700',
              }}
            >
              {moment(state.dateOfBirth).format('DD.MM.YYYY')}
            </div>
          </div>
        </div>
      </div>

      <div className='containerr'>
        <div className='leftt'>
          {user.role === 'Patron' && <div className='cardd device'>
            <div style={{}}>
              <div
                style={{
                  fontSize: 28,
                  fontFamily: 'Inter',
                  fontWeight: '700',
                  wordWrap: 'break-word',
                }}
              >
                {state.deviceModel}
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
          </div>}
          <LeftPart
            data={physical}
            onRead={user.role === "Doctor" ? readData : null}
            onInterval={() => setShowInterval(true)}
          />
        </div>
        <RightPart patient={state} />
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
          {readDataState === 'error' ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={require('../../assets/bullseye.png')} width={80} height={80} />
              <div style={{ textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', marginTop: '11px', marginBottom: '11px' }}>Невдалося встановлення з’єднання з девайсом пацієнта</div>
              <div style={{ textAlign: 'center', color: '#A2ABB5', fontSize: 15, fontFamily: 'Inter', fontWeight: '500', }}>Зв’яжіться з патроном пацієнта для вирішення проблеми підключення</div>
            </div>
          ) : <div />}

          {readDataState === 'success' ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={require('../../assets/check-circle.png')} width={80} height={80} />
              <div style={{ textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', marginTop: '11px', marginBottom: '11px' }}>Дані успішно отримано</div>
              <div style={{ textAlign: 'center', color: '#A2ABB5', fontSize: 15, fontFamily: 'Inter', fontWeight: '500', }}>Орієнтований час оновлення даних 2хв</div>
            </div>
          ) : <div />}

          {readDataState === 'reading' ? <div
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
          </div> : <div />}
        </Modal.Body>
        <Modal.Footer >
          {readDataState === 'error' ? (
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Button variant='secondary' onClick={handleClose} style={{ marginRight: '12px' }}>
                Закрити
              </Button>
              <Button variant='danger' onClick={handleClose}>
                Надіслати повідомлення про помилку
              </Button>
            </div>
          ) : <div />}

          {readDataState === 'success' ? (
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

              <Button variant='success' onClick={handleClose}>
                Переглянути
              </Button>
            </div>
          ) : <div />}
        </Modal.Footer >
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
        <Modal.Body><div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400' }}>Інтервал</div>
            <Form.Select value={interval} onChange={(e) => setIntervalBLEAT(e.target.value)}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => <option>{item}</option>)}
            </Form.Select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400' }}>Початковий час</div>
            <TimePicker start="01:00" end="24:00" step={1} format={24} value={time} onChange={(e) => setTime(e)} />

          </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Button variant='secondary' onClick={handleCloseInterval} style={{ marginRight: '12px' }}>
              Закрити
            </Button>
            <Button variant='success' onClick={setIntervall}>
              Зберегти зміни
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Patient;
