import { verifyToken } from "../api/api";
import { useQuery } from "@tanstack/react-query";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem("token");
  const isPublicRoute = window.location.pathname === "/login" || window.location.pathname === "/signup";

  const { isPending, isError, data } = useQuery({
    queryKey: ["auth-check"],
    queryFn: verifyToken,
    retry: false,
    staleTime: 0,
    gcTime: 0,
    enabled: !!token,
  });

  if (!token) {
    if (!isPublicRoute) {
      window.location.href = "/login";
    }
    return <>{children}</>;
  }
  
  if (isError || !data?.authData) {
    localStorage.removeItem("token");
    window.location.href = "/login";
    return null;
  }

  if (isPending) {
    return <div className="text-3xl font-bold">Loading...</div>;
  }

  return <>{children}</>
}
