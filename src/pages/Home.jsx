import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Banner from "../components/banner/banner";
import "../layout.css"

export default function Home() {
    return (
        <div>
            <Header />
            <div className="layoutInner">
                <Banner />

            </div>
            <Footer />
        </div>
    );
  }