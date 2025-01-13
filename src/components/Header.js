import React from 'react';

const Header = ({ user }) => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/about">About</a></li>
          {user ? (
            <li><a href="/profile">Profile</a></li>
          ) : (
            <li><a href="/login">Login</a></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;