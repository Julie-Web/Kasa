// Import
import { useState } from 'react';
import chevron from '../assets/images/down-chevron.png';
import '../styles/Accordeon.css'

export default function Collapse({title, content}) {

    // Déclare l'état initial pour toogle et la fonction setToggle pour la modifier, ensuite de lui préciser la valeur par défaut false
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="collapse" >
                {/*Au clic, toogle*/}
                <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                    {/*Affiche titre*/}
                    {title}
                    {/*Insére l'image, classes CSS pour l'animation*/}
                    <img 
                        className={toggle ? 'fleche fleche_haut' : 'fleche fleche_bas'} 
                        src={chevron} 
                        alt="chevron" 
                    />
                </h3>
                <div className={toggle ? 'contenu_visible' : 'contenu_cachee'}>
                    {/*map() passe sur chaque élément d'un tableau. Elle renvoie un nouveau tableau contenant les résultats de cette fonction*/}
                    
                    {/*content = variable
                    item est notre composant
                    index est utilisé dans la méthode map() pour indiquer la position de chaque élément dans un tableau*/}
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            // Affiche paragraphe
                            // index est la clée pour identifier l'élément parmis ses frères et soeurs
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div> 
            </div>
        </>
    )
    
}