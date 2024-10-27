import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { CgChevronDown } from "react-icons/cg";

const navbarOptions = [
  {
    label: "Home",
    navigateTo: "/home",
    dropdown: [],
  },
  {
    label: "Lab",
    navigateTo: "/lab",
    dropdown: [],
  },
  {
    label: "Research",
    navigateTo: "/research",
    dropdown: [
      { label: "Research Paper 1", link: "#" },
      { label: "Research Paper 2", link: "#" },
      { label: "Research Paper 3", link: "#" },
    ],
  },
  {
    label: "Projects",
    navigateTo: "/projects",
    dropdown: [
      { label: "Project 1", link: "#" },
      { label: "Project 2", link: "#" },
      { label: "Project 3", link: "#" },
    ],
  },
  {
    label: "About",
    navigateTo: "#about",
    dropdown: [
      { label: "Team", link: "#" },
      { label: "Careers", link: "#" },
    ],
  },
  {
    label: "Contact",
    navigateTo: "/contact",
    dropdown: [],
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 700);
    if (window.innerWidth >= 700) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__logo-container">
        {isMobile && (
          <div className="navbar__hamburger" onClick={toggleMenu}>
            <div className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}>
              <span
                className={`line ${isMenuOpen ? "line1 open" : "line1"}`}
              ></span>
              <span
                className={`line ${isMenuOpen ? "line2 open" : "line2"}}`}
              ></span>
              <span
                className={`line ${isMenuOpen ? "line3 open" : "line3"}`}
              ></span>
            </div>
          </div>
        )}
        <img src={logo} className="navbar__logo" alt="Logo" />
        <h4 className="navbar__name">Dr. Siddhartha Choubey</h4>
      </div>
      <div className={`navbar__menu ${isMobile ? "navbar__menu--hidden" : ""}`}>
        <ul className="navbar__menu-list">
          {navbarOptions.map((item, index) => (
            <li key={index} className="navbar__menu-item">
              <a href={item?.navigateTo}>
                <span>
                  {item?.label}
                  {item?.dropdown.length > 0 && <CgChevronDown />}
                </span>
              </a>
              {item?.dropdown.length > 0 && (
                <ul className="navbar__dropdown">
                  {item.dropdown.map((ele, dropdownIndex) => (
                    <li key={dropdownIndex} className="navbar__dropdown-item">
                      {ele?.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      {isMobile && (
        <div className={`navbar__drawer ${isMenuOpen ? "open" : ""}`}>
          <div className="navbar__drawer-header">
            <div className="navbar__hamburger" onClick={toggleMenu}>
              <div className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}>
                {[...Array(4)].map((_, index) => (
                  <span key={index} className={`line line${index + 1}`}></span>
                ))}
              </div>
            </div>
          </div>
          <ul className="navbar__drawer-list">
            {navbarOptions.map((item, index) => (
              <li key={index} className="navbar__drawer-item">
                {item?.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
