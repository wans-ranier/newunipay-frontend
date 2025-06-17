import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from '@/AppRoutes'
import '@/assets/css/globalStyles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
)
