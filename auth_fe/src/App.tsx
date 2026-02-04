import { createRouter, RouterProvider } from '@tanstack/react-router';
import { useAuth } from './hooks/useAuth';

const router = createRouter({  });

const AppContent = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return null; // AuthProvider handles redirect
  }

  return <RouterProvider router={router} />;
};

function App() {
  return (
    <>
      <section className="home-page">
        <AppContent />
        <div>User Login Successful</div>
      </section>
    </>
  );
}

export default App;
