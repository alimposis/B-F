import './main.scss'
import { App } from './pages/App';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Route, Routes, BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                </Routes>
      </BrowserRouter>
  </StrictMode>,
)
