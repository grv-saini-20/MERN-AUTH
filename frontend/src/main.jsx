import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import store from './store.js';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import HomeScreen from './screens/HomeScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<HomeScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route path='/profile' element={<PrivateRoute />}>
        <Route index element={<ProfileScreen />} />
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  </Provider>
)
