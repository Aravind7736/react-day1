import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Registertion from './components/Registertion';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
     <Navbar/>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Registertion/>}/>
     </Routes>
     {/*<Login/>
     <Registertion/>*/}

    </div>
  );
}

export default App;
