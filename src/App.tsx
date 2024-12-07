import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { SearchProvider } from "./contexts/SearchContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <div className="relative min-h-screen bg-radial-custom">
          <Header />
          <Outlet />
        </div>
      </SearchProvider>
    </QueryClientProvider>
  );
}

export default App;
