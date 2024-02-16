import Table from "./Table";
import profilePic from "../../assets/LinkedInPhoto Final.jpg";
import { frameworks, languages, tech } from "./skills";

function About() {
  return (
    <div id="about" className="my-12">
      <div className="flex flex-col items-center md:flex-row md:justify-center md:bg-gradient-to-r from-blue-500 from-10%  bg-[#154482]">
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
              <div className=" text-center text-lg font-normal  md:mx-auto md:py-5 md:px-9 md:size-3/4 md:text-xl text-slate-500">
                I live in Portland, Oregon and I am a huge dog lover with two
                hounds at home. My favorite past times are hiking, traveling and
                coding. I fell in love with programming and dove head first into
                learning everything I could. I am a passionate individual who
                puts their all into everything they do.
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
