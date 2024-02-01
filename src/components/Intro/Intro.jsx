import Hero from "./Hero";
import Type from "./Type";
import profilePicture from "../../assets/LinkedInPhoto Final.jpg";

function Intro() {
  return (
    <div className="p-36 bg-blue-300">
      <Hero headline="Welcome to my site!" image={profilePicture}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquid
        alias corrupti in, harum architecto laudantium non exercitationem sit
        totam vel quasi beatae adipisci nam dolor. Veniam nihil praesentium
        fugit.
        {/* <Type /> */}
      </Hero>
    </div>
  );
}

export default Intro;
