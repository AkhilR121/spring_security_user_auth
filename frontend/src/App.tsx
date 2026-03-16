import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { AuthProvider } from "./components/AuthProvider";

function App() {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return;
  }

  return (
    <AuthProvider>
      <div className="w-screen h-screen border border-amber-500">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
}

export default App;
