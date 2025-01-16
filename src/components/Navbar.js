import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import SEO from './SEO';
import logo from '../images/Logomark.svg';

const Navbar = ({ user }) => {
  return (
    <Navbar>
      <SEO
        title="E-Learning Marketplace"
        description="E-Learning Marketplace - Your journey to knowledge starts here."
        keywords="e-learning, online courses, education, learning, marketplace"
      />
      <nav className="bg-white-800 pr-8 pl-8 flex items-center justify-around h-[94px] text-black">
        <div className='flex gap-[40px] justify-center items-center'>
          <div className='flex gap-1 justify-center items-center'>
            <a href="/"><img src={logo} alt="logo" /></a>
            <p className='text-[#974478] font-semibold text-[26px] font-[Axiforma] leading-[42.41px] decoration-skip-ink-none'>Stimulant</p>
          </div>
          <ul className="flex justify-between space-x-4 p-4 font-[Axiforma] text-xl font-normal leading-[31.68px] text-center align-center decoration-skip-ink-none">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? "text-[#974478]" : ""}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => isActive ? "text-[#974478]" : ""}
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => isActive ? "text-[#974478]" : ""}
              >
                Contact
              </NavLink>
            </li>
            {user ? (
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) => isActive ? "text-[#974478]" : ""}
                >
                  Profile
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) => isActive ? "text-[#974478]" : ""}
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <div className="w-[357px] flex h-[58px] items-center p-[8px_16px] border border-[#D1D1D6] rounded-[12px] gap-4 text-[#fff] ml-auto">
            <FontAwesomeIcon icon={faSearch} className="text-[#D1D1D6]" />
            <input
              type="text"
              placeholder="Find anything"
              className="bg-transparent border-none outline-none text-placeholder-custom w-full placeholder-custom"
              onFocus={(e) => e.target.placeholder = ''}
              onBlur={(e) => e.target.placeholder = 'Find anything'}
            />
          </div>
          <button
            type="button"
            className="bg-[#974478] text-[#fff] font-axiforma font-semibold text-[20px] leading-[32.62px] h-[58px] w-[160px] rounded-[12px] transition-transform transform hover:scale-105 active:scale-95"
            style={{ textUnderlinePosition: 'from-font', textDecorationSkipInk: 'none' }}
          >
            Get started
          </button>
        </div>
      </nav>
    </Navbar>
  );
};

export default Navbar;