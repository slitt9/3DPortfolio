import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header flex items-center justify-between px-5 py-3">
      <NavLink
        to="/"
        className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg transform hover:scale-110 transition-all rounded-lg"
        style={{ marginLeft: '-10px' }} 
      >
        <p className="text-white font-bold text-xl">SL</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `transition-all duration-300 hover:text-blue-600 ${
              isActive ? 'text-blue-500 underline' : 'text-black'
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `transition-all duration-300 hover:text-blue-600 ${
              isActive ? 'text-blue-500 underline' : 'text-black'
            }`
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
