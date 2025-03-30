import { useState } from "react";
import RestaurantItemList from "./RestaurantItemList";

const RestaurantCategory = ({ data }) => {
  const [showIndex, setShowIndex] = useState(0);
  const [showItems, setShowItems] = useState(false);

  const handleClick = (index) => {
    setShowIndex(index);
    setShowItems(!showItems);
  };

  return (
    <>
      <div className="my-2 bg-gray-100 mx-2">
        {data?.map((category, index) => {
          return (
            <div key={index}>
              <div
                className="bg-white my-2 flex justify-between"
                onClick={() => handleClick(index)}
              >
                <div className="font-bold text-base">
                  {category?.card?.card?.title +
                    `(${category?.card?.card?.itemCards.length})`}
                </div>
                <div>🔽</div>
              </div>
              <div>
                {index === showIndex && showItems && (
                  <RestaurantItemList items={category?.card?.card?.itemCards} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RestaurantCategory;
