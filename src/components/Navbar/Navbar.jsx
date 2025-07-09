import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Navbar = () => {
  const [isOpen, setIsOpen]=useState(false);
  const [activeSection, setActiveSection]=useState("");
  const [isScrolled,setIsScrolled]= useState(false);

  //Check scroll and change the navbar background
  useEffect(()=>{
    const handleScroll=()=>{
      setIsScrolled(window.scrollY >50)
    }
    window.addEventListener("scroll", handleScroll);
    return()=>window.removeEventListener("scroll", handleScroll);
  },[])

  //scroll function 
  const handleMenuItemClick=(sectionId)=>{
    const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
    setActiveSection(sectionId);
    setIsOpen(false);
  }
  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
     { id: "experience", label: "Experience" },
    { id: "project", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact Me" },
  ];
  return (
    <div
  className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
    isScrolled
      ? "backdrop-blur-md shadow-md" // ✅ only blur & shadow, no color
      : ""
  }`}
>


      <div className="text-white py-5 flex justify-between items-center">
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#38bdf8]">&lt;</span>
          <span className="text-white">Harsh</span>
          <span className="text-[#38bdf8]">/</span>
          <span className="text-white">Shukla</span>
          <span className="text-[#38bdf8]">&gt;</span>
        </div>
      
      {/*Desktop Menu*/}
      <ul className="hidden md:flex space-x-8 text-gray-300">
        {menuItems.map((item)=>(
          <li key={item.id} className={`${
            activeSection===item.id? "text-[#38bdf8]" :""
          }`}>
            <button onClick={()=>handleMenuItemClick(item.id)}
              className="hover:text-[#38bdf8] cursor-pointer "
              >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

    {/*Social media icons */}
    <div className="hidden md:flex space-x-4">
   <a 
   href="https://github.com/Harshshukla25"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-[#38bdf8]"
    >
    <FaGithub size={24}/>
   </a>
   <a 
   href="https://www.linkedin.com/in/harsh-shukla-46a675253"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-[#38bdf8]"
    >
    <FaLinkedin size={24}/>
   </a>
    </div>

    {/*Mobile Menu Items */}
    <div className="md:hidden">
      {
        isOpen ? (
        <FiX className="text-3xl text-[#38bdf8] cursor-pointer" onClick={()=> setIsOpen(false)} />
        ) : (
          <FiMenu className="text-3xl text-[#38bdf8] cursor-pointer " onClick={()=> setIsOpen(true)}/>
        )
      }
    </div>
      </div>
    {/*Mobile Menu Iems */}
    {isOpen && (
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[rgba(5,4,20,0.6)] backdrop-blur-md z-50 rounded-lg shadow-lg md:hidden">

        <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
          {menuItems.map((item)=>(
            <li key={item.id} className={`cursor-pointer hover:text-white ${activeSection===item.id ? "text-[#38bdf8]":"" }`}>
              <button onClick={()=> handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
          <div className="flex space-x-4">
<a 
   href="https://github.com/Harshshukla25"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-white"
    >
    <FaGithub size={24}/>
   </a>
   <a 
   href="https://www.linkedin.com/in/harsh-shukla-46a675253"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-white"
    >
    <FaLinkedin size={24}/>
   </a>
          </div>
        </ul>
      </div>
    )}
    </div>
  );
};

export default Navbar;
