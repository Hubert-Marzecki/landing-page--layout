import { useEffect, useState } from "react";
import closeIcon from "../assets/close.png";
import { Link, BrowserRouter as Router } from "react-router-dom";
export default function CookiesAlert() {
  function setAcceptCookies() {
    localStorage.setItem("cookies", JSON.stringify(true));
    setIsClicked(true);
  }

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className={
        isClicked
          ? "cookie__alert hidden "
          : "cookie__alert inline-flex items-center"
      }
    >
      <p className="alert__text">
        Ta strona korzysta z{" "}
        <Router>
          <Link to="" className="cookies__link">
            ciasteczek.
          </Link>
        </Router>
        &nbsp;Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich
        użycie.
      </p>
      <span>
        <img
          src={closeIcon}
          onClick={() => setAcceptCookies()}
          className="close__tab ml-4 mr-4 sm:ml-4"
        />
      </span>
    </div>
  );
}
