import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="logo">Vikas</div>

            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                <Link to="/" onClick={handleLinkClick}>Home</Link>
                <Link to="/about" onClick={handleLinkClick}>About</Link>
                <Link to="/education" onClick={handleLinkClick}>Education & Projects</Link>
                <Link to="/skills" onClick={handleLinkClick}>Skills</Link>
                <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
            </div>

            <button
                className="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                {menuOpen ? <IoMdClose size={28} /> : <HiOutlineMenuAlt3 size={28} />}
            </button>
        </nav>
    );
};

export default Navbar;
