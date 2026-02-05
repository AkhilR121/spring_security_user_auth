import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
// import { AuthProvider } from "./hooks/useAuth.js";
import { router } from "./router/routes.jsx";

const queryClient = new QueryClient();

function AppContent() {
  return <RouterProvider router={router} />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <AuthProvider> */}
        <AppContent />
      {/* </AuthProvider> */}
    </QueryClientProvider>
  );
}

export default App;
