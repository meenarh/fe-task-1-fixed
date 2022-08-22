import { Routes, Route } from 'react-router-dom';
import './App.css';
import Billing from './Billing';
import Home from './Home';
import Confirm from './Confirm';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/billing" element={<Billing/>}></Route>
        <Route path="/confirm" element={<Confirm/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
