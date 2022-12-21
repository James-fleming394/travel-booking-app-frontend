import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Hotel from './pages/Hotel';
import List from './pages/List';
import Login from './pages/Login';


function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels' element={<List/>}/>
        {/* <Route path='/hotels/:id' element={<Hotel/>}/>
        <Route path='/login' element={<Login/>}/> */}
      </Routes>
  );
}

export default App;
