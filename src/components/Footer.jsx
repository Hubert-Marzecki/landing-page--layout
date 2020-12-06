import { ReactComponent as EmpressiaLogo } from "../assets/header/logo-empressiaColor.svg";
import znanyLekarzLogo from "../assets/footer/logo_znanylekarzColor.png";
import stars from "../assets/footer/Element/Stars/5.svg";
import { ReactComponent as FacebookIcon } from "../assets/footer/icons/social/facebook.svg";
import { ReactComponent as InstagramIcon } from "../assets/footer/icons/social/instagram.svg";
import { ReactComponent as EmpressiaSygnet } from "../assets/footer/mark-empressiaColor.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__inside__container">
          <div className="  mx-auto flex items-center sm:flex-row flex-col">
            <a className=" flex-grow  items-center md:justify-start justify-center ">
              <EmpressiaSygnet className="empressia__sygnet" />
            </a>
            <img src={stars} className="stars" />
            <span className="rating__data sm:ml-auto sm:mt-0   justify-center sm:justify-start">
              5.0 (163 opinie) na
            </span>
            <img src={znanyLekarzLogo} className="znanyLekarz__logo" />
            <span className="inline-flex sm:ml-auto sm:mt-0  justify-center sm:justify-start">
              <a className="">
                <FacebookIcon className="social__icon social__icon--facebook" />
              </a>
              <a className="">
                <InstagramIcon className="social__icon" />
              </a>
            </span>
          </div>

          <div className="py-12 mx-auto">
            <div className="flex flex-wrap sm:flex-nowrap md:text-left text-center order-first">
              <div className="lg:w-5/12 md:w-1/2 w-full mr-10 ">
                <p>
                  Jeżeli potrzebujesz pomocy związanej ze skórą, włosami,
                  paznokciami lub natury intymnej, jesteś we właściwym miejscu.
                </p>

                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center mt-10">
                  <a className="mr-4">O mnie</a>
                  <a className="mr-4 ">Opinie</a>
                  <a className="mr-4">FAQ</a>
                  <a className="mr-4">Galeria</a>
                  <a className="mr-4">Blog</a>
                  <a className="">Kontakt</a>
                </nav>
              </div>
              <div className="lg:w-3/12 md:w-1/2 w-full ">
                <h2 className=" tracking-widest text-sm mb-3">
                  Pomagamy w przypadku
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="">lorem ipsum dolor sit amet</a>
                  </li>
                  <li>
                    <a className="">dermoscopy</a>
                  </li>
                  <li>
                    <a className="">
                      skin biopsy with a histological examination
                    </a>
                  </li>
                  <li>
                    <a className="">
                      curettage e.g. focus of molluscum contagiosum
                    </a>
                  </li>
                  <li>
                    <a className="">electrocoagulation</a>
                  </li>
                </nav>
              </div>

              <div className="lg:w-4/12 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  Najpopularniejsze wpisy
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Obowiązkowo na lato. 9 rzeczy, które warto wiedzieć o
                      filtrach SPF
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Jak walczyć z trądzikiem w każdym wieku?
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      5 zasad bezpiecznego opalania
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Jak przygotować się do wizyty u dermatologa?
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Skutecznie pozbądź się zaczerwienień na twarzy
                    </a>
                  </li>
                </nav>
              </div>
            </div>
          </div>

          <div className="credits py-8 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex items-center md:justify-start justify-center ">
              <span className="">
                © 2020 Wszelkie prawa zastrzeżone. &nbsp;
              </span>
              <span className="policy__link">Polityka Prywatności</span>
            </a>

            <span className="inline-flex sm:ml-auto sm:mt-0  items-center ">
              Realizacja <EmpressiaLogo className="empressia__logo" />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
