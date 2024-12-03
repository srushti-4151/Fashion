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
import ProductPage from './Pages/Productpage.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/Store.js'
import CartPage from './Pages/CartPage.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import SigninPage from './Pages/SigninPage.jsx'
import Profile from './Pages/Profile.jsx'
import AccountDashboard from './Pages/AccountDashboard.jsx'
import OrderDetails from './Pages/OrderDetails.jsx'
import AddressBook from './Pages/AddressBook.jsx'
import ResetPass from './Pages/ResetPass.jsx'
import Proceed from './Pages/Proceed.jsx'


const router =  createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='blog' element={<Blog/>}/>
      <Route path='product' element={<Products/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path="/productpage/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/proceed" element={<Proceed />} />

      <Route path="/user" element={<Profile />}>
        <Route path="dashboard" element={<AccountDashboard />} />
        <Route path="orders" element={<OrderDetails />} />
        <Route path="address" element={<AddressBook />} />
        <Route path="reset-password" element={<ResetPass />} /> 
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
