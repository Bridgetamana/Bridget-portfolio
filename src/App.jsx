import Header from "./components/Header"
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="bg-[#EFE5FD] text-[#251C29] dark:bg-[#221C25] font-sans   dark:text-[#F0EDF0]">
      <Header />
      <HeroSection />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App
