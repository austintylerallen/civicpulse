import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link className="text-white hover:text-gray-400" to="/">Home</Link>
        </li>
        <li>
          <Link className="text-white hover:text-gray-400" to="/login">Login</Link>
        </li>
        <li>
          <Link className="text-white hover:text-gray-400" to="/register">Register</Link>
        </li>
        <li>
          <Link className="text-white hover:text-gray-400" to="/feedback">Feedback</Link>
        </li>
        <li>
          <Link className="text-white hover:text-gray-400" to="/create-event">Create Event</Link>
        </li>
        <li>
          <Link className="text-white hover:text-gray-400" to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
