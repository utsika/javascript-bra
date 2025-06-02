import React, { useEffect, useState } from "react";
import Header from '../components/Header.jsx';
import { getRandomSushiDeal } from '../randomizer.js';
import HamburgerMeny from '../components/HamburgerMeny.jsx';

const Meny = () => {

	// Använder useState för att hålla koll på dagens sushideal
	const [deal, setDeal] = useState("");

	useEffect(() => {
		// Hämtar en slumpmässig sushideal när komponenten laddas
		const randomDeal = getRandomSushiDeal();
		// Uppdaterar med den slumpmässiga sushirätten
		setDeal(randomDeal);
	}, []);

	return (

		<div className="Meny">
			{/* Vid stor skärm visas den vanliga headern */}
			<div className="bigscreen">
				<Header />
			</div>
			{/* Vid liten skärm visas hamburgarmenyn */}
			<div className="smallscreen">
				<HamburgerMeny />
			</div>

			<div className="container">
				<div className="linje3"></div>
				<div className="linje4"></div>
				<h3>Meny</h3>

				{/* Lägger in dagens sushi deal */}
				<h4>Dagens sushi deal: </h4>
				<h4>{deal}</h4>

				{/* Gömmer menyn, kommer fram då man klickar på rubriken. */}
				<details open>
					<summary>
						<h2>Sushi</h2>
						<br />
					</summary>
					<div className="meny-grid">
						<div className="linje"></div>
						<div className="linje2"></div>
						<div class="meny-item">
							<p class="nummer">1.</p>
							<p class="namn">7 bitar sushi - 84 kr</p>
							<p class="beskrivning">2 lax, 2 avokado, 3 rullar</p>
							<p class="beskrivning"></p>
						</div>
						<div class="meny-item">
							<p class="nummer">2.</p>
							<p class="namn">Liten sushi - 99 kr</p>
							<p class="beskrivning">9 bitar</p>
							<p class="beskrivning">3 lax, 1 räka, 1 avokado, 4 rullar</p>
						</div>
						<div class="meny-item">
							<p class="nummer">3.</p>
							<p class="namn">Mellan sushi - 114 kr</p>
							<p class="beskrivning">11 bitar</p>
							<p class="beskrivning">3 lax, 2 räka, 2 avokado, 4 rullar</p>
						</div>
						<div class="meny-item">
							<p class="nummer">4.</p>
							<p class="namn">Mellan sushi med tonfisk - 114 kr</p>
							<p class="beskrivning">11 bitar</p>
							<p class="beskrivning">4 lax, 2 räka, 1 tonfisk, 4 rullar</p>
						</div>
						<div class="meny-item">
							<p class="nummer">5.</p>
							<p class="namn">Stor sushi - 159 kr</p>
							<p class="beskrivning">15 bitar</p>
							<p class="beskrivning">6 lax, 3 räkor,  2 avokado, 4 rullar</p>
						</div>
						<div class="meny-item">
							<p class="nummer">6.</p>
							<p class="namn">Kockens stor sushi - 159 kr</p>
							<p class="beskrivning">15 bitar</p>
							<p class="beskrivning">5 lax, 2 räkor,  4 kockens val avokado, 4 rullar</p>
						</div>
						<div class="meny-item">
							<p class="nummer">7.</p>
							<p class="namn">20 bitar sushibar special - 229 kr</p>
							<p class="beskrivning">20 bitar </p>
							<p class="beskrivning">5 lax, 3 räkor,  6 kockens val avokado, 6 rullar</p>
						</div>
						<div class="meny-item">
							<p class="nummer">8.</p>
							<p class="namn">Familje sushi - 309 kr</p>
							<p class="beskrivning">30 bitar</p>
							<p class="beskrivning">10 lax, 4 räkor,  8 kockens val, 8 rullar</p>
						</div>
						<div class="meny-item">
							<p class="nummer">9.</p>
							<p class="namn">Lax sushi - 129 kr</p>
							<p class="beskrivning">10 bitar lax nigiri</p>
							<p class="beskrivning"></p>
						</div>
						<div class="meny-item">
							<p class="nummer">10.</p>
							<p class="namn">Avokado sushi - 125 kr </p>
							<p class="beskrivning">10 bitar avokado nigiri</p>
							<p class="beskrivning"></p>
						</div>
						<div class="meny-item">
							<p class="nummer">11.</p>
							<p class="namn">Lax & roll sushi - 129 kr</p>
							<p class="beskrivning">12 bitar</p>
							<p class="beskrivning">8 lax, 4 rullar</p>
						</div>
						<div class="meny-item">
							<p class="nummer">12.</p>
							<p class="namn">Lax & avokado sushi - 129 kr</p>
							<p class="beskrivning">10 bitar</p>
							<p class="beskrivning">5 lax, 5 rullar</p>
						</div>
						<div class="meny-item">
							<p class="nummer">13.</p>
							<p class="namn">Lax, avokado & roll sushi - 129kr</p>
							<p class="beskrivning">12 bitar </p>
							<p class="beskrivning">4 lax, 4 avokado, 4 rullar</p>
						</div>
						<div class="meny-item">
							<p class="nummer">14.</p>
							<p class="namn">Spicy & crispy lax sushi - 139 kr</p>
							<p class="beskrivning">10 bitar</p>
							<p class="beskrivning">Lax nigiri med rostad lök & olika spicy såser</p>
						</div>
						<div class="meny-item">
							<p class="nummer">15.</p>
							<p class="namn">Grillad lax sushi - 139 kr</p>
							<p class="beskrivning">10 bitar</p>
							<p class="beskrivning">Flame-grillad lax nigiri med såser</p>
						</div>
						<div class="meny-item">
							<p class="nummer">16.</p>
							<p class="namn">Lax & räk sushi - 139 kr</p>
							<p class="beskrivning">10 bitar</p>
							<p class="beskrivning">5 lax, 5 räkor</p>
						</div>
						<div class="meny-item">
							<p class="nummer">17.</p>
							<p class="namn">Lax, räk & roll sushi - 139 kr</p>
							<p class="beskrivning">12 bitar </p>
							<p class="beskrivning">4 lax, 4 räkor, 4 rullar</p>
						</div>
						<div class="meny-item">
							<p class="nummer">18.</p>
							<p class="namn">Avokado & räk sushi - 139 kr</p>
							<p class="beskrivning">10 bitar</p>
							<p class="beskrivning">5 avokado, 5 räkor</p>
						</div>
						<div class="meny-item">
							<p class="nummer">19.</p>
							<p class="namn">Avokado, räk & roll sushi - 139 kr</p>
							<p class="beskrivning">12 bitar</p>
							<p class="beskrivning">4 avokado, 4 räkor, 4 rullar</p>
						</div>
						<div class="meny-item">
							<p class="nummer">20.</p>
							<p class="namn">Lax, räk & avokado sushi - 149 kr</p>
							<p class="beskrivning">12 bitar</p>
							<p class="beskrivning">4 lax, 4 räkor, 4 avokado</p>
						</div>
						<div class="meny-item">
							<p class="nummer">21.</p>
							<p class="namn">Hot & spicy sushi - 149 kr</p>
							<p class="beskrivning">12 bitar</p>
							<p class="beskrivning">3 lax, 3 tonfisk, 2 räkor, 4 rullar</p>
						</div>
						<div class="meny-item">
							<p class="nummer">22.</p>
							<p class="namn">Vegansk sushi - 109 kr</p>
							<p class="beskrivning">11 bitar</p>
							<p class="beskrivning">2 avokado, 2 tofu, 2 rättika,  5 veg. rullar</p>
						</div>
						<div class="meny-item">
							<p class="nummer">23.</p>
							<p class="namn">Mammas special sushi - 114 kr</p>
							<p class="beskrivning">11 bitar</p>
							<p class="beskrivning">2 räkor, 2 omelett, 1 avokado, 1 tofu, 5 rullar</p>
						</div>
						<div class="meny-item">
							<p class="nummer">24.</p>
							<p class="namn">Spicy avokado sushi - 135 kr</p>
							<p class="beskrivning">10 bitar</p>
							<p class="beskrivning">Avokado nigiri med spicy såser & rostad lök</p>
						</div>
						<div class="meny-item">
							<p class="nummer">25.</p>
							<p class="namn">Sashimi (Liten/stor) - 129 kr/159 kr</p>
							<p class="beskrivning">Olika typer av rå fisk med ris & sallad</p>
							<p class="beskrivning"></p>
						</div>
						<div class="meny-item">
							<p class="nummer">26.</p>
							<p class="namn">Sashimi sushi - 135 kr </p>
							<p class="beskrivning">8 bitar sashimi & 6 bitar sushi</p>
							<p class="beskrivning"></p>
						</div>
					</div>
				</details>

				<details open>
					<summary>
						<h2>Sushi & rolls</h2>
						<br />
					</summary>
					<div className="meny-grid">
						<div className="linje"></div>
						<div className="linje2"></div>
						<div className="meny-item">
							<p className="nummer">27.</p>
							<p className="namn">California rolls - 95 kr</p>
							<p className="beskrivning">10 bitar</p>
							<p className="beskrivning">Rullar med lax, crabsticks, gurka, avokado & sesamfrön</p>
						</div>
						<div className="meny-item">
							<p className="nummer">28.</p>
							<p className="namn">Futo maki - 99 kr</p>
							<p className="beskrivning">10 bitar</p>
							<p className="beskrivning">Rullar med lax, crabstick, gurka & avokado</p>
						</div>
						<div className="meny-item">
							<p className="nummer">29.</p>
							<p className="namn">Rainbow rolls - 115 kr</p>
							<p className="beskrivning">10 bitar</p>
							<p className="beskrivning">Rullar med paprika lax, gurka, avokado & sås på</p>
						</div>
						<div className="meny-item">
							<p className="nummer">30.</p>
							<p className="namn">New York rolls - 129 kr</p>
							<p className="beskrivning">10 bitar</p>
							<p className="beskrivning">Rullar med mango, avokado, philadelphia ost & lax på toppen</p>
						</div>
						<div className="meny-item">
							<p className="nummer">31.</p>
							<p className="namn">Mammas special rolls - 129 kr</p>
							<p className="beskrivning">10 bitar</p>
							<p className="beskrivning">Rullar med crabsticks, avokado, philadelpha ost & räkor på toppen</p>
						</div>
						<div className="meny-item">
							<p className="nummer">32.</p>
							<p className="namn">Ålidhem special rolls - 129 kr</p>
							<p className="beskrivning">10 bitar</p>
							<p className="beskrivning">Rullar med omelett, lax, crabsticks, philadelphia ost & avokado på toppen</p>
						</div>
						<div className="meny-item">
							<p className="nummer">33.</p>
							<p className="namn">Kyckling teriyaki rolls - 129 kr</p>
							<p className="beskrivning">10 bitar</p>
							<p className="beskrivning">Rullar med kyckling, gurka, paprika, avokado & rostad lök på toppen</p>
						</div>
						<div className="meny-item">
							<p className="nummer">34.</p>
							<p className="namn">Yakiniku rolls - 129 kr</p>
							<p className="beskrivning">10 bitar</p>
							<p className="beskrivning">Rullar med yakiniku, gurka, paprika, avokado & rostad lök på toppen</p>
						</div>
						<div className="meny-item">
							<p className="nummer">35.</p>
							<p className="namn">Tempura rolls - 129 kr</p>
							<p className="beskrivning">10 bitar</p>
							<p className="beskrivning">Rullar med räkor tempura, gurka, paprika, avokado & rostad lök på toppen</p>
						</div>
						<div className="meny-item">
							<p className="nummer">36.</p>
							<p className="namn">Mango dragon rolls - 135 kr</p>
							<p className="beskrivning">10 bitar</p>
							<p className="beskrivning">Rullar med räkor tempura, gurka, paprika, avokado & mango</p>
						</div>
						<div className="meny-item">
							<p className="nummer">37.</p>
							<p className="namn">Grillad lax och ost rolls - 139 kr</p>
							<p className="beskrivning">10 bitar</p>
							<p className="beskrivning">Rullar med crabsticks, avokado, philadelpha ost & grillad lax på toppen</p>
						</div>
						<div className="meny-item">
							<p className="nummer">38.</p>
							<p className="namn">Spicy & crispy rolls - 139 kr</p>
							<p className="beskrivning">10 bitar</p>
							<p className="beskrivning">Rullar med spicy tuna, lax, gurka, paprika, avokado & rostad lök på toppen</p>
						</div>
						<div className="meny-item">
							<p className="nummer">39.</p>
							<p className="namn">Vegetariska special rolls - 129 kr</p>
							<p className="beskrivning">10 bitar</p>
							<p className="beskrivning">Rullar med philadelphia ost, omelett, gurka, paprika & avokado på toppen</p>
						</div>
						<div className="meny-item">
							<p className="nummer">40.</p>
							<p className="namn">Vegan special rolls - 129 kr</p>
							<p className="beskrivning">10 bitar</p>
							<p className="beskrivning">Rullar med tofu, omelett, gurka, paprika & mango</p>
						</div>

					</div>
				</details>
				<details open>
					<summary>
						<h2>Japanska maträtter</h2>
						<br />
					</summary>
					<div className="meny-grid">
						<div className="linje"></div>
						<div className="linje2"></div>
						<div className="meny-item">
							<p className="nummer">41.</p>
							<p className="namn">Yakiniku - 135 kr</p>
							<p className="beskrivning">Tunnskivat nötkött med ris, såser & mixad sallad</p>
							<p className="beskrivning"></p>
						</div>
						<div className="meny-item">
							<p className="nummer">42.</p>
							<p className="namn">Yakitori - 125 kr</p>
							<p className="beskrivning">5 st kycklingspett med ris, såser & mixad sallad</p>
							<p className="beskrivning"></p>
						</div>
						<div className="meny-item">
							<p className="nummer">43.</p>
							<p className="namn">Kyckling teriyaki - 125 kr</p>
							<p className="beskrivning">Grillad kyckingfilé med ris, såser & mixad sallad</p>
							<p className="beskrivning"></p>
						</div>
						<div className="meny-item">
							<p className="nummer">44.</p>
							<p className="namn">Bento låda - 155 kr</p>
							<p className="beskrivning">Yakiniku, yakitori, ris, såser mixad sallad & 5 bitar sushi</p>
							<p className="beskrivning"></p>
						</div>
						<div className="meny-item">
							<p className="nummer">45.</p>
							<p className="namn">Yakiniku sushi - 139 kr</p>
							<p className="beskrivning">Yakiniku, ris, såser mixad sallad & 5 bitar sushi</p>
							<p className="beskrivning"></p>
						</div>
						<div className="meny-item">
							<p className="nummer">46.</p>
							<p className="namn">Yakitori sushi - 129 kr</p>
							<p className="beskrivning">Yakitori, ris, såser mixad sallad & 5 bitar sushi</p>
							<p className="beskrivning"></p>
						</div>
						<div className="meny-item">
							<p className="nummer">47.</p>
							<p className="namn">Gyoza - 125 kr</p>
							<p className="beskrivning">8 bitar dumplings (veg eller kyckling) med ris såser & mixad sallad</p>
							<p className="beskrivning"></p>
						</div>
						<div className="meny-item">
							<p className="nummer">48.</p>
							<p className="namn">Gyoza sushi - 125 kr</p>
							<p className="beskrivning">5 bitar dumplings (veg eller kyckling) & 5 bitar sushi</p>
							<p className="beskrivning"></p>
						</div>
						<div className="meny-item">
							<p className="nummer">49.</p>
							<p className="namn">Spicy ramen - 129 kr</p>
							<p className="beskrivning">Ramen nudlar, ramen sås med (kyckling/biff/tofu)</p>
							<p className="beskrivning"></p>
						</div>
						<div className="meny-item">
							<p className="nummer">50.</p>
							<p className="namn">Yakisoba - 129 kr</p>
							<p className="beskrivning">Japanska nudlar med (biff/tofu/kyckling) såser & mixad sallad</p>
							<p className="beskrivning"></p>
						</div>
					</div>
				</details>

				<details open>
					<summary>
						<h2>Bibimbap & bowls</h2>
						<br />
					</summary>
					<div className="meny-grid">
						<div className="linje"></div>
						<div className="linje2"></div>
						<div className="meny-item">
							<p className="nummer">51.</p>
							<p className="namn">Kyckling bibimbap - 129 kr</p>
							<p className="beskrivning">Marinerad kyckling med ris, rostadlök, bibimbap sås & mixad sallad</p>
							<p className="beskrivning"></p>
						</div>
						<div className="meny-item">
							<p className="nummer">52.</p>
							<p className="namn">Biff bibimbap - 135 kr</p>
							<p className="beskrivning">Marinerat nötkött med ris, rostad lök, bibimbap sås & mixad sallad</p>
							<p className="beskrivning"></p>
						</div>
						<div className="meny-item">
							<p className="nummer">53.</p>
							<p className="namn">Spicy salmon bibimbap - 129 kr</p>
							<p className="beskrivning">Marienerad rå lax med ris, rostad lök, bibimbap sås & mixad sallad</p>
							<p className="beskrivning"></p>
						</div>
						<div className="meny-item">
							<p className="nummer">54.</p>
							<p className="namn">Shrimp bibimbap - 129 kr</p>
							<p className="beskrivning">Marienerad räkor med ris, rostad lök, bibimbap sås & olika sallader</p>
							<p className="beskrivning"></p>
						</div>
						<div className="meny-item">
							<p className="nummer">55.</p>
							<p className="namn">Super hot bibimbap - 135 kr</p>
							<p className="beskrivning">Marienerad rå lax, räkor med ris, rostad lök, starka såser & olika sallader </p>
							<p className="beskrivning"></p>
						</div>
						<div className="meny-item">
							<p className="nummer">56.</p>
							<p className="namn">Vegansk poké bowl - 125 kr</p>
							<p className="beskrivning">Marienerad hård tofu med ris, rostad lök, sås & olika sallader</p>
							<p className="beskrivning"></p>
						</div>
						<div className="meny-item">
							<p className="nummer">57.</p>
							<p className="namn">Kaarage poké bowl - 125 kr</p>
							<p className="beskrivning">Kyckling kaarage med ris, chilimajonäs & olika sallader</p>
							<p className="beskrivning"></p>
						</div>
						<div className="meny-item">
							<p className="nummer">58.</p>
							<p className="namn">Tempura poké bowl - 125 kr</p>
							<p className="beskrivning">Tempura räkor med ris, chilimajonäs & olika sallader</p>
							<p className="beskrivning"></p>
						</div>
					</div>
				</details>

				<h5>Sushi styck</h5>
				<br />
				<div className="extrastyck">
					<table>
						<tr>
							<th>Lax - 13 kr</th>
						</tr>
						<tr>
							<th>Avokado - 13 kr</th>
						</tr>
						<tr>
							<th>Tonfisk - 16 kr</th>
						</tr>
						<tr>
							<th>Räka - 16 kr</th>
						</tr>
						<tr>
							<th>Tofu - 16 kr</th>
						</tr>
						<tr>
							<th>Omelett - 16 kr</th>
						</tr>
						<tr>
							<th>Övrig fisk - 16 kr</th>
						</tr>
					</table>
				</div>

				<h5>Extra tillbehör</h5>
				<br />

				<div className="extrastyck">
					<table>
						<tr>
							<th>Chilimajonäs (30cl burk) - 10 kr</th>
						</tr>
						<tr>
							<th>Teriyaki sås (30cl burk) - 10 kr</th>
						</tr>
						<tr>
							<th>Sjögrässallad (liten/stor) - 10 kr/40 kr</th>
						</tr>
						<tr>
							<th>Extra soja - 5 kr</th>
						</tr>
					</table>
				</div>

			</div>

		</div>
	)
	// 	}
}

export default Meny;