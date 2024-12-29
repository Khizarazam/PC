import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from './App.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Services from './Components/Services.jsx';
import Products from './Components/Products.jsx';
import Equipments from './Components/Equipments.jsx';
import ElectroplatingChemicals from './Components/ElectroplatingChemicals.jsx';
import GeneralChemicals from './Components/GeneralChemicals.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path='Home'  element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Services" element={<Services />} />
      <Route path="Products" element={<Products />} />
      <Route path="Equipments" element={<Equipments />} />
      <Route path="Products/ElectroplatingChemicals" element={<ElectroplatingChemicals />} />
      <Route path="Products/GeneralChemicals" element={<GeneralChemicals />} />
    </Route>
  ),
  { basename: '/PC' }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
