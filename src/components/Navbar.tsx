import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import LogoWithText from './LogoWithText';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-success' : 'text-gray-400';
  };

  const navigation = [
    { name: 'Basis Trading', href: '/basis-trading' },
    { name: 'Research', href: '/research' },
    { name: 'Careers', href: '/careers' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="fixed w-full bg-dark/95 backdrop-blur-sm z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
          <LogoWithText className="h-8 w-auto" />
        </Link>
        
        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-400 hover:text-white">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link 
              key={item.href}
              to={item.href} 
              className={`text-sm hover:text-white transition-colors ${isActive(item.href)}`}
            >
              {item.name.toUpperCase()}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={() => navigate('/earn-yield')}
            className="px-4 py-2 text-sm bg-success text-dark font-medium hover:bg-success/90 transition-colors"
          >
            EARN YIELD
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark/95 backdrop-blur-sm py-4 px-6">
          <div className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link 
                key={item.href}
                to={item.href} 
                className={`text-sm hover:text-white transition-colors ${isActive(item.href)}`}
                onClick={closeMenu}
              >
                {item.name.toUpperCase()}
              </Link>
            ))}
            <button 
              onClick={() => {
                navigate('/earn-yield');
                closeMenu();
              }}
              className="text-sm bg-success text-dark font-medium hover:bg-success/90 transition-colors px-4 py-2"
            >
              EARN YIELD
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;