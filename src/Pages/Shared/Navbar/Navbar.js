import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);    
    const isActiveTrue = "font-medium tracking-wide text-white ";

    return (
      <h2>This is navbar</h2>
    );
};

export default Navbar;