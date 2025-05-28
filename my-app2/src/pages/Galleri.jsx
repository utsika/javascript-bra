import React from "react";
import Header from '../components/Header.jsx';

import bild2 from '../assets/bild2.png';
import bild1 from '../assets/bild1.png';
import bild3 from '../assets/bild3.png';
import sushifilm from '../assets/sushifilm.mp4';

class Galleri extends React.Component {
	render() {
		return (
			<div className="Galleri">
				<Header />
			<div className="container">
				

				<div className="galleri-grid">

					<img src={bild2} alt="Bild på sushi" />

					<img src={bild1} alt="Bild på sushi" />

					<video controls autoPlay loop>
						<source src={sushifilm} type="video/mp4" />
						Videon kan inte spelas upp.
					</video>

					<img src={bild3} alt="Bild på sushi" />

				</div>
			</div>
			</div>
		)
	}
}

export default Galleri;