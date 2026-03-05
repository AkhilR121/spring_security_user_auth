import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return;
  }

  return (
    <div className="w-screen h-screen border border-amber-500">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
