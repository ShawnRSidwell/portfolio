import Jumbotron from "./Jumbotron";
import Type from "./Type";
import codingGif from "../../assets/CodingGif.gif";

function Home() {
  return (
    <div id="home" className="p-36 bg-blue-300 main">
      <Jumbotron headline="Welcome to my site!" image={codingGif}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquid
        alias corrupti in, harum architecto laudantium non exercitationem sit
        totam vel quasi beatae adipisci nam dolor. Veniam nihil praesentium
        fugit.
        <Type />
      </Jumbotron>
    </div>
  );
}

export default Home;
