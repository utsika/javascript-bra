import React from "react";
import '../App.css';
import Header from '../components/Header.jsx';
import HamburgerMeny from '../components/HamburgerMeny.jsx';

//Bilder importeras
import karta3 from '../assets/karta3.png';

class Omoss extends React.Component {
	render() {
		return (
			<div className="Omoss">
				{/* Vid stor skärm visas den vanliga headern */}
				<div className="bigscreen">
					<Header />
				</div>
				{/* Vid liten skärm visas hamburgarmenyn */}
				<div className="smallscreen">
					<HamburgerMeny />
				</div>
				<div className="container">
					<div className="info">
						<div className="kontakt">
							<p>Kontakta oss</p>
							{/* kontaktformulär, label - rubrik, input - vad som skrivs in */}
							{/* br = byt rad */}
							<div className="form">
								<form>
									<label htmlFor="namn">Namn:</label><br />
									<input type="text" id="namn" name="namn" placeholder="Ditt namn..." /><br />
									<label htmlFor="epost">E-post:</label><br />
									<input type="text" id="epost" name="epost" placeholder="Din e-post..." /><br />
									<label htmlFor="problem">Ämne:</label><br />
									<textarea id="problem" name="problem" placeholder="Skriv något..."></textarea><br /><br />
									<input type="submit" value="Skicka" />
								</form>
							</div>
						</div>
						<div className="hitta">
							<p>Ålidhems centrum</p>
							<p>Ekonomistråket 1</p>
							<p>907 30, Umeå</p>
							<p>Telefon: 090-19 55 55</p>
							<a href="https://www.google.com/maps/place/%C3%85lidhem+Sushi+Bar/@63.8123486,20.3123416,17z/data=!3m1!4b1!4m6!3m5!1s0x467c5af82e390dd7:0x98c14bc648f58b50!8m2!3d63.8123463!4d20.3149165!16s%2Fg%2F11cnqb7wfv?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoASAFQAw%3D%3D">
								Hitta oss här!
							</a>
						</div>
						<div className="hittakarta">
							<img src={karta3} alt="Karta till restaurangen" />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Omoss;