// Import
import { Link } from "react-router-dom";

export default function Nav() {
	
	return (

		// Barre de navigation
		<nav>

			{/*Liens*/}
			<Link to="/Accueil" className="lien_nav">
				Accueil
			</Link>

			<Link to="/Propos" className="lien_nav">
				A Propos
			</Link>

		</nav>
		
	);

}