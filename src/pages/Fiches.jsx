// Import
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import datas from '../datas/logement.json'
import Slider from "../components/Carrousel"
import Accordeon from '../components/Accordeon';
import Notation from '../components/Notation';
import '../styles/Fiches.css'

export default function Hebergements() {
	
	// Déclare l'état initial pour imageSlider et la fonction setImageSlider pour la modifier, ensuite de lui préciser la valeur par défaut []
	const [imageSlider, setImageSlider] = useState([]);

	// Récupère l'id
	const identifiantLogement = useParams('id').id;
	const données = datas.filter(data => data.id === identifiantLogement);
	
	// useEffect pour déclencher l'action
	// La fonction setImageSlider est modifier avec les photos correspondantes à chaque id
	useEffect(() => {
		const données = datas.filter(data => data.id === identifiantLogement);
		// pictures = photos des logements
		setImageSlider(données[0].pictures);
	}, [identifiantLogement]);

	// Sa sert pour afficher les données
	const nom = données[0].host.name.split(' '); 
	const notation = données[0].rating;
	const description  = données[0].description;
	const equipements = données[0].equipments;

	return (
		<>

      	{/*Insére carrousel, imageSlider est la fonction de l'état initial*/}
		<Slider imageSlider={imageSlider}/>

		<div className="accomodation">

			<div className="accomodation_content">

				<div className="accomodation_content_infos">

            		{/*Affiche titre*/}
					<h1>{données[0].title}</h1>

            		{/*Affiche paragraphe*/}
					<p>{données[0].location}</p>

					<div>
              			{/*Affiche tags*/}
						{données[0].tags.map((tag, index) => {

							return (
								// index est la clée, il permet d'identifier un élément du même type parmis ses frères et soeurs, on affiche les tags
								<button key={index}>{tag}</button>
							)

						})}
					</div>

				</div>

				<div className="accomodation_content_host">
					<div>
						<div className='accomodation_content_host_name'>
                			{/*Affiche nom*/}
							<span>{nom[0]}</span>
							<span>{nom[1]}</span>
						</div>

						{/*Affiche photo*/}
						<img src={données[0].host.picture} alt="client" />
					</div>
							
					<div className="accomodation_content_host_stars">
						<Notation numberStars = {notation} />
					</div>
				</div>

			</div>

			<div className="accomodation_collapse">

				{/*Affiche accordéons*/}
				<div className="accomodation_collapse_item">
					<Accordeon title={'Description'} content={description} />	
				</div>

				<div className="accomodation_collapse_item">
					<Accordeon title={'Équipements'} content={equipements}/>
				</div>	

			</div>

		</div>

		</>
	)
	
}