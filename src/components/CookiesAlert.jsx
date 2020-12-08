import { useEffect, useState } from "react";
import closeIcon from "../assets/close.png";

export default function CookiesAlert() {
  function setAcceptCookies() {
    localStorage.setItem("cookies", JSON.stringify(true));
    setIsClicked(true);
  }

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className={isClicked ? "cookie__alert hidden " : "cookie__alert inline-flex items-center"}>
      <p className="alert__text">
        Ta strona korzysta z <a className="cookies__link">ciasteczek.</a> 
        &nbsp;Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie. 
        </p>
        <span>
        <img src={closeIcon} onClick={() => setAcceptCookies()} className="close__tab ml-4 mr-4 sm:ml-4"/>
        </span>
    
    </div>
  );
}
