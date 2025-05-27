import Hem from './pages/Hem.jsx';
import Meny from './pages/Meny.jsx';
import Header from './components/Header.jsx';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div className='App'>
		<Router>
			<Header />
			<Route>
				<Route exact path='/' component={Hem} />
				<Route path='/meny' component={Meny} />
			</Route>
			
		</Router>
		
    </div>
  )
}

export default App
