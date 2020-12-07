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

export default function Header() {


// document.getElementById('nav-toggle').onclick = function(){
// 			document.getElementById("nav-content").classList.toggle("hidden");
//     }
    
    const [isOpen, setIsOpen] = useState(false)
    const classOpen = "w-full flex-grow lg:flex lg:items-center lg:w-auto  lg:block pt-6 lg:pt-0"
    const classHidden = "w-full flex-grow lg:flex lg:items-center lg:w-auto  lg:block pt-6 lg:pt-0 hidden"


  return (
    <Router>
      <div className="bg-white w-full z-50 top-0 fixed h-20">

 <header className="header__section ">

<nav class="flex items-center flex-wrap bg-white py-5 fixed w-full z-50 top-0 rounded">
		<div class="flex items-center flex-shrink-0 text-white ">
    <Link to="#" className="flex items-center  cursor-pointer">
        <EmpressiaLogo className="logo -ml-2"/>
        </Link>
		</div>

		<div class="block lg:hidden ml-auto mr-10 sm:mr-4 md:mr-20">
			<button  onClick={() => setIsOpen(!isOpen)} class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
				<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
			</button>
		</div>

		<div  class={ isOpen? classOpen :  classHidden } >
			<ul class="list-reset lg:flex justify-end mr-auto">
        <li class="">
        <Link to="#" className=" inline-block  no-underline  hover:text-underline py-2 lx:px-4 md:px-2 cursor-pointer">O nas</Link>
       </li>
        <li class="">
          <Link to="#" className="inline-block no-underline  hover:text-underline py-2 lx:px-4 md:px-2  cursor-pointer">Opinie</Link>
       </li>
        
          <li class="">
          <Link to="#" className="inline-block  no-underline  hover:text-underline py-2 lx:px-4 md:px-2  cursor-pointer">FAQ</Link>
       </li>
        
          <li class="">
          <Link to="#" className=" inline-block  no-underline  hover:text-underline py-2 lx:px-4 md:px-2 cursor-pointer">Galeria</Link>
       </li>
        
          <li class="">
          <Link to="#" className=" inline-block  no-underline  hover:text-underline py-2 lx:px-4 md:px-2 cursor-pointer">Blog</Link>
          </li>
        
          <li class="xl:mr-36 md:mr-0 lg:mr-10">
          <Link to="#" className=" inline-block  no-underline  hover:text-underline py-2 lx:px-4 md:px-2 cursor-pointer">Kontakt</Link>
          </li>
          <li class="ml-auto self-end">
          <Link to="#">
        <button className=" header__cta__button sm:ml-10">
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
