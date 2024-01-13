import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import Body from "./src/component/Body";
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
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
