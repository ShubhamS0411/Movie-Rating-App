import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.tsx'
import Reccomended from './components/reccomended.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <Header/>
    <Reccomended/>
  </StrictMode>,
)
