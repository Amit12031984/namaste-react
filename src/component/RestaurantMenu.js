import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resMenuData, setResMenuData] = useState([]);

  const fetchResMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.86345081202028&lng=81.02116920053959&restaurantId=${resId}`
    );
    const ResMenu = await data.json();
    setResMenuData(ResMenu.data.cards);
  };

  useEffect(() => {
    fetchResMenu();
  }, []);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>You are offline!! Please check your internet connection!</h1>;
  }

  const categoryList =
    resMenuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category, index) => {
        return (
          category?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return (
    <div className="flex justify-center my-2">
      <div className="text-center bg-gray-100 w-[700]">
        <h1 className="my-3 font-bold text-lg">
          {resMenuData[0]?.card?.card?.info?.name}
        </h1>
        <RestaurantCategory data={categoryList} />
      </div>
    </div>
  );
};

export default RestaurantMenu;
