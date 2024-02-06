// import Jumbotron from "./Jumbotron";
import Type from "./Type";
import codingGif from "../../assets/CodingGif.gif";

function Home() {
  return (
    <section
      id="home"
      className="flex justify-center items-center mx-auto mb-10 pb-24"
    >
      <div>
        <h2 className="text-4xl font-extrabold py-5 text-slate-500">
          Hello, I'm <span className="text-blue-900 ">Shawn Sidwell</span>
        </h2>
        <p className="text-xl text-slate-600">
          A passionate individual who always thrives to work on end to end
          products which develop sustainable and scalable social and technical
          systems to create impact.
        </p>
        <Type />
      </div>
      <img className="size-7/12 mt-5" src={codingGif} alt="icon" />
    </section>
  );
}

export default Home;
