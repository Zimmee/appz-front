import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PersonCard = ({ name, subtitile, id }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: 410,
        padding: 24,
        background: 'white',
        borderRadius: 12,
        border: '1px #DEE2E6 solid',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 16,
        display: 'flex',
      }}
    >
      <div
        style={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: 8,
          display: 'flex',
        }}
      >
        <div
          style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            display: 'flex',
          }}
        >
          <div
            style={{
              color: '#212529',
              fontSize: 24,
              fontFamily: 'Inter',
              fontWeight: '600',
            }}
          >
            {name}
          </div>
        </div>
      </div>
      <div
        style={{
          alignSelf: 'stretch',
          height: 56,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          display: 'flex',
        }}
      >
        <div
          style={{
            alignSelf: 'stretch',
            color: '#6C757D',
            fontSize: 16,
            fontFamily: 'Inter',
            fontWeight: '400',
          }}
        >
          {subtitile}
        </div>
      </div>
      <Button
        style={{
          color: '#1AA179',
          backgroundColor: 'transparent',
          border: 'none',
          fontSize: 16,
          fontFamily: 'Inter',
          fontWeight: '400',
          padding: 0,
          marginTop: '12px',
        }}
        onClick={() => navigate('/patient/' + id.id, { state: id })}
      >
        Перейти
      </Button>
    </div>
  );
};

export default PersonCard;
