import { Link } from "react-router-dom";
import { PiFinnTheHumanFill } from "react-icons/pi";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useContext(UserContext);

  return (
    <nav className="bg-gray-100 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-semibold"
          >
            <PiFinnTheHumanFill className="text-primary text-2xl" />
            <span>Blogify</span>
          </Link>

          {/* Desktop Links */}
          {currentUser?.id  && (
            <ul className="hidden md:flex items-center gap-6">
              <li>
                <Link to="/authors" className="nav-link">
                  Authors
                </Link>
              </li>
              <li>
                <Link to="/create" className="nav-link">
                  Create Post
                </Link>
              </li>
              <li>
                <Link to="/profile/1" className="nav-link">
                  Yashika
                </Link>
              </li>
              <li>
                <Link to="/logout" className="nav-link hover:text-red-500">
                  Logout
                </Link>
              </li>
            </ul>
          )}
          {!currentUser?.id  && (
            <ul className="hidden md:flex items-center gap-6">
              <li>
                <Link to="/authors" className="nav-link">
                  Authors
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          )}
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <AiOutlineClose /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 border-t border-gray-00">
          <ul className="flex flex-col px-4 py-3 gap-3">
            <li>
              <Link to="/authors" className="nav-link">
                Authors
              </Link>
            </li>
            <li>
              <Link to="/create" className="nav-link">
                Create Post
              </Link>
            </li>
            <li>
              <Link to="/profile/1" className="nav-link">
                Yashika
              </Link>
            </li>
            <li>
              <Link
                to="/logout"
                className="nav-link text-red-400 hover:text-red-500"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
