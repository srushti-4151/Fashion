import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Layout from './Layout.jsx'
import Blog from './Pages/Blog.jsx'
import Products from './Pages/Products.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'

const router =  createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='blog' element={<Blog/>}/>
      <Route path='product' element={<Products/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
