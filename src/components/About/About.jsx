import Table from "./Table";
import idCard from "../../assets/id-card.png";
function About() {
  return (
    <div id="about">
      <div className="flex flex-row-reverse">
        <div className="flex flex-col p-5 gap-5 mx-7">
          <h2 className="text-4xl font-bold text-center p-5">
            Let me introduce myself!
          </h2>
          <div className="flex flex-col gap-3">
            <p className="">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
            </p>
            <p className="">
              My field of Interest's are building new Web Technologies and
              Products and also in areas related to Blockchain.
            </p>
            <p className="">
              Whenever possible, I also apply my passion for developing products
              with Node.js and Modern Javascript Library and Frameworks like
              React.js and Next.js
            </p>
            <p className="">
              I am fluent in classics like C++, Javascript and Go
            </p>
          </div>
        </div>
        <div className="bg-blue-100 rounded-full flex items-center justify-center shadow-lg	my-11">
          <img className="p-5" src={idCard} alt="" />
        </div>
      </div>
      <div className="grid grid-rows-3 text-xl">
        <Table header="Languages" />
        <Table header="Frameworks and Libraries" />
        <Table header="Technology" />
      </div>
    </div>
  );
}

export default About;
