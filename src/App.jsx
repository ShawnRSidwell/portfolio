import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
