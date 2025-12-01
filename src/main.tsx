import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TabsTop } from './Tabs'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TabsTop/>
  </StrictMode>,
)
