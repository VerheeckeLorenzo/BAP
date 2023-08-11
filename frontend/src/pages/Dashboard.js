import React, { useEffect, useState } from 'react';
import Blockchain from '../utils/Blockchain';
import { LineChart } from '../utils/LineChart';

export const Dashboard = () =>{
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    const blockchain = new Blockchain();

    blockchain.getDataCount().then(dataCount => {
      const fetchData = async () => {
        const points = [];
        for (let i = 0; i < dataCount; i++) {
          const data = await blockchain.getData(i);
          if (data) {
            const temperature = data[0].toString();
            const ldr = data[1].toString();
            const humidity = data[2].toString();
            const timestamp = new Date(data[3].toString() * 1000).toString();
            
            points.push({ temperature, ldr, humidity, timestamp });
          }
        }
        setDataPoints(points);
      };

      fetchData();
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
              {dataPoints.length > 0 ? (
              <LineChart dataPoints={dataPoints} sensorType={'Temperature'}/>
                ) : (
                  <p>Loading data...</p>
                )}
            </div>
            <div className="c-dashboard__item">
              <h2 className="c-dashboard__title">
                Light Intensity
              </h2>
              {dataPoints.length > 0 ? (
              <LineChart dataPoints={dataPoints} sensorType={'Light Intensity'}/>
              ) : (
                <p>Loading data...</p>
              )}
            </div>
            <div className="c-dashboard__item">
              <h2 className="c-dashboard__title">
                Humidity
              </h2>
              {dataPoints.length > 0 ? (
              <LineChart dataPoints={dataPoints} sensorType={'Humidity'}/>
              ) : (
                <p>Loading data...</p>
              )}
            </div>
            <div className="c-dashboard__item u-grid-2">
              <h2 className="c-dashboard__title">
                Overview
              </h2>
              <p className="c-dashboard__value">
                Test
              </p>
            </div>
          </div>
        </main>
    )
}