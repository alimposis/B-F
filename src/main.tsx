import { StrictMode } from 'react'

import { App } from './pages/App';

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { store } from './store/store';
import "./main.scss"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<App />} />
                  </Routes>
        </BrowserRouter>
      </Provider>
  </StrictMode>,
)
