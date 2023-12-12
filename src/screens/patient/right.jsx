import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './patient.css';

const RightPart = () => {
  return (
    <div className='strategy cardd'>
      <div
        style={{
          fontSize: 28,
          fontFamily: 'Inter',
          fontWeight: '700',
        }}
      >
        Діагноз: Хронічна серцева недостатність
      </div>
      <div
        style={{
          height: '1px',
          marginTop: '14px',
          marginBottom: '14px',
          backgroundColor: '#DEE2E6',
        }}
      />
      <div
        style={{
          textAlign: 'justify',
          color: 'black',
          fontSize: 16,
          fontFamily: 'Inter',
          fontWeight: '400',
        }}
      >
        Хронічна серцева недостатність - це стан, коли серце не здатне
        виконувати свою основну функцію - доставку достатньої кількості крові до
        органів та тканин. Зазвичай відбувається зниження сили скорочення серця
        або збільшення обсягу шлуночків. Це може призводити до втоми, задишки
        навіть при невеликому фізичному навантаженні та набряків ніг. Лікування
        включає фармакотерапію, регулювання дієти та фізичних навантажень, а у
        важких випадках може знадобитися інтервенція хірургів. Важливо
        спостерігати за симптомами та зберігати активний контакт з лікарем для
        ефективного контролю стану хворого.
      </div>
      <div
        style={{
          height: '1px',
          marginTop: '14px',
          marginBottom: '14px',
          backgroundColor: '#DEE2E6',
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px',
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontFamily: 'Inter',
            fontWeight: '700',
          }}
        >
          Стратегія лікування
        </div>
        <div
          style={{
            color: '#1AA179',
            fontSize: 16,
            fontFamily: 'Inter',
            fontWeight: '400',
          }}
        >
          Перейти до стратегії лікування
        </div>
      </div>
      <div
        style={{
          textAlign: 'justify',
          color: 'black',
          fontSize: 16,
          fontFamily: 'Inter',
          fontWeight: '400',
        }}
      >
        1. Ліки, такі як інгібітори АПФ, бета-блокатори, діуретики тощо,
        допомагають знижувати навантаження на серце, контролювати тиск у судинах
        та видаляти надлишок рідини з організму.
        <br />
        2. Дієта і обмеження рідини: Зменшення споживання натрію може допомогти
        знизити набряки та надлишок рідини в організмі.
        <br />
        3. Фізична активність: Контрольована фізична активність, затверджена
        лікарем, може покращити стан серця та загальний стан хворого.
        <br />
        4. Моніторинг: Регулярний моніторинг за допомогою тестів та обстежень
        для виявлення змін у стані серця та ефективності лікування.
        <br />
        5. Хірургічні методи: У важких випадках може бути необхідна хірургічна
        корекція, наприклад, пересадка серця або імплантація пристроїв для
        підтримки роботи серця.
      </div>
      <div
        style={{
          height: '1px',
          marginTop: '14px',
          marginBottom: '14px',
          backgroundColor: '#DEE2E6',
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: '24px',
        }}
      >
        <div
          style={{
            fontSize: 16,
            fontFamily: 'Inter',
            fontWeight: '700',
          }}
        >
          Дата становлення на облік: 10.10.2023
        </div>
        <div
          style={{
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 16,
            paddingBottom: 16,
            background: '#E35D6A',
            borderRadius: 6,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 8,
            marginLeft: 'auto',
            marginRight: '12px',
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
            Виписати пацієнта
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
            Звя’зок з патроном
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPart;
