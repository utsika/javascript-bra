import React from "react";
import Header from '../components/Header.jsx';


class Dagenslunch extends React.Component {
	render() {
		return (
		<div className="Dagenslunch">
		<Header />
			<div className="container">
				
				<div className="linje5"></div>
				<div className="linje6"></div>

				<h3>Dagens lunch</h3>

				<div className="mellanrum"></div>

				<div className="meny-grid">
					<div className="linje"></div>
					<div className="linje2"></div>
					<div className="meny-item">
						<p className="nummer">1.</p>
						<p className="namn">Small lunch - 99 kr</p>
						<p className="beskrivning">10 bitar</p>
						<p className="beskrivning">3 lax, 2 avokado, 5 rullar</p>
					</div>
					<div className="meny-item">
						<p className="nummer">2.</p>
						<p className="namn">Medium lunch - 109 kr</p>
						<p className="beskrivning">11 bitar</p>
						<p className="beskrivning">4 lax, 2 avokado, 5 rullar</p>
					</div>
					<div className="meny-item">
						<p className="nummer">3.</p>
						<p className="namn">Big lunch - 119 kr</p>
						<p className="beskrivning">12 bitar</p>
						<p className="beskrivning">4 lax, 2 avokado, 1 räka, 5 rullar</p>
					</div>
					<div className="meny-item">
						<p className="nummer">4.</p>
						<p className="namn">Vegan lunch - 109 kr</p>
						<p className="beskrivning">11 bitar</p>
						<p className="beskrivning">4 avokado, 2 tofu, 5 veg. rullar</p>
					</div>
					<div className="meny-item">
						<p className="nummer">5.</p>
						<p className="namn">Poké bowl lunch - 119 kr</p>
						<p className="beskrivning">Kyckling/nötkött/lax poké bowl</p>
						<p className="beskrivning"></p>
					</div>
					<div className="meny-item">
						<p className="nummer">6.</p>
						<p className="namn">Yakisoba (nudlar) - 119 kr</p>
						<p className="beskrivning">Japanska nudlar med kyckling/biff, grönsaker och sås</p>
						<p className="beskrivning"></p>
					</div>
				</div>
			</div>
		</div>
		)
	}
}
export default Dagenslunch;