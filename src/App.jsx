import About from "./Pages/About";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Projects from "./Pages/Projects";
import SkillsPage from "./Pages/Skills";
import BlogsSection from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import ProjectDetail from "./Pages/ProjectDetail";
import ProjectDetailPage2 from "./Pages/ProjectDetail2";
import ProjectDetailPage3 from "./Pages/ProjectDetail3";
import Certificate from "./Pages/Certificate";
import ProjectDetailPage4 from "./Pages/ProjectDetail4";
import ProjectDetailPage5 from "./Pages/ProjectDetail5";
import ProjectDetailPage6 from "./Pages/ProjectDetail6";
import ProjectDetailPage7 from "./Pages/ProjectDetail7";
import ProjectDetailPage8 from "./Pages/ProjectDetail8";
import ProjectDetailPage9 from "./Pages/ProjectDetail9";
import ProjectDetailPage10 from "./Pages/ProjectDetail10";
import ProjectDetailPage11 from "./Pages/ProjectDetail11";
import ProjectDetailPage12 from "./Pages/ProjectDetail12";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<SkillsPage />} />
        <Route path="/Certificate" element={<Certificate />} />
        <Route path="/Blogs" element={<BlogsSection />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ProjectDetail" element={<ProjectDetail />} />
        <Route path="/ProjectDetail2" element={<ProjectDetailPage2 />} />
        <Route path="/ProjectDetail3" element={<ProjectDetailPage3 />} />
        <Route path="/ProjectDetail4" element={<ProjectDetailPage4 />} />
        <Route path="/ProjectDetail5" element={<ProjectDetailPage5 />} />
        <Route path="/ProjectDetail6" element={<ProjectDetailPage6 />} />
        <Route path="/ProjectDetail7" element={<ProjectDetailPage7 />} />
        <Route path="/ProjectDetail8" element={<ProjectDetailPage8 />} />
        <Route path="/ProjectDetail9" element={<ProjectDetailPage9 />} />
        <Route path="/ProjectDetail10" element={<ProjectDetailPage10 />} />
        <Route path="/ProjectDetail11" element={<ProjectDetailPage11 />} />
        <Route path="/ProjectDetail12" element={<ProjectDetailPage12 />} />
      </Routes>
    </Router>
  );
}

export default App;
