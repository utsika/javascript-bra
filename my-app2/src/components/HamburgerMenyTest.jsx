import React, {useState} from "react";
import { Link } from 'react-router-dom';
import '../App.css';

const HamburgerMeny = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	// Om menyn är öppen - stängs den eller om den är stängd - öppnas den.
	const toggleMenu = () => {
		setMenuOpen(prev => !prev);
	};
	return (
		<div className="hamburger-meny">

			<div className="hamburger" onClick={toggleMenu}>
				&#9776;
			</div>
			{/* Om menyn är öppen, lägg till classen "open", annars inte */}
			
				<nav className={`menu ${menuOpen ? 'open' : ''}`}>
					<Link to="/" onClick={toggleMenu}>Hem</Link>
					<Link to="/meny" onClick={toggleMenu}>Meny</Link>
					<Link to="/dagenslunch" onClick={toggleMenu}>Dagens Lunch</Link>
					<Link to="/galleri" onClick={toggleMenu}>Galleri</Link>
					<Link to="/omoss" onClick={toggleMenu}>Om oss</Link>
				</nav>

		</div>
	);
};

export default HamburgerMeny;
