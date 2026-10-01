import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { VariableProvide } from './ContextAPI/VariableContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VariableProvide>
      <App />
    </VariableProvide>
  </StrictMode>,
)
