import { motion, AnimatePresence } from "framer-motion";
import { Bounce } from "react-awesome-reveal";
import logo from "../assets/Shawn Sidwell Diamond Logo.gif";

function SplashScreen() {
  return (
    <Bounce>
      <div className=" w-screen h-screen bg-[#154482] flex justify-center items-center text-4xl font-extrabold">
        <img src={logo} alt="logo" />
      </div>
    </Bounce>
  );
}

export default SplashScreen;
