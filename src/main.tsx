import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sidebar from './Sidebar'
import MultiStepApplication from './MultiStepApplication'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Sidebar />
    <MultiStepApplication/>
  </StrictMode>,
)
