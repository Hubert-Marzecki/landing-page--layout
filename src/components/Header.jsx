import { ReactComponent as EmpressiaLogo } from "../assets/header/logo-empressiaColor.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const classOpen =
    "w-full flex-grow lg:flex lg:items-center lg:w-auto  lg:block pt-6 lg:pt-0";
  const classHidden =
    "w-full flex-grow lg:flex lg:items-center lg:w-auto  lg:block pt-6 lg:pt-0 hidden";

  return (
    <Router>
      <div className="bg-white w-full z-50 top-0 fixed h-20">
        <header className="header__section ">
          <nav class=" flex items-center flex-wrap bg-white py-5 fixed w-full z-50 top-0 rounded justify-between  md:text-left">
            <div class="flex items-center flex-shrink-0 text-white ">
              <Link to="#" className="flex items-center  cursor-pointer">
                <EmpressiaLogo className="logo -ml-2" />
              </Link>
            </div>

            <div class="block lg:hidden mr-8 sm:mr-12 md:mr-24 ">
              <Hamburger toggled={isOpen} toggle={setIsOpen} />
            </div>

            <div class={isOpen ? classOpen : classHidden}>
              <ul class="list-reset lg:flex justify-end mr-auto">
                <li class="nav__item">
                  <Link to="#" className="nav__link ">
                    O nas
                  </Link>
                </li>
                <li class="nav__item">
                  <Link to="#" className="nav__link ">
                    Opinie
                  </Link>
                </li>

                <li class="nav__item">
                  <Link to="#" className="nav__link">
                    FAQ
                  </Link>
                </li>

                <li class="nav__item">
                  <Link to="#" className="nav__link ">
                    Galeria
                  </Link>
                </li>

                <li class="nav__item">
                  <Link to="#" className="nav__link">
                    Blog
                  </Link>
                </li>

                <li class=" nav__item">
                  <Link to="#" className="nav__link ">
                    Kontakt
                  </Link>
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
    </Router>
  );
}
