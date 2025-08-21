import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Route , RouterProvider , createBrowserRouter , createRoutesFromElements } from "react-router-dom";
import Layout from "./layout.jsx";
import { Home, About, Contact, User , Github , GithubLoader } from "./components";

//one way to do this is this
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [{
//       path: '/',
//       element: <Home />
//     },
//   {
//     path: 'about',
//     element: <About />
//   },
//     {
//     path: 'contact',
//     element: <Contact />
//   }
// ]
//   }
// ])

//the another prefered way is this
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element ={<Home />} />
      <Route path="about" element={<About />} />
{/* if you want to create nesting inside any component then you can do it by making the route element which you want to nestchange the self closing
route element to a route element with a closing tag then you can add the nested routes inside it as added inside layout router tag */}
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userId" element={<User />} />
      <Route loader={GithubLoader} path="github" element={<Github />} />
    </Route>
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
