import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import CategoriesNews from "../pages/categoriesNews/CategoriesNews";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
         loader: () => fetch("/news.json").then((res) => res.json()),
      },
      {
        path: "about",
        element: <h2>about</h2>,
      },
      {
        path: "categories/:id", 
        element: <CategoriesNews></CategoriesNews>,
        loader: () => fetch("/news.json").then((res) => res.json()),
      },
    ],
  },
]);
