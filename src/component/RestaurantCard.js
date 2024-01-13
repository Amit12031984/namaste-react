import { RESTAU_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
  return (
    <div className="restau-card">
      <img
        className="restau-logo"
        src={RESTAU_LOGO + props?.data?.card?.card?.info?.cloudinaryImageId}
      />
      <h3>{props?.data?.card?.card?.info?.name}</h3>
      <h4>{props?.data?.card?.card?.info?.cuisines?.join(", ")}</h4>
      <h4>{props?.data?.card?.card?.info?.avgRatingString}</h4>
      <h4>{props?.data?.card?.card?.info?.sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
