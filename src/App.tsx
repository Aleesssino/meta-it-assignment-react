import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchProvider } from "./contexts/SearchContextProvider";
import { FavoritesProvider } from "./contexts/FavoritesContextProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <FavoritesProvider>
          <div className="relative min-h-screen bg-radial-custom">
            <Header />
            <Outlet />
          </div>
        </FavoritesProvider>
      </SearchProvider>
    </QueryClientProvider>
  );
}

export default App;
