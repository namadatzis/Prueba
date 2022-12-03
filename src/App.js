import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Inicio from './components/Inicio'
import Mercados from './components/Mercados'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Inicio/>}/>
          <Route path={"/markets"} element={<Mercados/>}/>
          <Route path={"/markets/:market_id"} element={<Mercados/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
