import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Dashboard, EventLog, Tracker } from './pages/collection';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';

const App = () => {

  return (
      <div className="c-grid">
        <Header/>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/tracker" element={<Tracker/>} />
          <Route path="/events" element={<EventLog/>} />
        </Routes>
      </div>
  );
}

export default App;
