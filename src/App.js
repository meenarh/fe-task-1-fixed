import { Routes, Route } from 'react-router-dom';
import './App.css';
import Billing from './Billing';
import Home from './Home';
import Confirm from './Confirm';
import Success from './Success';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/billing" element={<Billing/>}></Route>
        <Route path="/confirm" element={<Confirm/>}></Route>
        <Route path="/success" element={<Success/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
