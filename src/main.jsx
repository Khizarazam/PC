import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from './App.jsx';
import Home from './Components/Home.jsx';
import Contact from './Components/Contact.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
    </Route>
  ),
  { basename: '/PC' }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
