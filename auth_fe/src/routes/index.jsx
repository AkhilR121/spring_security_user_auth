// import { createRoute } from "@tanstack/react-router";
// import { Route as rootRoute } from "./__root";

import { createFileRoute, redirect } from "@tanstack/react-router";

// // Home route with lazy loading
// export const homeRoute = createRoute({
//     getParentRoute: () => rootRoute,
//     path: "/home",
// }).lazy(() => import("./home.lazy").then((d) => d.Route));

// // Index route that redirects to home
// export const indexRoute = createRoute({
//     getParentRoute: () => rootRoute,
//     path: "/",
// }).lazy(() => import("./home.lazy").then((d) => d.Route));

// // Export route tree
// export const routeTree = rootRoute.addChildren([indexRoute, homeRoute]);

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: '/home' });
  },
});
