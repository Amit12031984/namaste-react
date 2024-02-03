import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import Body from "./src/component/Body";
import About from "./src/component/About";
import ContactUs from "./src/component/ContactUs";
import Error from "./src/component/Error";
import RestaurantMenu from "./src/component/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/component/Cart";
// import Grosery from "./src/component/Grosery";

const Grosery = lazy(() => import("./src/component/Grosery"));

/*
    - Header
        - Logo
        - Navitems
    - Body
        - Search
        - RestraurantContainer
            - RestraurantCard
                - Img
                - Name of res, Star Rating, cuisine, delivery time
    - Footer
        - Copyright
        - Links
        - Address
        - Contact
*/

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: "Amit Bhadula" }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grosery",
        element: (
          <Suspense fallback={<h1>Loding</h1>}>
            <Grosery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
