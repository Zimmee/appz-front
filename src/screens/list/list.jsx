import React, { useEffect, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import PersonCard from '../../components/card';
import './list.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';

function List() {
  const user = useSelector((state) => state.user.user);
  const [patients, setPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    (async () => {
      try {
        if (!user) return
        setLoading(true)
        const response = await fetch(`http://localhost:5122/${user.role === 'Doctor' ? 'Patient' : 'Patron'}?` + new URLSearchParams({
          doctorId: user.userId,
          ...(searchQuery && { searchQuery })
        }), {
          method: "GET", headers: {
            'Content-Type': 'application/json'
          },
        })
        if (response.status === 404) setPatients([])
        if (response.status !== 200) return

        setPatients(await response.json())
        setLoading(false)
      } catch (error) {
        setLoading(false)
      } finally {
        setLoading(false)
      }
    })()
  }, [user, searchQuery])


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
          position: 'relative',
          marginBottom: '80px',
          marginTop: '80px',
          width: '410px',
        }}
      >
        <Form.Control style={{
          height: 55,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          maxWidth: '410px',
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 9,
          paddingBottom: 9,
          background: 'white',
          borderRadius: 6,
          border: '1px #DEE2E6 solid',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }} type="email" placeholder="Знайти пацінєта" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

        <img
          src={require('../../assets/search.png')}
          style={{ width: 16, height: 16, position: 'absolute', right: 16, top: 20 }}
        />
      </div>

      {loading && <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>}

      {(patients.length === 0 && !loading) && <div style={{ fontSize: 24, fontFamily: 'Inter', fontWeight: '600', color: '#212529', alignSelf: 'center' }}>Нічого не знайдено</div>}

      <div
        style={{
          justifyContent: 'center',
          marginBottom: '80px',
        }}
        className='grid-container'
      >
        {patients.map((item) => {
          return (
            <PersonCard
              id={item}
              name={item.name + ' ' + item.surname}
              subtitile={item.diagnose}
            />
          );
        })}

      </div>

      {patients.length ? <div
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
      </div> : <div />}
    </div>
  );
}

export default List;
