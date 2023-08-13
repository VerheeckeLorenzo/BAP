import { useState, useEffect } from 'react';
import Blockchain from '../utils/classes/Blockchain';
import { eventTypes } from '../utils/constants/Events';

export const EventLog = () =>{
    const [events, setEvents] = useState([]);
  
  useEffect(() => {
    const blockchain = new Blockchain();
    
    const fetchEvents = async () => {
        const allEvents = [];

        for (let i = 0; i < eventTypes.length; i++) {
            const eventObjects = await blockchain.getEventData(eventTypes[i]);
            allEvents.push(...eventObjects);
        }

        setEvents(allEvents);
    };

    fetchEvents();
  }, []);

    return (
        <main className="c-grid__main c-events">
            <h1 className='c-events__title c-title'>
                Event Log
            </h1>
            <div className="c-events__table-container">
              <table className="c-events__table">
                <thead>
                  <tr>
                    <th>Order</th>
                    <th>Event Name</th>
                    <th>Date</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                {events.length > 0 ? (
                  events.map((event, index) => (
                    <>
                      <tr className="c-events__table-row" key={index}>
                          <td>BUE606</td>
                          <td>{event.getFormattedEventType()}</td>
                          <td>{event.getFormattedDate()}</td>
                          <td>{event.getFormattedValue()}</td>
                      </tr>
                      <tr className="c-events__table-row" key={index*2}>
                        <td>BUE606</td>
                        <td>{event.getFormattedEventType()}</td>
                        <td>{event.getFormattedDate()}</td>
                        <td>{event.getFormattedValue()}</td>
                    </tr>
                    </>
                  ))
                  ) : (
                      <tr>
                          <td>
                          Loading data...
                          </td>
                      </tr>
                  )}
                </tbody>
              </table>
            </div>
        </main>
    );
}