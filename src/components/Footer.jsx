// Import
import logo from "../assets/images/logo-footer.svg";
import "../styles/Footer.css";

export default function Footer() {
	
	return (

		<footer className="footer">
			{/*Insére logo*/}
			<img src={logo} alt="logo kasa" />
			<p className="copyright">© 2020 Kasa. All rights reserved</p>
		</footer>

	);

}