import React from 'react'
import { lazy, Suspense } from "react";
import Reddy from './Navbar/Reddy.jsx'
const Navbar = lazy(()=>import('./Navbar/Navbar.jsx'))
import GrandFather from './Props/GrandFather.jsx'
const Counter = lazy(()=>import('./useStateHook/Counter.jsx'))
import Password from './useStateHook/Password.jsx'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Home.jsx'
import Registration from './Form/Registration.jsx'
import UseEffectAPIall from './UseeffectHook/UseEffectAPIall.jsx'
import Value from './UseeffectHook/Value.jsx'
import UseRefHook from './useRefrenceHook/UseRefHook.jsx'
import UseMemoExample from './useMemoHook/UseMemoExample.jsx'
import Parent from './useCallbackHook/Parent.jsx'


const App = () => {
  return (
    <div>


<BrowserRouter>
<Routes>
  <React.Suspense fallback={<p>Loading...</p>}>
<Route path='/' element={<Home/>} />
  <Route path='/bharath' element={<Parent/>} />
  <Route path='/memo' element={<UseMemoExample/>}/>
  <Route path='/ref' element={<UseRefHook/>}/>
  <Route path='/register' element={<Registration/>}/>
  <Route path='/password' element={ <Password/>}/>
  <Route path='/navbar'   element={<Navbar/>}/>
  <Route path='/counter/count'  element={<Counter/>}/>
  <Route path='/props'  element={<GrandFather/>}/>
  <Route path='/apicall' element={<UseEffectAPIall/>}/>
  <Route path='/value' element={<Value/>}/>
  </React.Suspense>
</Routes>
</BrowserRouter>
    </div>
  )
}

export default App
