import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Favorites from "./pages/YourFavorites";
import Popular from "./pages/Popular";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "favorites", element: <Favorites /> },
      { path: "popular", element: <Popular /> },
      { path: "details/:id", element: <MovieDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
