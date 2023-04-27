

import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Login from './components/login';
import Dasboard from './components/dasboard';
export const url= 'https://localhost:8000'  
//export const url = 'https://b43wdt-be-m9ac.onrender.com'



function App() {
  return <>
  <BrowserRouter>
    <Routes>

        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dasboard/>}/>
        <Route path='*' element={<Navigate to ='/login'/>}/>

     </Routes>
  </BrowserRouter>
  </>

}

export default App;
