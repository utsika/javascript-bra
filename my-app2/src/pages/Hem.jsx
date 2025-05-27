import React from "react";

class Hem extends React.Component {
	render() {
		return (
			<div className="Hem">
				<img className="hembild" src="./assets/hembild.jpg" alt="Bild på mat" />
					<div className="beskrivandetext">
						<h1>Umeås bästa sushi!</h1>
						<h1>Prova och avgör själv</h1>
					</div>
					<div className="litenmeny">
						<a href="meny.html">Meny</a>
					</div>
					<div className="content">
						<div className="oppettider">
							<h1>Öppettider</h1>
							<table>
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
							</table>
						</div>
						<img className="karta" src="./assets/karta2.png" alt="Karta till restaurangen" />
					</div>
			</div>
		);
	}
}
export default Hem;