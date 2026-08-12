/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Header from "./Header";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { getCartCount, search, setSearch, setShowSearch } = useContext(ShopContext);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = isHomePage && !scrolled;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      setShowSearch(true);
      navigate('/collection');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <Header />
      <div
        className={`transition-all duration-300 ${
          isTransparent
            ? "bg-transparent border-b-2 border-transparent text-[#FAF8F3]"
            : "bg-[#F7F4EE] border-b-2 border-[#111111] text-[#111111] shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* 1. Custom Stacked Logo (No Subtext) */}
            <div className="flex-shrink-0">
              <Link to="/" className="inline-block py-1">
                <img
                  src={assets.madein_logo}
                  alt="MADEIN"
                  className={`h-10 sm:h-12 w-auto object-contain transition-all ${
                    isTransparent ? "brightness-0 invert" : "hover:opacity-90"
                  }`}
                />
              </Link>
            </div>

            {/* 2. Nav Items */}
            <nav className="hidden lg:flex items-center space-x-8 text-xs font-heading font-bold tracking-widest uppercase">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isTransparent
                      ? `hover:text-[#E3EDE7] ${isActive ? "text-[#FAF8F3] underline underline-offset-8 decoration-2" : "text-[#FAF8F3]"}`
                      : `hover:text-[#063D2C] ${isActive ? "text-[#063D2C] underline underline-offset-8 decoration-2" : "text-[#111111]"}`
                  }`
                }
              >
                HOME
              </NavLink>
              <NavLink
                to="/collection"
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isTransparent
                      ? `hover:text-[#E3EDE7] ${isActive ? "text-[#FAF8F3] underline underline-offset-8 decoration-2" : "text-[#FAF8F3]"}`
                      : `hover:text-[#063D2C] ${isActive ? "text-[#063D2C] underline underline-offset-8 decoration-2" : "text-[#111111]"}`
                  }`
                }
              >
                COLLECTIONS
              </NavLink>
              <NavLink
                to="/collection?exclusive=true"
                className={({ isActive }) =>
                  `inline-flex items-center space-x-1.5 bg-[#063D2C] text-[#FAF8F3] px-3 py-1.5 text-[11px] font-bold tracking-wider hover:bg-[#042B1F] transition-all border ${
                    isTransparent ? "border-[#FAF8F3]/30" : "border-[#063D2C]"
                  }`
                }
              >
                <svg className="w-3 h-3 text-[#FAF8F3]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>ONLY ON MADEIN</span>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isTransparent
                      ? `hover:text-[#E3EDE7] ${isActive ? "text-[#FAF8F3] underline underline-offset-8 decoration-2" : "text-[#FAF8F3]"}`
                      : `hover:text-[#063D2C] ${isActive ? "text-[#063D2C] underline underline-offset-8 decoration-2" : "text-[#111111]"}`
                  }`
                }
              >
                OUR WHY
              </NavLink>
            </nav>

            {/* 3. Right Actions */}
            <div className="flex items-center space-x-6">

              {/* Search */}
              <div className="relative">
                {searchOpen ? (
                  <form onSubmit={handleSearchSubmit} className="flex items-center">
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search wigs, streetwear, eyewear..."
                      className={`text-xs px-3.5 py-2 border-2 focus:outline-none focus:border-[#063D2C] w-48 sm:w-64 font-heading font-medium transition-colors ${
                        isTransparent
                          ? "bg-[#111111]/90 text-[#FAF8F3] border-[#FAF8F3] placeholder:text-[#FAF8F3]/60"
                          : "bg-[#FFFFFF] text-[#111111] border-[#111111]"
                      }`}
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setSearchOpen(false)}
                      className={`ml-2 font-bold text-sm transition-colors ${
                        isTransparent ? "text-[#FAF8F3] hover:text-[#E3EDE7]" : "text-[#111111] hover:text-[#063D2C]"
                      }`}
                    >
                      ✕
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    className={`p-1.5 transition-colors ${
                      isTransparent ? "text-[#FAF8F3] hover:text-[#E3EDE7]" : "text-[#111111] hover:text-[#063D2C]"
                    }`}
                    aria-label="Search"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Account Profile Link */}
              <Link
                to="/login"
                className={`p-1.5 transition-colors ${
                  isTransparent ? "text-[#FAF8F3] hover:text-[#E3EDE7]" : "text-[#111111] hover:text-[#063D2C]"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>

              {/* Shopping Cart */}
              <Link
                to="/cart"
                className={`relative p-1.5 transition-colors ${
                  isTransparent ? "text-[#FAF8F3] hover:text-[#E3EDE7]" : "text-[#111111] hover:text-[#063D2C]"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1.5 bg-[#063D2C] text-[#FAF8F3] text-[10px] font-heading font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </Link>

              {/* Mobile Drawer Trigger */}
              <button
                onClick={() => setNav(!nav)}
                className={`lg:hidden p-1.5 transition-colors ${
                  isTransparent ? "text-[#FAF8F3] hover:text-[#E3EDE7]" : "text-[#111111] hover:text-[#063D2C]"
                }`}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Complete Mobile Fullscreen Modal Navigation */}
      {nav && (
        <div className="fixed inset-0 top-0 left-0 w-full h-full min-h-screen bg-[#F7F4EE] text-[#111111] z-[100] p-6 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center justify-between border-b-2 border-[#111111] pb-4">
              <img
                src={assets.madein_logo}
                alt="MADEIN"
                className="h-10 w-auto object-contain"
              />
              <button
                onClick={() => setNav(false)}
                className="text-[#111111] text-2xl font-bold p-2 border-2 border-[#111111] bg-[#FFFFFF] hover:bg-[#063D2C] hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col space-y-6 mt-8 text-xl font-display font-extrabold tracking-tight uppercase">
              <Link onClick={() => setNav(false)} to="/" className="hover:text-[#063D2C] border-b border-[#111111]/10 pb-3">HOME</Link>
              <Link onClick={() => setNav(false)} to="/collection" className="hover:text-[#063D2C] border-b border-[#111111]/10 pb-3">COLLECTIONS</Link>
              <Link onClick={() => setNav(false)} to="/collection?exclusive=true" className="text-[#063D2C] flex items-center space-x-2 border-b border-[#111111]/10 pb-3">
                <svg className="w-5 h-5 text-[#063D2C]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>ONLY ON MADEIN DROPS</span>
              </Link>
              <Link onClick={() => setNav(false)} to="/about" className="hover:text-[#063D2C] border-b border-[#111111]/10 pb-3">OUR WHY</Link>
              <Link onClick={() => setNav(false)} to="/contact" className="hover:text-[#063D2C] border-b border-[#111111]/10 pb-3">CONTACT & APPLICATION</Link>
            </div>
          </div>

          <div className="mt-8 border-t-2 border-[#111111] pt-6 flex flex-col space-y-3">
            <p className="text-[#063D2C] font-heading font-bold text-sm uppercase">Are you a local vendor?</p>
            <p className="text-xs text-[#555] font-medium">List your wigs, streetwear, eyewear or thrift pieces on MADEIN.</p>
            <Link onClick={() => setNav(false)} to="/contact" className="bg-[#063D2C] text-[#FAF8F3] py-4 text-center font-heading font-bold text-xs uppercase tracking-widest border-2 border-[#063D2C]">
              Become a Vendor
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
