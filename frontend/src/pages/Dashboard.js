import React, { useEffect, useState } from 'react';
import Blockchain from '../utils/Blockchain';

export const Dashboard = () =>{
  const [temperature, setTemperature] = useState('');
  const [ldr, setLDR] = useState('');
  const [humidity, setHumidity] = useState('');

  useEffect(() => {
      const blockchain = new Blockchain();

      blockchain.getData(0).then(data => {
        if(!data) return console.log('No data found');
        setTemperature(data[0].toString());
        setLDR(data[1].toString());
        setHumidity(data[2].toString());
      });
  }, []);
    return (
        <main className="c-grid__main">
          <h1 className='c-title'>
            Dashboard
          </h1>
          <div className="c-dashboard">
            <div className="c-dashboard__item">
              <h2 className="c-dashboard__title">
                Temperature
              </h2>
              <p className="c-dashboard__value">
              {temperature}°C
              </p>
            </div>
            <div className="c-dashboard__item">
              <h2 className="c-dashboard__title">
                Light Intensity
              </h2>
              <p className="c-dashboard__value">
              {ldr}%
              </p>
            </div>
            <div className="c-dashboard__item">
              <h2 className="c-dashboard__title">
                Humidity
              </h2>
              <p className="c-dashboard__value">
              {humidity}%
              </p>
            </div>
            <div className="c-dashboard__item u-grid-2">
              <h2 className="c-dashboard__title">
                Temperature
              </h2>
              <p className="c-dashboard__value">
                25°C
              </p>
            </div>
          </div>
        </main>
    )
}