import { StrictMode } from 'react'

import { App } from './pages/App';
import { Catalog } from './pages/Catalog';

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { store } from './store/store';
import "./pages/styles/main.scss"
import { ProductList } from './pages/ProductList';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<App />} />
                      <Route path='/catalog' element={<Catalog/>}/>
                      <Route path='/product/:id' element={<ProductList/>}/>
                  </Routes>
        </BrowserRouter>
      </Provider>
  </StrictMode>,
)
