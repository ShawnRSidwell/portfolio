import { Bounce, Fade } from "react-awesome-reveal";
import logo from "../assets/splash-logo.gif";

function SplashScreen() {
  return (
    <Bounce>
      <div className=" w-screen h-screen text-center text-white flex justify-center items-center text-4xl font-extrabold">
        <img className="shadow-lg" src={logo} alt="logo" />
      </div>
    </Bounce>
  );
}

export default SplashScreen;
