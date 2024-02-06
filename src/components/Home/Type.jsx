import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="py-5 text-2xl text-blue-900 tracking-wider font-extrabold">
      <Typewriter
        options={{
          strings: ["Java Engineer", "React Developer", "Software Architect"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
