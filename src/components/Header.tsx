import logo from "../assets/meta_movie_logo.jpg";
import { NavLink } from "react-router-dom";
import MovieSearch from "./MovieSearch";
import { Dice6, Menu, X } from "lucide-react";
import { useState } from "react";
import { useSearch } from "../hooks/useSearch";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { searchQuery } = useSearch(); // Access movies from context

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).id === "menu-overlay") {
      setIsMenuOpen(false);
    }
  };

  if (searchQuery && searchQuery.trim() !== "" && isMenuOpen) {
    setIsMenuOpen(false);
  }

  return (
    <>
      <header className="flex justify-between items-center text-slate-50 py-3 px-5 md:px-60 z-50 drop-shadow-md sticky top-0 md:bg-[#0c0c0cd5] ">
        <NavLink to="/">
          <img
            src={logo}
            alt="meta_movie_logo"
            className="w-6 md:w-12 hover:scale-105 transition-all rounded-sm"
          />
        </NavLink>
        <div className="md:pl-60 pl-7">
          <MovieSearch />
        </div>
        <nav>
          <ul className="gap-6 font-semibold text-xl hidden md:flex">
            <li>
              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500"
                    : "text-slate-50 hover:text-sky-300"
                }
              >
                Favorites
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/popular"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500"
                    : "text-slate-50 hover:text-sky-300"
                }
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/popular"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500"
                    : "text-slate-50 hover:text-red-500"
                }
              >
                <Dice6 className="w-8 h-8 md:w-8 md:h-8" />
              </NavLink>
            </li>
          </ul>
        </nav>
        {isMenuOpen ? (
          <X className=" w-6 h-6" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        ) : (
          <Menu
            className="xl:hidden w-6 h-6"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        )}
      </header>

      {isMenuOpen && (
        <div
          id="menu-overlay"
          onClick={handleOverlayClick}
          className="bg-radial-custom backdrop-blur-sm fixed inset-0  bg-black z-30 flex  justify-center"
        >
          <nav className="space-y-6 py-4 px-8  md:hidden pt-16">
            <ul className="flex flex-col items-center text-4xl font-semibold text-slate-50 w-full ">
              <li>
                <NavLink
                  to="/favorites"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500"
                      : "text-slate-50 hover:text-sky-300"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Favorites
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/popular"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500"
                      : "text-slate-50 hover:text-sky-300"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Popular
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/popular"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500"
                      : "text-slate-50 hover:text-sky-300"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Dice6 className="w-8 h-8" />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
