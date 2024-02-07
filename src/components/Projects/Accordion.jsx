import { useState } from "react";
import portfoliopic from "../../assets/LinkedInPhoto Final.jpg";

const projectList = [
  {
    title: "Frugal Fare",
    img: portfoliopic,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, deserunt possimus quae distinctio quod quasi ratione neque
    praesentium quas iure accusantium, natus voluptate, eaque ipsum
    provident aperiam eum? Similique, reiciendis?`,
  },
  {
    title: "Frugal Fare",
    img: portfoliopic,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, deserunt possimus quae distinctio quod quasi ratione neque
    praesentium quas iure accusantium, natus voluptate, eaque ipsum
    provident aperiam eum? Similique, reiciendis?`,
  },
  {
    title: "Frugal Fare",
    img: portfoliopic,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, deserunt possimus quae distinctio quod quasi ratione neque
    praesentium quas iure accusantium, natus voluptate, eaque ipsum
    provident aperiam eum? Similique, reiciendis?`,
  },
  {
    title: "Frugal Fare",
    img: portfoliopic,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, deserunt possimus quae distinctio quod quasi ratione neque
    praesentium quas iure accusantium, natus voluptate, eaque ipsum
    provident aperiam eum? Similique, reiciendis?`,
  },
];

function AccordionItem({ curOpen, onOpen, num, title, img, children }) {
  const isOpen = curOpen === num;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }
  return (
    <div
      className={`shadow-sm  bg-white p-3 rounded-sm mx-8 my-3  text-center flex  flex-col items-center justify-center cursor-pointer hover:shadow-md  ${
        isOpen ? "border-blue-900 border-t-4" : ""
      }`}
      onClick={handleToggle}
    >
      <p className={` text-blue-900 ${isOpen ? "font-bold" : "font-semibold"}`}>
        {title}
      </p>
      {isOpen && (
        <>
          <img className="size-1/3 p-5" src={img} alt="" />
          <p className="text-slate-600">{children}</p>
        </>
      )}
    </div>
  );
}

function Accordion() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div>
      {projectList.map(({ title, img, description }, i) => (
        <AccordionItem
          key={title}
          num={i}
          title={title}
          img={img}
          curOpen={curOpen}
          onOpen={setCurOpen}
        >
          {description}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;
