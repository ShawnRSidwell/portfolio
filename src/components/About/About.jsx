import Table from "./Table";
import idCard from "../../assets/id-card.png";
import { frameworks, languages, tech } from "./skills";
function About() {
  return (
    <div id="about" className="my-12">
      <div className="flex flex-row-reverse">
        <div className="flex flex-col p-5 gap-5 mx-7">
          <h2 className="text-4xl font-bold text-center p-5 text-slate-500 capitalize">
            Allow me to <span className="text-blue-900">introduce</span> myself
          </h2>
          <div className="flex flex-col gap-3 text-slate-500 font-medium">
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
        <div className="bg-blue-100 rounded-full flex items-center justify-center shadow-lg	my-11 mx-7">
          <img className="p-5 ml" src={idCard} alt="" />
        </div>
      </div>
      <div className="grid grid-rows-3 justify-center text-xl ">
        <Table header="Languages" data={languages} />
        <Table header="Frameworks and Libraries" data={frameworks} />
        <Table header="Technology" data={tech} />
      </div>
    </div>
  );
}

export default About;
