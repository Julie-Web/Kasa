// Import
import React from 'react';

// Récupére props
function Cards({image, title}) {

    return (

        <div className="card">
            {/*Insére image, description*/}
            <img src={image} alt={title} className="card_img" />
            <div className="card_overlay"></div>

            {/*Insére titre*/}
            <h2 className="card_title">{title}</h2>
        </div>

    );

}

// Export
export default Cards;