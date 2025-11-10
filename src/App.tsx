import { Route, Routes } from 'react-router-dom'
import './App.css'
import PublicLayout from './layout/PublicLayout'
import Home from './pages/public/Home'


function App() {

  return (
    <Routes>
      <Route path='/' element={<PublicLayout/>}>
        <Route index element={<Home/>}/>
      </Route>

      
    </Routes>
     
    
  )
}

export default App
