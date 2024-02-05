// import Jumbotron from "./Jumbotron";
import Type from "./Type";
import codingGif from "../../assets/CodingGif.gif";

function Home() {
  return (
    <section
      id="home"
      className="flex justify-center items-center mx-auto my-24"
    >
      <div className="flex flex-col items-start">
        <h2 className="text-4xl font-extrabold py-5">I'm Shawn Sidwell</h2>
        <p className="mr-5	text-lg">
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
