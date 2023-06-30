// Import
import {Link} from "react-router-dom";

export default function ErreurPage() {

	return (

		<div className="erreur">
			<p className="erreurNumber">404</p>
			<p className="erreurTexte">Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/Accueil" className="erreurLien">
				Retourner sur la page d’accueil
			</Link>
		</div>

	);

}