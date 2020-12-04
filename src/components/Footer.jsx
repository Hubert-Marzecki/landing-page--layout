import {ReactComponent as EmpressiaLogo} from '../assets/header/logo-empressiaColor.svg';

export default function Footer () {
    return (
        <>
        <footer class="footer text-gray-700 body-font ">


        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class=" flex-grow title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <EmpressiaLogo />
    </a>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"> 5.0 (163 opinie) na </span>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a class="text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
   
     
    </span>
  </div>


  <div class="py-24 mx-auto">
    <div class="flex  md:text-left text-center order-first">
      <div class="lg:w-5/12 md:w-1/2 w-full px-4">
       <p>Jeżeli potrzebujesz pomocy związanej ze skórą, włosami, paznokciami lub natury intymnej, jesteś we właściwym miejscu.</p>

       <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base mt-10">
            <a class="text-gray-600 hover:text-gray-800 m-2">O mnie</a>
            <a class="text-gray-600 hover:text-gray-800 m-2 ">Opinie</a>
            <a class="text-gray-600 hover:text-gray-800 m-2">FAQ</a>
            <a class="text-gray-600 hover:text-gray-800 m-2">Galeria</a>
            <a class="text-gray-600 hover:text-gray-800 m-2">Blog</a>
            <a class="text-gray-600 hover:text-gray-800 m-2">Kontakt</a>
        </nav>

      </div>
      <div class="lg:w-1/12 md:w-1/2 w-full px-4"> 
      </div>
      <div class="lg:w-3/12 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Pomagamy w przypadku</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">lorem ipsum dolor sit amet</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">dermoscopy</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">skin biopsy with a histological examination</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">curettage e.g. focus of molluscum contagiosum</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">electrocoagulation</a>
          </li>
        </nav>
      </div>
     
      <div class="lg:w-3/12 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Najpopularniejsze wpisy</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">Obowiązkowo na lato. 9 rzeczy, które warto wiedzieć o filtrach SPF</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Jak walczyć z trądzikiem w każdym wieku?</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">5 zasad bezpiecznego opalania</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Jak przygotować się do wizyty u dermatologa?</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Skutecznie pozbądź się zaczerwienień na twarzy</a>
          </li>
        </nav>
      </div>
     
    </div>
  </div>
 
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <span class="ml-3 text-xl">© 2020 Wszelkie prawa zastrzeżone.</span>
      <span class="ml-3 text-xl">Polityka Prywatności</span>
    </a>
   
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    Realizacja <EmpressiaLogo />
    </span>
  </div>

</footer>
        </>
    )
}