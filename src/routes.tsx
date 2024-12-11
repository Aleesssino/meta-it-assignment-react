import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";
import YourFavorites from "./pages/YourFavorites";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "favorites", element: <YourFavorites /> },
      { path: "details/:id", element: <MovieDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
