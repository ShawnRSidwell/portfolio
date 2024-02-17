import Type from "./Type";
import Icon from "../Icon";
import { motion } from "framer-motion";
import { socialLinks } from "./SocialLinks";
import codingGif from "../../assets/CodingGif.gif";

function Home() {
  return (
    <section
      id="home"
      className="flex flex-col mt-10 md:mt-0 md:flex-row justify-center items-center mb-10 pb-12 px-4 md:px-16 h-[80dvh]"
    >
      <div className="mx-5 md:p-5 text-center md:text-left md:w-1/2">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-400">
          Hello, I'm <div className="text-blue-900 md:block">Shawn Sidwell</div>
        </h2>
        <Type />
        <div className="flex justify-center md:justify-start py-3">
          {socialLinks.map((link, i) => (
            <a
              href={link.name}
              target="_blank"
              rel="noreferrer"
              key={i}
              className="px-1"
            >
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Icon icon={link.icon} size={45} useHover={false}></Icon>
              </motion.div>
            </a>
          ))}
        </div>
        <p className="text-lg md:text-xl text-slate-500 md:mt-4">
          Welcome to my portfolio! Here, you'll find a curated selection of my
          finest work, showcasing my passion for coding. Explore, be inspired,
          and let's create something remarkable together.
        </p>
      </div>
      <img
        className="w-full md:w-auto md:mt-5 md:p-5"
        src={codingGif}
        alt="icon"
      />
    </section>
  );
}

export default Home;
