import { useState } from "react";
import RestaurantItemList from "./RestaurantItemList";

const RestaurantCategory = ({ data }) => {
  const [showIndex, setShowIndex] = useState(0);

  const handleClick = (index) => {
    setShowIndex(index);
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
                {index === showIndex && (
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
