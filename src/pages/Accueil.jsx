// Import
// Comme React transforme l'instruction JSX que nous écrivons en React.createElement(), tous les composants React doivent importer le module React
import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import imageBanniere from "../assets/images/background-banner.png";
import "../styles/Banner.css";

const Accueil = () => {
	
	return (

		<div className="accueil">

			{/*Insére bannière, on met du texte, image*/}
			<Banner texte="Chez vous, partout et ailleurs" image={imageBanniere} />

			{/*Insére galerie d'images*/}
			<Gallery />
			
		</div>

	);

};
  
// Export
export default Accueil;
