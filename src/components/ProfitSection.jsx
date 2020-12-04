import backgroundImage from "../assets/section--profit/illustration-segment-1.png";
import dotsGrid from "../assets/section--profit/illustration-segment.png";
import { ReactComponent as BackgroundImage } from "../assets/section--profit/illustration-segment-1.svg";
import { ReactComponent as DotsGrid } from "../assets/section--profit/illustration-segment.svg";
import skypeIcon from "../assets/section--profit/contact-skype.png";
import whatsAppIcon from "../assets/section--profit/contact-whatsapp.png";

export default function ProfitSection() {
  return (
    <>
      <section className="profit__section relative bg-green-100">
        <BackgroundImage className="profit-background-image" />
        <div class=" container mx-auto flex px-5 py-64 items-center justify-center flex-col ">
          <div className="flex profit-social-icon-holder">
            <div className="profit-social-icon">
              <img class="social-icon" alt="hero" src={skypeIcon} />
            </div>
            <div className="profit-social-icon">
            <img class="social-icon" alt="hero" src={whatsAppIcon} />
            </div>
          </div>

          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Skorzystaj z najszybciej rozwijającej się gałęzi medycyny.
            </h1>
            <p class="mb-8 leading-relaxed">
            Teleporada lekarska na naszym serwisie oznacza potwierdzoną skuteczność terapeutyczną, oszczędność czasu i pieniędzy.
            </p>
          </div>
        </div>
      </section>
      {/* <DotsGrid className="absolute" width="100%"/> */}
      {/* <img src={dotsGrid} /> */}
      {/* <img src={dotsGrid} /> */}
    </>
  );
}
