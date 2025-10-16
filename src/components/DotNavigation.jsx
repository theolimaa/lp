import React, { useState, useEffect } from 'react';

const DotNavigation = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden md:block">
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-oxford-blue/20"></div>
        <ul className="relative z-10 flex flex-col items-center justify-center space-y-3">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="group flex items-center gap-3"
                  title={section.name}
                >
                  <div
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 border-2 ${
                      isActive
                        ? 'bg-dark-goldenrod border-dark-goldenrod scale-125'
                        : 'bg-antiflash-white border-oxford-blue/30 group-hover:bg-dark-goldenrod group-hover:border-dark-goldenrod'
                    }`}
                  />
                  <span className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-antiflash-white bg-oxford-blue/80 px-2 py-1 rounded-md text-sm whitespace-nowrap ${isActive ? '!opacity-100' : ''}`}>
                    {section.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default DotNavigation;