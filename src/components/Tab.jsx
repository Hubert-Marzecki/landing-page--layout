import { useState } from "react";
import { Collapse } from "react-collapse";
import NestedTab from "./NestedTab";
import arrow from "../assets/section--faq/arrow.png";

export default function Tab({ tabTitle, tabText, nestedTabs }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="tab " data-aos="zoom-in">
      <div className="flex tab__title" onClick={() => setIsOpen(!isOpen)}>
        <p className="tab__title__text">{tabTitle}</p>
        <div className="tab__arrow__holder">
          <div className={"tab__arrow w-2 ml-10 mt-1"}>
            <img
              className={!isOpen ? "arrow" : "arrow--open"}
              src={arrow}
              alt="ikona strzałki"
            />
          </div>
        </div>
      </div>
      <Collapse isOpened={isOpen} checkTimeout="10">
        <p className="tab__content">{tabText}</p>
        {nestedTabs === null ? null : (
          <NestedTab
            tabTitle={nestedTabs[0].tabTitle}
            tabText={nestedTabs[0].colapseText}
          />
        )}
      </Collapse>
    </div>
  );
}
