import Table from "./Table";
function About() {
  return (
    <div className="py-8">
      <h2 className="text-lg font-bold text-center p-4">About</h2>
      <p className="text-center p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vel,
        maiores et totam eos nobis, culpa tenetur fuga dignissimos hic dolore
        nemo, a tempore quos natus quaerat! Vero, quo! Id?
      </p>
      <div className="grid grid-cols-3 pt-4">
        <Table header="Coding Languages" />
        <Table header="Coding Languages" />
        <Table header="Coding Languages" />
      </div>
    </div>
  );
}

export default About;
