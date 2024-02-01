import Card from "./Card";

function Projects() {
  return (
    <div id="projects">
      <h2 className="text-center">Projects</h2>
      <h3 className=" text-center text-xs">
        Come see what I have been building.
      </h3>
      <div className="grid grid-cols-3 px-4 pt-6 gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Projects;
