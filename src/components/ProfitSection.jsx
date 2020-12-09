import { ReactComponent as BackgroundImage } from "../assets/section--profit/illustration-segment-1.svg";
import skypeIcon from "../assets/section--profit/contact-skype.png";
import whatsAppIcon from "../assets/section--profit/contact-whatsapp.png";

export default function ProfitSection() {
  return (
    <>
      <section className="profit__section relative" data-aos="fade-right">
        <BackgroundImage className="profit-background-image" />
        <div className="mx-auto flex pt-20  items-center justify-center flex-col ">
          <div className="flex profit-social-icon-holder">
            <div className="profit-social-icon">
              <img className="social-icon" src={skypeIcon} alt="logo skype" />
            </div>
            <div className="profit-social-icon">
              <img
                className="social-icon"
                src={whatsAppIcon}
                alt="logo whatsAppIcon"
              />
            </div>
          </div>

          <div className="text__container ">
            <h2 className="profit__header ">
              Skorzystaj z najszybciej rozwijającej się gałęzi medycyny.
            </h2>
            <p className=" profit__desc ">
              Teleporada lekarska na naszym serwisie oznacza potwierdzoną
              skuteczność terapeutyczną, oszczędność czasu i pieniędzy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
