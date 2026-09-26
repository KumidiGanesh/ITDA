import React from 'react'
import Reddy from './Navbar/Reddy.jsx'
import Navbar from './Navbar/Navbar.jsx'
import GrandFather from './Props/GrandFather.jsx'
import Counter from './useStateHook/Counter.jsx'
import Password from './useStateHook/Password.jsx'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Home.jsx'
import Registration from './Form/Registration.jsx'


const App = () => {
  return (
    <div>


<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/register' element={<Registration/>}/>
  <Route path='/password' element={ <Password/>}/>
  <Route path='/navbar'   element={<Navbar/>}/>
  <Route path='/counter/count'  element={<Counter/>}/>
  <Route path='/props'  element={<GrandFather/>}/>
</Routes>
</BrowserRouter>
    </div>
  )
}

export default App
