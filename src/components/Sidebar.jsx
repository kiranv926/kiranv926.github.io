import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ profilePic }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);
  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <button
        className="sidebar-toggle"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        onClick={handleToggle}
      >
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
      </button>
      <aside className={`sidebar${open ? ' open' : ''}`}>
        <div className="profile-section">
          <img src={profilePic} alt="Profile" className="sidebar-profile-pic" />
          <h2 className="profile-name">Kiran Kumar Vuyyuru</h2>
        </div>
        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>Home</NavLink>
          <NavLink to="/experience" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>Experience</NavLink>
          <NavLink to="/leadership" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>Leadership & Vision</NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>Projects</NavLink>
          <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>Skills</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>Contact</NavLink>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>Blog</NavLink>
          <NavLink to="/research" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>Research</NavLink>
          <NavLink to="/opensource" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>Open Source</NavLink>
          <NavLink to="/memberships" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>Memberships</NavLink>
          <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>Resume</NavLink>
        </nav>
      </aside>
      {open && <div className="sidebar-backdrop" onClick={handleToggle} aria-label="Close navigation menu" />}
    </>
  );
};

export default Sidebar;
