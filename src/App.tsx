import { Route, Routes } from 'react-router-dom'
import './App.css'
import PublicLayout from './layout/PublicLayout'
import Home from './pages/public/Home'
import About from './pages/public/About'
import Contact from './pages/public/Contact'
import Shop from './pages/public/Shop'
import Blog from './pages/public/Blog'
import Faq from './pages/public/Faq'
import Auth from './pages/public/Auth'
import ProductDetail from './pages/public/ProductDetail'


function App() {

  return (
    
    <Routes>
      <Route path='/' element={<PublicLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path='shop' element={<Shop/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='faq' element={<Faq/>}/>
      </Route>
      <Route path='auth' element={<Auth/>}/>

      
    </Routes>
     
    
  )
}

export default App
