import Table from "./Table";
import profilePic from "../../assets/LinkedInPhoto Final.jpg";
import { frameworks, languages, tech } from "./skills";

function About() {
  return (
    <div id="about" className="my-12">
      <div className="flex flex-col items-center md:flex-row md:justify-center bg-gradient-to-r from-blue-500 from-10%  to-blue-900">
        <div className=" md:p-12">
          <div className="md:flex md:justify-evenly items-center text-slate-500 font-medium bg-white rounded-xl p-3 m-3 md:p-6 md:m-5">
            <img
              className="rounded-full shadow-lg mx-auto size-1/2 md:h-96 md:w-96 object-cover md:ml-24 border-2 border-blue-900"
              src={profilePic}
              alt="profile picture"
            />

            <div className="md:mx-12">
              <h2 className="text-xl md:text-4xl font-extrabold tracking-wider text-center p-2 md:p-5 text-blue-900 uppercase">
                About Me
              </h2>
              <div className="text-normal md:text-xl text-slate-500">
                I fell in love with programming and I have at least learnt
                something, I think… 🤷‍♂️ My field of interest includes building
                new web technologies and products, as well as areas related to
                blockchain. Whenever possible, I apply my passion for developing
                products with Node.js and modern JavaScript libraries and
                frameworks I am fluent in classics like C++, JavaScript, and Go.
              </div>
              <div className="p-2 md:p-5">
                <Table header="Languages" data={languages} />
                <Table header="Frameworks and Libraries" data={frameworks} />
                <Table header="Technology" data={tech} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
