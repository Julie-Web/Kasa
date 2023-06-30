// Import
import React from "react";
import { Link } from "react-router-dom";
import logements from "../datas/logement.json";
import Cards from "../components/Cards";
import "../styles/Gallery.css";

const Gallery = () => {
 
    return (

        <div className="gallery">
            <div className="accueil_gallery">
                <div className="accueil">

                    {/*logements = variable,
                    map = passe sur chaque élément du tableau,
                    logement = composant*/}
                    {logements.map((logement) => {
                
                        return (

                            // Affiche id
                            <div className="logement" key={logement.id}>
                                <article>
                                    {/*Lien*/}
                                    <Link to={`/logement/${logement.id}`}>
                                        {/*Insére cartes, image, titre*/}
                                        <Cards image={logement.cover} title={logement.title} />
                                    </Link>
                                </article>
                            </div>

                        );

                    })}

                </div>
            </div>
        </div>

    );

};

// Export
export default Gallery;