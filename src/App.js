// Import
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Propos from "./pages/Propos";
import Fiches from "./pages/Fiches";
import Erreur from "./pages/Erreur";
import "./styles/index.css";

function App() {

	return (

		<div className="App">
			{/*Insère Header*/}
			<Header />
			<main>
				{/*Composant Routes qui va servir à sélectionner le composant enfant correspondant à la location*/}
				<Routes>
					{/*Le composant Route prend de base plusieurs paramètres :
					- path qui contient l’URL dans notre navigateur qui dirigera vers le composant
					- element qui va permettre de sélectionner le composant à afficher*/}
					<Route path="/Accueil" element={<Accueil />} />
					<Route path="/Propos" element={<Propos />} />
					<Route path="/logement/:id" element={<Fiches />} />
					{/*Toutes les routes qui ne sont pas mentionnées plus haut conduiront à la page d’erreur*/}
					<Route path="*" element={<Erreur />} />
				</Routes>
			</main>
			{/*Insère Footer*/}
			<Footer />
		</div>

	);

}

// Export
export default App;