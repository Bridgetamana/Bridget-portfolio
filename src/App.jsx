import Header from "./components/Header"
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="bg-[#F3F3F3] dark:bg-[#221626] font-sans text-[#261C29] dark:text-[#EEEEF0]">
      <Header />
      <HeroSection />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App
