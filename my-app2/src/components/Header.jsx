import React from "react";

class Header extends React.Component {
	render() {
		return (
			<div class="header">
				<nav>
					<div class="headermeny">
						<div class="logga">
							<a href="index.html"><img src="./assets/Group18.png" alt="Restaurangens logga" /></a>
						</div>
						<div class="menyval">
							<ul>
								<li><a href="index.html">Hem</a></li>
								<li><a href="meny.html">Meny</a></li>
								<li><a href="dagenslunch.html">Dagens lunch</a></li>
								<li><a href="galleri.html">Galleri</a></li>
								<li><a href="omoss.html">Om oss</a></li>
							</ul>
						</div>
					</div>
				</nav>
			</div>

		)
	}
}
export default Header;