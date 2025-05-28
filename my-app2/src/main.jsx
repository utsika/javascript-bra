import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		{/* Behövs inte om jag har en Router i App.jsx!!!  */}
		{/* <BrowserRouter> */}
			<App />
		{/* </BrowserRouter> */} 

	</StrictMode>,
)
