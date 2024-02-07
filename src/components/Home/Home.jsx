// import Jumbotron from "./Jumbotron";
import Type from "./Type";
import codingGif from "../../assets/CodingGif.gif";

function Home() {
  return (
    <section
      id="home"
      className="flex justify-center items-center  mb-10 pb-24 px-16 "
    >
      <div className="mx-5 p-5">
        <h2 className="text-5xl font-extrabold text-slate-400">
          Hello, I'm <span className="text-blue-900 ">Shawn Sidwell</span>
        </h2>
        <Type />
        <p className="text-xl text-slate-500">
          A passionate individual who always thrives to work on end to end
          products which develop sustainable and scalable social and technical
          systems to create impact.
        </p>
      </div>
      <img className="size-7/12 mt-5 p-5" src={codingGif} alt="icon" />
    </section>
  );
}

export default Home;
