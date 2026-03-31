import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/signin.jsx";
import Home from "./pages/home.jsx";
import Signup from "./pages/signup.jsx";
import Items from "./pages/items.jsx";
import PrtectedRoutes from "./protectedRoutes/protectedRoutes.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/items",
      element: (
        <PrtectedRoutes>
          <Items />
        </PrtectedRoutes>
      ),
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
