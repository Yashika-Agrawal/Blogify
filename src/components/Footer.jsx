import React from "react";
import { Link } from "react-router-dom";

const categories = [
  "Agriculture",      
  "Education",
  "Business",
  "Arts",
  "Entertainment",
  "Technology",
  "Health",
  "Travel",
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Categories */}
        <ul className="flex flex-wrap gap-4 justify-center mb-6">
          {categories.map((category) => (
            <li key={category}>
              <Link
                to={`/posts/categories/${category.toLowerCase()}`}
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <div className="text-center">
          <small className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Yashika Agrawal. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
