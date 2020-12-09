import { useState } from "react";
import { Collapse } from "react-collapse";

export default function NestedTab({ tabTitle, tabText }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <p className="nested__tab__title" onClick={() => setIsOpen(!isOpen)}>
        {tabTitle}
      </p>

      <Collapse isOpened={isOpen}>
        <p className="nested__tab__content">{tabText}</p>
      </Collapse>
    </div>
  );
}
