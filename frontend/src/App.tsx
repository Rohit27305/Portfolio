import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import { useTheme } from "../src/hooks/useTheme";

function App() {
  const { theme } = useTheme();

  return (
    <>
      {theme == "dark" && (
        <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white relative overflow-x-hidden transition-colors duration-300">
          <ParticleBackground />
          <div className="relative z-10">
            <Header />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Blog />
              <Certifications />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
