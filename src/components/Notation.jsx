// Import
import etoileVide from "../assets/images/etoileVide.svg";
import etoileCouleur from "../assets/images/etoileCouleur.svg";

function Notation({numberStars}) {

    // Tableau, liste
    const notes = [1, 2, 3, 4, 5];

    return (

      <div className="notes">
    
          {/*On compare*/}
          {/*map = passe sur chaque élément du tableau*/}
          {notes.map((note) =>
              // Si supérieur
              numberStars >= note ? (
                  <img
                    key={note.toString()}
                    className="etoile"
                    src={etoileCouleur}
                    alt="star"
                  />
                ) : (
                  <img
                    key={note.toString()}
                    className="etoile"
                    src={etoileVide}
                    alt="star"
                  />
              )
          )}
      
      </div>
      
    );
}

// Export
export default Notation;