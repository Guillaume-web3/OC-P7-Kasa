import ImageSlider from "../../components/imageSlider/imageSlider";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Accordion from "../../components/accordion/accordion";
import housings from "../../datas/logements.json"
import "./housingCard.css"

export default function HousingCard() {
    const uri = document.location.pathname; // Récupération du pathname de l'uri courante
    const idStartIndex = uri.lastIndexOf("/") + 1 // Récupération de l'indice du dernier / du pathname
    const id = uri.substring (idStartIndex) // Récupération de l'id dans l'uri

    const housing = housings.find(housing => housing.id === id ) // Extraction des datas concernant le bon id
   
    return (
        <div>
            <Header />
            <main className="housingCard">
                <ImageSlider pictures={housing.pictures} />
                <div className="housingCard__header">
                    <h1>{housing.title}</h1>
                    <h2>{housing.location}</h2>   
                </div>
                <div className="housingCart__hostInfos">

                </div>
                <div className="housingCard__houseInfos">
                    <Accordion className='housingCard__houseInfos__accordion' title="Description" content={housing.description} />
                    <Accordion className='housingCard__houseInfos__accordion' title="Equipements" content= {<ul> {housing.equipments.map((equipment) => ( 
                        <li key={equipment}>{equipment}</li>
                    ))} </ul>} />
                </div>
            </main>    
            <Footer />
        </div>
    );
}