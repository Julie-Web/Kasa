// Import
import React from "react";

// Les props sont récupérées dans les paramètres de la fonction
function Banniere({image, texte}) {

	return (

	  	<div className="banner">
			{/*Insére l'image*/}
			<img className="banner__img" src={image} alt="Bannière" />
			<div className="banner__sombre"></div>
			{/*Insére texte*/}
			<span className="banner__texte">{texte}</span>
	  	</div>

	);
}
  
// Export
export default Banniere;