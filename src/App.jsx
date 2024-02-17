import { HeaderProvider } from "./contexts/HeaderContext";
import { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <>
          <HeaderProvider>
            <Header />
          </HeaderProvider>
          <Slide triggerOnce={true} duration={750}>
            <Home />
          </Slide>
          <Fade fraction={0.15} duration={1000}>
            <About />
            <Projects />
            <Experience />
            <Contact />
          </Fade>
        </>
      )}
    </>
  );
}

export default App;
