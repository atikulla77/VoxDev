import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo2 from "../../Image/web_logo_6.png";
import { HiOutlineMenu } from "react-icons/hi";

function Navber ()
{
  const navItems = [
    { id: 1, name: "Home", link: "Home" },
    { id: 2, name: "About", link: "About" },
    { id: 3, name: "Skill", link: "Skill" },
    { id: 4, name: "Portfolio", link: "Portfolio" },
    { id: 5, name: "Service", link: "Service" },
    { id: 6, name: "What I Do", link: "WhatIDo" },
  ];

  // Navbar background change on scroll
  const [ color, setColor ] = useState(false);
  const [ activeSection, setActiveSection ] = useState("Home");

  const changeColor = () =>
  {
    if (window.scrollY >= 24)
    {
      setColor(true);
    } else
    {
      setColor(false);
    }
  };

  useEffect(() =>
  {
    window.addEventListener("scroll", changeColor);

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of section is visible
    };

    const observerCallback = (entries) =>
    {
      let currentSection = activeSection;

      entries.forEach((entry) =>
      {
        if (entry.isIntersecting)
        {
          currentSection = entry.target.id;
        }
      });

      // 🔹 Fix: If scroll is at top, set active section to "Home"
      if (window.scrollY < 10)
      {
        currentSection = "Home";
      }

      setActiveSection(currentSection);
    };

    const observers = navItems.map((item) =>
    {
      const element = document.getElementById(item.link);
      if (element)
      {
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(element);
        return observer;
      }
      return null;
    });

    return () =>
    {
      window.removeEventListener("scroll", changeColor);
      observers.forEach((observer) => observer && observer.disconnect());
    };
  }, [ activeSection ]);

  // Mobile Navbar Toggle
  const [ nevMobileVButton, setNevMobileVButton ] = useState(false);

  return (
    <div className="w-full flex fixed top-0 z-50">
      <nav className={`${ color ? "bg-white" : "bg-transparent" } w-full border-b border-dashed border-gray-400`}>
        <div className="mx-auto px-4 flex justify-between items-center h-16">
          <Link to="Home" className="flex items-center cursor-pointer">
            <img src={logo2} className="w-20" alt="Logo" />
          </Link>

          {/* Web Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}
                className={`cursor-pointer px-3 py-2 text-sm font-medium ${ activeSection === item.link ? "text-[#FFAC2A] font-bold" : "text-gray-700"
                  } hover:text-[#FFAC2A]`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <HiOutlineMenu className="text-2xl text-gray-600 cursor-pointer" onClick={() => setNevMobileVButton(!nevMobileVButton)} />
          </div>

          {/* Mobile Menu */}
          {nevMobileVButton && (
            <div className="absolute top-16 right-0 w-40 bg-white border border-gray-300 shadow-md flex flex-col items-center py-2 md:hidden">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={300}
                  className="w-full text-center py-2 text-sm text-gray-800 hover:text-[#FFAC2A] cursor-pointer"
                  onClick={() => setNevMobileVButton(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navber;
