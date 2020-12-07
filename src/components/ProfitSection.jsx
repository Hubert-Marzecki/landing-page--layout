import backgroundImage from "../assets/section--profit/illustration-segment-1.png";
import dotsGrid from "../assets/section--profit/illustration-segment.png";
import { ReactComponent as BackgroundImage } from "../assets/section--profit/illustration-segment-1.svg";
import { ReactComponent as DotsGrid } from "../assets/section--profit/illustration-segment.svg";
import skypeIcon from "../assets/section--profit/contact-skype.png";
import whatsAppIcon from "../assets/section--profit/contact-whatsapp.png";

export default function ProfitSection() {
  return (
    <>
      <section className="profit__section relative" data-aos="fade-right">
        <BackgroundImage className="profit-background-image" />
        <div class="mx-auto flex pt-20  items-center justify-center flex-col ">
          <div className="flex profit-social-icon-holder">
            <div className="profit-social-icon">
              <img class="social-icon"  src={skypeIcon} />
            </div>
            <div className="profit-social-icon">
            <img class="social-icon" src={whatsAppIcon} />
            </div>
          </div>

          <div class="text__container ">
            <h2 class="profit__header ">
            Skorzystaj z najszybciej rozwijającej się gałęzi medycyny.
            </h2>
            <p class=" profit__desc ">
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
