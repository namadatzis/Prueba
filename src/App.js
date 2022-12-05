import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Inicio from './components/Inicio'
import Mercado from './components/Mercado'
import Mercados from './components/Mercados'
import Estadisticas from './components/Estadisticas'
import Trades from './components/Trades'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Inicio/>}/>
          <Route path={"/markets"} element={<Mercados/>}/>
          <Route path={"/markets/:market_id"} element={<Mercado/>}/>
          <Route path={"/markets/:market_id/trades"} element={<Trades/>}/>
          <Route path={"/stadistics"} element={<Estadisticas/>}/>
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
