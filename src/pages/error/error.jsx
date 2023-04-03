import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../../components/header/header"
import "./error.css"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header />
      <div className="errorPage">
        <h1 className="errorPage__title">404</h1>
        <p className="errorPage__message">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/home" className="errorPage__homepageLink">Retourner sur la page d'accueil</Link>
      </div>
    </>
  );
}