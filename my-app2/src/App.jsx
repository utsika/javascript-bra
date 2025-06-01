import Hem from './pages/Hem.jsx';
import Meny from './pages/Meny.jsx';
// import Header from './components/Header.jsx';
// import HamburgerMeny from './components/HamburgerMeny.jsx';
import Dagenslunch from './pages/Dagenslunch.jsx';
import Galleri from './pages/Galleri.jsx';
import Omoss from './pages/Omoss.jsx';
import Galleri2 from './pages/Galleri2.jsx';


import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div className='App'>
		<Router>
			{/* <Header /> */}
			{/* <div className="smallscreen">
				<HamburgerMeny />
			</div> */}
			
			{/* Här läggs alla routes in */}
			<Routes>
				<Route path='/' element={<Hem />} />
				<Route path='/meny' element={<Meny />} />
				<Route path='/dagenslunch' element={<Dagenslunch />} />
				<Route path='/galleri' element={<Galleri2 />} />
				<Route path='/omoss' element={<Omoss />} />

			</Routes>
			
		</Router>
		
    </div>
  )
}

export default App
