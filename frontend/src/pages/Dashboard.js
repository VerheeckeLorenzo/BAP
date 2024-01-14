import React, { useEffect, useState } from 'react';
import Blockchain from '../utils/classes/Blockchain';
import { LineChart } from '../utils/LineChart';

export const Dashboard = () =>{
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    const blockchain = new Blockchain();
    
    const fetchDataPoints = async () => {
        const dataCount = await blockchain.getDataCount();
        const points = [];
        console.log(dataCount);
        for (let i = 0; i < dataCount; i++) {
            const data = await blockchain.getData(i);
            if (data) {
              console.log(data);
                points.push(data);
            }
        }

        setDataPoints(points);
    };

    fetchDataPoints();
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
                About ChainGuard
              </h2>
              <p className="c-dashboard__value">
                ChainGuard is an innovative blockchain IoT application that empowers businesses to track, monitor, and ensure the integrity of their cargo shipments throughout the entire supply chain. 

Leveraging the transparency and immutability of blockchain, combined with the real-time data collection capabilities of IoT devices, ChainGuard offers an unparalleled solution to address the challenges of cargo tracking and monitoring.

- Lorenzo Verheecke
              </p>
            </div>
          </div>
        </main>
    )
}