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
    <header class="header text-gray-700 body-font bg-yellow-100">
      <div class="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
        <Link to="#" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
        <EmpressiaLogo className="logo"/>
        </Link>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 	flex flex-wrap items-center text-base justify-center ">
          <Link to="#" class="mr-5 hover:text-gray-900 cursor-pointer">O mnie</Link>
          <Link to="#" class="mr-5 hover:text-gray-900 cursor-pointer">Opinie</Link>
          <Link to="#" class="mr-5 hover:text-gray-900 cursor-pointer">FAQ</Link>
          <Link to="#" class="mr-5 hover:text-gray-900 cursor-pointer">Galeria</Link>
          <Link to="#" class="mr-5 hover:text-gray-900 cursor-pointer">Blog</Link>
          <Link to="#" class="mr-5 hover:text-gray-900 cursor-pointer">Kontakt</Link>

        </nav>
        <Link to="#">
        <button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
          Zapisz się na wizytę online
        </button>
        </Link>
      </div>
    </header>
    </Router>
  );
}
