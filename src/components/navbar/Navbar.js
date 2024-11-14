import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { CgChevronDown } from "react-icons/cg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const navbarOptions = [
  {
    label: "Home",
    navigateTo: "/home",
    dropdown: [],
  },
  { label: "webinar", navigateTo: "/webinar" },
  { label: "WorkShop/STTP/FDP/Conference", navigateTo: "/workshop" },
  { label: "Guest Lecture", navigateTo: "/guestlecture" },
  {
    label: "Lab",
    navigateTo: "/lab",
    dropdown: [
      { label: "Team", link: "#" },
      { label: "Careers", link: "#" },
    ],
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
    label: "Publications",
    navigateTo: "/projects",
    dropdown: [
      { label: "Project 1", link: "#" },
      { label: "Project 2", link: "#" },
      { label: "Project 3", link: "#" },
    ],
  },
  { label: "Codes/Course Material" },
  {
    label: "About",
    navigateTo: "#about",
    dropdown: [],
  },
  {
    label: "Contact",
    navigateTo: "/contact",
    dropdown: [],
  },
  {
    icon: faUserCircle,
    navigateTo: "/Admin",
    dropdown: [],
  },
  {
    icon: faSearch,
    navigateTo: "",
    dropdown: [],
  },
];

const Navbar = () => {
  const location = useLocation();
  // const [selectedItem, setSelectedItem] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileWidth, setMobileWidth] = useState(800);
  const [isMobile, setIsMobile] = useState(window.innerWidth < mobileWidth);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  const handleResize = () => {
    setIsMobile(window.innerWidth < mobileWidth);
    if (window.innerWidth >= mobileWidth) {
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

  const getSelectedItem = () => {
    const currentPath = location.pathname;
    if (currentPath === "/") return "home";
    return currentPath
    // return navbarOptions.find((option) => option.navigateTo === currentPath)
    //   ?.label;
  };

  const selectedItem = getSelectedItem();

  return (
    <nav
      className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}
      style={{
        "--mobileview-minwidth": mobileWidth,
      }}
    >
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
            <li
              key={index}
              className={`navbar__menu-item ${
                selectedItem.toLowerCase() === item?.navigateTo ? "navbar__menu-item-selected" : ""
              }`}
            >
              <a href={item?.navigateTo?.toString()}>
                <span>
                  {item?.label ||
                    (item?.icon && <FontAwesomeIcon icon={item?.icon} />)}
                  {item?.dropdown?.length > 0 && item?.label && (
                    <CgChevronDown size={10} />
                  )}
                </span>
              </a>
              {item?.dropdown?.length > 0 && (
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
