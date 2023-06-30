// Import
import React from "react";
import Banner from "../components/Banner";
import imageAPropos from "../assets/images/about-background.png";
import Accordeon from "../components/Accordeon";
import CollapseData from "../datas/collapses.json";
import "../styles/Accordeon.css";

const Propos = () => {
 
    return (
      
        <div className="propos">

            {/*Insére bannière*/}
            <Banner image={imageAPropos} titre="" />

            <div className="collapse">
                <div className="collapse__dropdown">

                    {/*CollapseData = variable,
                    map = passe sur chaque élément du tableau,
                    item = composant*/}
                    {CollapseData.map((item) => {
        
                        return (
                            // Affiche id
                            <div key={item.id}>
                                {/*Insére Accordeon, titre, description*/}
                                <Accordeon content={item.content} title={item.title} />
                            </div>
                        );

                    })}

                </div>     
            </div>

        </div>

    );

};

// Export
export default Propos;