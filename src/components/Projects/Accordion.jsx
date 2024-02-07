import { useState } from "react";
import portfoliopic from "../../assets/LinkedInPhoto Final.jpg";

function AccordionItem({ curOpen, onOpen, title, img, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`shadow-lg  bg-white p-3 rounded-sm mx-8 my-3  text-center flex  flex-col items-center justify-center cursor-pointer ${
        isOpen ? "border-blue-900 border-t-4" : ""
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <p className="font-semibold text-blue-900 ">Frugal Fare</p>
      {isOpen && (
        <>
          <img className="size-1/3 p-5" src={portfoliopic} alt="" />
          <p className="text-slate-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
            deserunt possimus quae distinctio quod quasi ratione neque
            praesentium quas iure accusantium, natus voluptate, eaque ipsum
            provident aperiam eum? Similique, reiciendis?
          </p>
        </>
      )}
    </div>
  );
}

function Accordion() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div>
      <AccordionItem curOpen={curOpen} onOpen={setCurOpen} />
      <AccordionItem />
      <AccordionItem />
      <AccordionItem />
    </div>
  );
}

export default Accordion;
