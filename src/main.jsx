import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/header.jsx'
import { Button } from './components/ui/Button.jsx'
import { IoMdDownload } from "react-icons/io";
import SearchBar from './components/SearchBar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
