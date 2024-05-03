import Header from "./components/Header"
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="bg-[#F3F3F3] font-sans text-[#261C29]">
      <Header />
      <HeroSection />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App
