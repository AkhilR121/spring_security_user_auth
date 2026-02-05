import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routes";

// Create the router with the route tree
const router = createRouter({ routeTree });

function AppContent() {
  const isAuthenticated = false;
  // if()
  return <RouterProvider router={router} />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
