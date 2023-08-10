import {ReactComponent as DashboardIcon} from '../assets/Dashboard.svg';
import {ReactComponent as EventLogIcon} from '../assets/Events.svg';
import {ReactComponent as TrackerIcon} from '../assets/Tracker.svg';
import {useLocation } from 'react-router-dom';

const SelectedNavItem = () =>{
    return(
        <div className="c-grid__aside-selected">
        </div>
    )
};

export const Navigation = () => {
    const location = useLocation(); // Get the current location

    return (
        <aside className="c-grid__aside">
          <ul>
            <li>
              <a href="/" className={location.pathname==='/' ? "selected" : ""}>
                {location.pathname==='/' ? <SelectedNavItem/> : null}
                <DashboardIcon /> Dashboard
              </a>
            </li>
            <li>
              <a href="/tracker" className={location.pathname==='/tracker' ? "selected" : ""}>
                {location.pathname==='/tracker' ? <SelectedNavItem/> : null}
                <TrackerIcon/>
                Tracker
              </a>
            </li>
            <li>
              <a href="/events" className={location.pathname==='/events' ? "selected" : ""}>
                {location.pathname==='/events' ? <SelectedNavItem/> : null}
                <EventLogIcon/>Event Log
              </a>
            </li>
          </ul>
        </aside>
    )
}