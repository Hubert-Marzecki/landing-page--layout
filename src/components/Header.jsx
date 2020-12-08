import {ReactComponent as EmpressiaLogo} from '../assets/header/logo-empressiaColor.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react'

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)
// w-full text-right mr-10 sm:mr-10 md:mr-24
// alternative - moved links to right
    const classOpen = "w-full flex-grow lg:flex lg:items-center lg:w-auto  lg:block pt-6 lg:pt-0"
    const classHidden = "w-full flex-grow lg:flex lg:items-center lg:w-auto  lg:block pt-6 lg:pt-0 hidden"


  return (
    <Router>
      <div className="bg-white w-full z-50 top-0 fixed h-20">

 <header className="header__section ">
<nav class=" flex items-center flex-wrap bg-white py-5 fixed w-full z-50 top-0 rounded justify-between  md:text-left">
		<div class="flex items-center flex-shrink-0 text-white ">
    <Link to="#" className="flex items-center  cursor-pointer">
        <EmpressiaLogo className="logo -ml-2"/>
        </Link>
		</div>

		<div class="block lg:hidden mr-8 sm:mr-12 md:mr-24 ">
      <Hamburger toggled={isOpen} toggle={setIsOpen} />
		</div>

		<div  class={ isOpen? classOpen :  classHidden } >
			<ul class="list-reset lg:flex justify-end mr-auto">
        <li class="nav__item">
        <Link to="#" className="nav__link ">O nas</Link>
       </li>
        <li class="nav__item">
          <Link to="#" className="nav__link ">Opinie</Link>
       </li>
        
          <li class="nav__item">
          <Link to="#" className="nav__link">FAQ</Link>
       </li>
        
          <li class="nav__item">
          <Link to="#" className="nav__link ">Galeria</Link>
       </li>
        
          <li class="nav__item">
          <Link to="#" className="nav__link">Blog</Link>
          </li>
        
          <li class=" nav__item">
          <Link to="#" className="nav__link ">Kontakt</Link>
          </li>
          <li class="nav__item--cta ml-24 self-end">
          <Link to="#">
           <button className=" header__cta__button lg:ml-10">
          Zapisz się na wizytę online
        </button>
        </Link>
        </li>
      </ul>
      
		</div>
 
	</nav>

  </header>
  </div>




    {/* <header className="header__section ">
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
    </header> */}
    </Router>
  );
}
