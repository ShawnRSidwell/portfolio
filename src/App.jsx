import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import { HeaderProvider } from "./contexts/HeaderContext";

function App() {
  return (
    <>
      <HeaderProvider>
        <Header />
      </HeaderProvider>
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
