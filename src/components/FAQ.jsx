import FAQimage from "../assets/section--faq/illustration-faq.png";
import {Collapse} from 'react-collapse';
import { useEffect, useState } from "react";

export default function FQA() {
  const tabsText = [
    {
      tabText: "Jakie są korzyści teleporady lekarskiej na naszym serwisie?",
      colapseText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    }, 
    {
      tabText: "Jakie są korzyści teleporady lekarskiej na naszym serwisie? ",
      colapseText:"2222222222",
      nesetdTitle: "DA",
      nestedText: "NESTED TEXT"
    }, 
    {
      tabText: "Jakie są korzyści teleporady lekarskiej na naszym serwisie? ",
      colapseText:"33333333333"
    }
   ]
  const initialState = []
  initialState.length = tabsText.length;
  initialState.fill(false)

    const [openTabs, setOpenTabs] = useState(initialState);
    const [nestedTabOpen, setNestedTabOpen] = useState(false)

function isOpen(index) {
  let items = [...openTabs];
  let item = items[index];
  items[index] = !item;
  setOpenTabs(items)
}

useEffect(() => {
console.log(openTabs);
},[openTabs])

  return (
    <>
      <div className="faq__section flex ">
        <div className="sm:w-6/12">
          <div className="info__holder">
            <h3 className="faq__header"> Najczęściej zadawane pytania </h3>
            <button className="faq__button">Sprawdź całe FAQ</button>
          </div>
          <div className="img__holder">
          <img className="faq__image" src={FAQimage} />
          </div>
        </div>
        <div className="bg-red-100 w-6/12">

        {tabsText.map((item, index) => {
          return (
            <div>
            <p className="tab" onClick={() => isOpen(index)}>{item.tabText} </p>
            <Collapse isOpened={openTabs[index]} >
            <p className="tab__content">{item.colapseText}</p>

            {item.nesetdTitle !== undefined ? 
            <>
            <p onClick={() => setNestedTabOpen(!nestedTabOpen)} className="nested__tab">{item.nesetdTitle} </p>

             <Collapse isOpened={nestedTabOpen} >
             <p className="tab__content">{item.nestedText}</p>
             </Collapse>
            </> : <> </>}
            </Collapse>
          </div>
          )
          
        })}

        </div>
      </div>
    </>
  );
}
