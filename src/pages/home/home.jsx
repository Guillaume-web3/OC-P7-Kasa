import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Banner from "../../components/banner/banner";
import Card from "../../components/card/card";
import "./home.css"


export default function Home() {
    const slogan = "Chez vous, partout et ailleurs"
    return (
        <div className="home">
            <Header />
            <main className="home__main">
                <Banner className="defaultBanner" slogan={slogan}/>
                <Card />                
            </main>
            <Footer />
        </div>
    );
  }