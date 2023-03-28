import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Banner from "../components/banner/banner";
import Card from "../components/card/card";
import logements from "../datas/logements.json"
import "../layout.css"

export default function Home() {
    return (
        <div>
            <Header />
            <div className="layoutInner">
                <Banner />
                <div className="cards">
                    <ul className="cards-list">
                        {logements.map(({id, cover, title, }) => (
                            <Card
                                id={id}
                                cover={cover}
                                title={title}
                            />
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
  }