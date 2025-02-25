import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CarouselPage from './components/touch/ContactUs.jsx';

createRoot(document.getElementById('root')).render(

  <StrictMode>

  <CarouselPage />

    {/* <App /> */}

  </StrictMode>,
);
