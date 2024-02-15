import { HeaderProvider } from "./contexts/HeaderContext";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
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
          <Fade>
            <Home />
            <About />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
          </Fade>
        </>
      )}
    </>
  );
}

export default App;
