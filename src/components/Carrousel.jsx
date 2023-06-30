// Import
import { useState } from 'react'
import ArrowRight from '../assets/images/vector-right.svg'
import ArrowLeft from '../assets/images/vector-left.svg'
import '../styles/Carrousel.css'

export default function Slider({imageSlider}) {

    // Déclare l'état initial pour indexActuel et la fonction indexModifier pour la modifier, ensuite de lui préciser la valeur par défaut
    const [indexActuel, indexModifier] = useState(0)

    // Passe à l'image suivante
    const nextSlide = () => {
        indexModifier(indexActuel + 1)
        // .length = longueur du tableau
        if(indexActuel === imageSlider.length - 1)
        indexModifier(0)
    }

    // Image précédente
    const prevSlide = () => {
        indexModifier(indexActuel - 1)
        if(indexActuel === 0)
        indexModifier(imageSlider.length - 1)
    }

    return (
        <section style={{backgroundImage : `url(${imageSlider[indexActuel]})`}} className='carrousel'>
            {/*.length = longueur du tableau, supérieur à 1, && renvoie vrai si et uniquement si ses deux opérandes sont true ou équivalents à true*/}
            {imageSlider.length > 1 && 
                <>
                    <img 
                        className='carrousel_arrow carrousel_arrow_right'
                        // Insére l'image 
                        src={ArrowRight} 
                        alt="suivante" 
                        // Au clic, on passe à l'image suivante
                        onClick={nextSlide}
                    />
                    <img 
                        className='carrousel_arrow carrousel_arrow_left' 
                        // Insére l'image
                        src={ArrowLeft} 
                        alt="précédente" 
                        // Au clic, on vas à l'image précédente
                        onClick={prevSlide}
                    />
                    {/*Numérotation des images*/}
                    <p className='numerotation'>{indexActuel + 1} / {imageSlider.length}</p>
                </>
            } 
        </section>
    )
}