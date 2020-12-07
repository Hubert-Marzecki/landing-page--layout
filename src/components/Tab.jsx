import { useState } from "react";
import { Collapse } from "react-collapse";
import NestedTab from './NestedTab';

export default function Tab({tabTitle, tabText, nestedTabs}) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="tab" data-aos="zoom-in">
        <p className="tab__title" onClick={() => setIsOpen(!isOpen)}>
                 {tabTitle}
                </p>
                <Collapse isOpened={isOpen} checkTimeout="10">
                  <p className="tab__content">{tabText}</p>
                  {nestedTabs === null ? null : <NestedTab tabTitle={nestedTabs[0].tabTitle} tabText={nestedTabs[0].colapseText} />}
                </Collapse>
        </div>
    )
}