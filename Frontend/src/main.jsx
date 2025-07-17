import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { NotFound } from "./page/404.jsx";
import { Home } from "./page/Home.jsx";
const router = createBrowserRouter([
  { path: "*", errorElement: <NotFound /> },
  { path: "/", element: <Home /> },
  { path: "/", element: <NotFound /> },
  { path: "/", element: <NotFound /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
