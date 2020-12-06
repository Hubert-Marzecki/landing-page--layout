import {ReactComponent as EmpressiaLogo} from '../assets/header/logo-empressiaColor.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function Header() {

  return (
    <Router>
    <header className="header__section ">
      <div className="flex flex-wrap flex-col md:flex-row items-center">
        <Link to="#" className="flex items-center mb-4 md:mb-0 cursor-pointer">
        <EmpressiaLogo className="logo"/>
        </Link>
        <nav class="nav md:mr-auto md:ml-4 md:py-1 md:pl-4 	flex flex-wrap items-centerjustify-center ">
          <Link to="#" className="nav__item  cursor-pointer">O mnie</Link>
          <Link to="#" className="nav__item  cursor-pointer">Opinie</Link>
          <Link to="#" className="nav__item  cursor-pointer">FAQ</Link>
          <Link to="#" className="nav__item cursor-pointer">Galeria</Link>
          <Link to="#" className="nav__item  cursor-pointer">Blog</Link>
          <Link to="#" className="nav__item  cursor-pointer">Kontakt</Link>
        </nav>
        <Link to="#">
        <button className="header__cta__button inline-flex items-center focus:outline-none ">
          Zapisz się na wizytę online
        </button>
        </Link>
      </div>
    </header>
    </Router>
  );
}
