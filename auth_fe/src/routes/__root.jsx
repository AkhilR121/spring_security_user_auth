import { createRootRoute, Outlet } from "@tanstack/react-router";
import RootLayout from "../layouts/root-layout/RootLayout";

function RootComponent() {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
}

export const Route = createRootRoute({
    component: RootComponent,
})