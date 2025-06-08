import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from '@/AppRoutes'
import '@/assets/css/globalStyles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
)
