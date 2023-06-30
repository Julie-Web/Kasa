// Import
import logo from "../assets/images/LOGO.svg";
import Nav from "../components/Nav";
import "../styles/Header.css";

export default function Header() {

	return (

		<header>

			<figure>
				{/*Insére logo*/}
				<img className="logo" src={logo} alt="logo de l'agence kasa" />
			</figure>

			{/*Insére barre de navigation*/}
			<Nav className="nav" />

		</header>

	);

}