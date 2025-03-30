import { RESTAU_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
  return (
    <div
      data-testid="card"
      className="w-48 h-80 bg-gray-100 hover:bg-gray-300 m-4 rounded-lg"
    >
      <img
        className="w-40 h-32 m-auto py-2 rounded-2xl"
        src={RESTAU_LOGO + props?.data?.info?.cloudinaryImageId}
      />
      <h3 className="font-bold my-3 mx-1">{props?.data?.info?.name}</h3>
      <h4 className="mx-1">{props?.data?.info?.cuisines?.join(", ")}</h4>
      <h4 className="mx-1">{props?.data?.info?.avgRatingString}</h4>
      <h4 className="mx-1">{props?.data?.info?.sla?.slaString}</h4>
    </div>
  );
};

export const withRestaurantCardLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="font-bold absolute ml-4 text-green-600 bg-black">
          {props.data.info.isOpen ? "Opened" : "Closed"}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
