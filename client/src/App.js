import {Routes, Route} from 'react-router-dom';

import './App.css';
import Home from './views/home/home';
import Detail from './views/detail/detail';
import LandingPage from './views/landing/landing';
import Form from './views/form/form';



function App() {
  /* const [input, setInput] = useState(""); */
  /* const [countries, setCountries] = useState([]) */

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
