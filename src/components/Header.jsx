import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const menuItems = ['Home', 'Services', 'Blog', 'Contact'];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="#">Headless <span className="text-accent-blue">Drupal</span></a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-accent-blue font-medium">
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile/Tablet Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 text-2xl"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center pt-20">
          <nav className="flex flex-col space-y-6 text-xl">
            {menuItems.map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-accent-blue">
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
