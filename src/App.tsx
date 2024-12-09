import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchProvider } from "./contexts/SearchContextProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <div className="relative overflow-hidden min-h-screen bg-radial-custom">
          <Header />
          <Outlet />
        </div>
      </SearchProvider>
    </QueryClientProvider>
  );
}

export default App;
