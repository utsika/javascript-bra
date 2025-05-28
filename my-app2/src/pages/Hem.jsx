import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import Headerhem from "../components/Headerhem";


//Bilder importeras
import hembild from '../assets/hembild.jpg';
import kartaBild from '../assets/karta2.png';

class Hem extends React.Component {
	render() {
		return (
		
			<div className="Hem">
				<Headerhem />
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
								<tr>
									<td>Måndag-Torsdag</td>
									<td>10:30-20:30</td>
								</tr>
								<tr>
									<td>Fredag</td>
									<td>10:30-21:00</td>
								</tr>
								<tr>
									<td>Lördag</td>
									<td>11:30-21:00</td>
								</tr>
								<tr>
									<td>Söndag</td>
									<td>11:00-20:00</td>
								</tr>
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