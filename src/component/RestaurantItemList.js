import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { RESTAU_LOGO } from "../utils/constants";

const RestaurantItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      {items?.map((item, itemIndex) => {
        return (
          <div
            className="flex justify-between border-solid border-0 border-b border-gray-300 my-4 py-2"
            key={itemIndex}
          >
            <div className="text-left">
              <h3 className="font-bold text-sm">{item?.card?.info?.name}</h3>
              <h4 className="font-bold text-xs">
                Rs {item?.card?.info?.price / 100}
              </h4>
              <p className=" text-xs  text-gray-400">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="w-16 relative">
              <img src={RESTAU_LOGO + item?.card?.info?.imageId} />
              <div
                className="w-10 h-6 bg-black text-white border rounded-md absolute top-0 "
                onClick={() => handleAddItem(item)}
              >
                Add+
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RestaurantItemList;
