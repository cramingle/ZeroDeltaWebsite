import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

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
    { name: 'Technology', href: '/technology' },
    { name: 'Research', href: '/research' },
    { name: 'Careers', href: '/careers' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="fixed w-full bg-dark/95 backdrop-blur-sm z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
          <img src={logo} alt="Zero Delta Logo" className="h-8 w-auto" />
          <span className="text-lg font-medium text-white tracking-wide">ZeroDelta</span>
        </Link>
        
        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-400 hover:text-white">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/basis-trading" 
            className={`text-sm hover:text-white transition-colors ${isActive('/basis-trading')}`}
          >
            BASIS TRADING
          </Link>
          <Link 
            to="/technology" 
            className={`text-sm hover:text-white transition-colors ${isActive('/technology')}`}
          >
            TECHNOLOGY
          </Link>
          <Link 
            to="/research" 
            className={`text-sm hover:text-white transition-colors ${isActive('/research')}`}
          >
            RESEARCH
          </Link>
          <Link 
            to="/careers" 
            className={`text-sm hover:text-white transition-colors ${isActive('/careers')}`}
          >
            CAREERS
          </Link>
          <Link 
            to="/about" 
            className={`text-sm hover:text-white transition-colors ${isActive('/about')}`}
          >
            ABOUT
          </Link>
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
            <Link 
              to="/basis-trading" 
              className={`text-sm hover:text-white transition-colors ${isActive('/basis-trading')}`}
              onClick={closeMenu}
            >
              BASIS TRADING
            </Link>
            <Link 
              to="/technology" 
              className={`text-sm hover:text-white transition-colors ${isActive('/technology')}`}
              onClick={closeMenu}
            >
              TECHNOLOGY
            </Link>
            <Link 
              to="/research" 
              className={`text-sm hover:text-white transition-colors ${isActive('/research')}`}
              onClick={closeMenu}
            >
              RESEARCH
            </Link>
            <Link 
              to="/careers" 
              className={`text-sm hover:text-white transition-colors ${isActive('/careers')}`}
              onClick={closeMenu}
            >
              CAREERS
            </Link>
            <Link 
              to="/about" 
              className={`text-sm hover:text-white transition-colors ${isActive('/about')}`}
              onClick={closeMenu}
            >
              ABOUT
            </Link>
            <button className="text-sm text-gray-300 hover:text-white transition-colors text-left">
              REGISTER
            </button>
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