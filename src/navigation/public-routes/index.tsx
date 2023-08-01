import { PublicLayout } from "@/components/layouts/PublicLayout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import { RouteObject } from "react-router-dom";

export const publicRoutes = [
  {
    element: <PublicLayout />,
    children: [
      { path: "/", element: <Home />, index: true },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
] as RouteObject[];
