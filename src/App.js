import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Experience from './pages/Experience.jsx';
import Leadership from './pages/Leadership.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';
import Blog from './pages/Blog.jsx';
import Research from './pages/Research.jsx';
import OpenSource from './pages/OpenSource.jsx';
import Memberships from './pages/Memberships.jsx';
import Sidebar from './components/Sidebar.jsx';
import profilePic from './assets/profile-pic.png';
import Resume from './pages/Resume.jsx';

const App = () => (
  <Router>
    <div className="app-container">
      {/* Use Sidebar component with profilePic */}
      <Sidebar profilePic={profilePic} />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/research" element={<Research />} />
          <Route path="/opensource" element={<OpenSource />} />
          <Route path="/memberships" element={<Memberships />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;
