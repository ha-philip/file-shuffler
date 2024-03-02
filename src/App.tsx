import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import OnlyLogin from './Pages/OnlyLogin';
import Help from './Pages/Help';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contents' element={<OnlyLogin/>}/>
        <Route path='/help' element={<Help/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
