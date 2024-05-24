import Header from "./components/Header"
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="bg-[#FDF7FF] text-[#251C29] dark:bg-[#170D1C] font-sans dark:text-[#F0EDF0]">
      <Header />
      <HeroSection />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App
