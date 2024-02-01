import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="py-5 text-lg">
      <Typewriter
        options={{
          strings: ["Java Engineer", "React Developer", "Softare Architect"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
