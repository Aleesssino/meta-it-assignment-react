import logo from "../assets/meta_movie_logo.jpg";
import { NavLink } from "react-router-dom";
import MovieSearch from "./MovieSearch";
import { Dice6, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center text-slate-50 py-3 px-8 md:px-60  drop-shadow-md">
        <NavLink to="/">
          <img
            src={logo}
            alt="meta_movie_logo"
            className="w-6 md:w-12 hover:scale-105 transition-all rounded-sm"
          />
        </NavLink>
        <div>
          <MovieSearch />
        </div>
        <nav>
          <ul className=" gap-6 font-semibold text-xl hidden md:flex">
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

        <Menu
          className="xl:hidden w-6 h-6"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </header>
    </>
  );
};

export default Header;
