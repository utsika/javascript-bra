import React, { useState } from "react";
import Header from '../components/Header.jsx';
import HamburgerMeny from '../components/HamburgerMeny.jsx';

// Importerar de bilder och videon som visas på sidan
import bild2 from '../assets/bild2.png';
import bild1 from '../assets/bild1.png';
import bild3 from '../assets/bild3.png';
import sushifilm from '../assets/sushifilm.mp4';

function Galleri2() {

	// State för att hålla koll på vilken media som är vald
	// Från början är ingen media vald
	const [selectedMedia, setSelectedMedia] = useState(null);
	return (
		<div className="Galleri2">
			{/* Vid stor skärm visas den vanliga headern */}
			<div className="bigscreen">
				<Header />
			</div>
			{/* Vid liten skärm visas hamburgarmenyn */}
			<div className="smallscreen">
				<HamburgerMeny />
			</div>
			<div className="container">
				<div className="galleri-grid">
					<img
						src={bild2}
						alt="Bild på sushi"

						// Om användaren klickar på bilden, sätts den som vald media
						onClick={() => setSelectedMedia(bild2)}
					/>

					<img
						src={bild1}
						alt="Bild på sushi"
						onClick={() => setSelectedMedia(bild1)}
					/>

					{/* Lade till muted. Den ville inte automatiskt spela upp annars. */}
					<video controls autoPlay loop muted>
						<source src={sushifilm} type="video/mp4" />
						Videon kan inte spelas upp.
					</video>

					<img
						src={bild3}
						alt="Bild på sushi"
						onClick={() => setSelectedMedia(bild3)}
					/>
				</div>
			</div>

			{selectedMedia && (
				// Om användaren klickar någonstans på overlayen så stängs den
				<div className="lightbox-overlay" onClick={() => setSelectedMedia(null)}>
					{/* Visar den valda bilden i fokus */}
					<img
						src={selectedMedia}
						alt="Förstorad bild"
					/>
				</div>
			)}
		</div>
	);
}

export default Galleri2;

