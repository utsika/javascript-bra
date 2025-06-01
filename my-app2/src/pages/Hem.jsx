import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import Headerhem from "../components/Headerhem";
import HamburgerMeny from "../components/HamburgerMeny";


//Bilder importeras
import hembild from '../assets/hembild.jpg';
import kartaBild from '../assets/karta2.png';

class Hem extends React.Component {
	render() {
		return (

			<div className="Hem">
				{/* Vid stor skärm visas den vanliga headern */}
				<div className="bigscreen">
					<Headerhem />
				</div>
				{/* Vid liten skärm visas hamburgarmenyn */}
				<div className="smallscreen">
					<HamburgerMeny />
				</div>

				<img className="hembild" src={hembild} alt="Bild på mat" />
				<div className="beskrivandetext">
					<h1>Umeås bästa sushi!</h1>
					<h1>Prova och avgör själv</h1>
				</div>
				<div className="litenmeny">
					<Link to="/meny">Meny</Link>
				</div>
				<div className="content">
					<div className="oppettider">
						<h1>Öppettider</h1>
						<table>
							<tbody>
								{[
									// Måndag-Torsdag = 1-4, Fredag = 5, Lördag = 6, Söndag = 0
									// Förutbestämda indexer för veckodagar från JavaScript
									{ dagar: "Måndag-Torsdag", tider: "10:30-20:30", dagarIndex: [1, 2, 3, 4] },
									{ dagar: "Fredag", tider: "10:30-21:00", dagarIndex: [5] },
									{ dagar: "Lördag", tider: "11:30-21:00", dagarIndex: [6] },
									{ dagar: "Söndag", tider: "11:00-20:00", dagarIndex: [0] },
								].map((rad, index) => {

									// Hämtar dagens veckodag som ett index (0-6), se ovan
									const idag = new Date().getDay();

									// Kollar om dagens veckodag finns med i arrayen dagarIndex
									// Om den finns, sätts texten som fetstil
									// Annars får den normal texttjocklek
									const ärIdag = rad.dagarIndex.includes(idag);

									return (
										<tr key={index} style={{ fontWeight: ärIdag ? "bold" : "normal" }}>
											<td>{rad.dagar}</td>
											<td>{rad.tider}</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
					<img className="karta" src={kartaBild} alt="Karta till restaurangen" />
				</div>
			</div>
		);
	}
}
export default Hem;