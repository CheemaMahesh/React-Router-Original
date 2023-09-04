import "./styles.css";
import { useState } from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Contact } from "./pages/Contact";

export default function App() {
  const Router=createBrowserRouter([
    {path:"/",element:<Home/>},
    {path:"/list",element:<List/>},
    {path:"/contact",element:<Contact/>}
  ])
  const [page, setPage] = useState("home");
  return (
    // <div className="App">
    //   <Navbar setPage={setPage} />
    //   {page === "home" && <Home />}
    //   {page === "list" && <List />}
    //   {page === "contact" && <Contact />}
    // </div>

    <RouterProvider router={Router}/>
  );
}
