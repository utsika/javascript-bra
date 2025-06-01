import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Group18 from '../assets/Group18.png';

const HamburgerMeny = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div className="header small-header">
			<div className="logga">
				<Link to="/"><img src={Group18} alt="Restaurangens logga" /></Link>
			</div>

			<div className="hamburger" onClick={toggleMenu}>
				&#9776;
			</div>

			{menuOpen && (
				<nav className="hamburger-menu">
					<div className='menybackground'>
						<ul>
							<li><Link to="/" onClick={toggleMenu}

							// Hover-effekt som ändrar färg på länkarna
								onMouseEnter={(e) => e.target.style.color = 'red'}
								onMouseLeave={(e) => e.target.style.color = ''}
							>Hem</Link></li>
							<li><Link to="/meny" onClick={toggleMenu}
								onMouseEnter={(e) => e.target.style.color = 'red'}
								onMouseLeave={(e) => e.target.style.color = ''}
							>Meny</Link></li>
							<li><Link to="/dagenslunch" onClick={toggleMenu}
								onMouseEnter={(e) => e.target.style.color = 'red'}
								onMouseLeave={(e) => e.target.style.color = ''}
							>Dagens lunch</Link></li>
							<li><Link to="/galleri" onClick={toggleMenu}
								onMouseEnter={(e) => e.target.style.color = 'red'}
								onMouseLeave={(e) => e.target.style.color = ''}
							>Galleri</Link></li>
							<li><Link to="/omoss" onClick={toggleMenu}
								onMouseEnter={(e) => e.target.style.color = 'red'}
								onMouseLeave={(e) => e.target.style.color = ''}
							>Om oss</Link></li>
						</ul>
					</div>

				</nav>
			)}
		</div>
	);
};

export default HamburgerMeny;