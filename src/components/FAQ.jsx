import FAQimage from "../assets/section--faq/illustration-faq.png";
import { useEffect, useState } from "react";
import Tab from "./Tab";
import { Link, BrowserRouter as Router } from "react-router-dom";

export default function FQA() {
  const tabsText = [
    {
      tabTitle: "Jakie są korzyści teleporady lekarskiej na naszym serwisie?",
      colapseText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    },
    {
      tabTitle: "Jakie są korzyści teleporady lekarskiej na naszym serwisie? ",
      colapseText: "",
    },
    {
      tabTitle: "Jakie są korzyści teleporady lekarskiej na naszym serwisie? ",
      colapseText: "33333333333",
    },
  ];

  const nestedTabs = [
    {
      tabTitle: "Jakie są korzyści teleporady lekarskiej na naszym serwisie?",
      colapseText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    },
  ];
  const [tabs, setTabs] = useState(tabsText);

  useEffect(() => {
    console.log(tabs);
  }, [tabs]);

  return (
    <>
      <div className="faq__section flex flex-wrap " data-aos="fade-right">
        <div className="sm:w-6/12">
          <div className="info__holder">
            <h3 className="faq__header"> Najczęściej zadawane pytania </h3>
            <Router>
            <Link to="#">
              <button className="faq__button">Sprawdź całe FAQ</button>
            </Link>
            </Router>
            
          </div>
          <div className="img__holder">
            <img className="faq__image" src={FAQimage} />
          </div>
        </div>
        <div className="sm:w-5/12 lg:ml-8">
          <Tab
            tabTitle={tabsText[0].tabTitle}
            tabText={tabsText[0].colapseText}
            nestedTabs={null}
          />
          <Tab
            tabTitle={tabsText[1].tabTitle}
            tabText={tabsText[1].colapseText}
            nestedTabs={nestedTabs}
          />
          <Tab
            tabTitle={tabsText[2].tabTitle}
            tabText={tabsText[2].colapseText}
            nestedTabs={null}
          />
        </div>
      </div>
    </>
  );
}
