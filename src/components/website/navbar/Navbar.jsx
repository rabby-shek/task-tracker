import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [navbarClass, setNavbarClass] = useState("");

  useEffect(() => {
    // Scroll event listener for navbar background and shadow
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarClass("navbar-scrolled");
      } else {
        setNavbarClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Intersection Observer for active section
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const navLink = document.querySelector(
            `.nav-link[href="#${entry.target.id}"]`
          );
          if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.remove("active"));
            navLink?.classList.add("active");
          }
        });
      },
      { threshold: 0.3 } // Adjust threshold as needed
    );

    sections.forEach((section) => observer.observe(section));

    // Clean up the observer
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${navbarClass}`} data-aos="fade-down">
      <div className="container">
        <a className="navbar-brand" href="#">
          Task Tracker
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#choose-us">
                Why Choose Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
