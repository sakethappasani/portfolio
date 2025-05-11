import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import ProjectsTimeline from "./components/ProjectTimeline";
import Resume from "./components/Resume";
import "./index.css";

function App() {
  return (
    <>
      <HeroSection />
      <ProjectsTimeline />
      <Certifications />
      <Resume />
      <Contact />
      <footer className="footer">
        <div className="wrapper">
          <p>
            © {new Date().getFullYear()} Saketh Appasani. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
