import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './ContextApi/AuthProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SidebarContextProvider } from './ContextApi/SidebarContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthProvider>
  <SidebarContextProvider>

    <App />
  </SidebarContextProvider>
  </AuthProvider>
  </BrowserRouter>,
)
