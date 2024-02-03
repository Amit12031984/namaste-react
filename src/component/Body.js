import RestaurantCard, { withRestaurantCardLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [filteredResData, setFilteredResData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleTopRes = () => {
    const filteredRes = resData.filter((res) => {
      return res?.info?.avgRating > 4.2;
    });
    setFilteredResData(filteredRes);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchClick = () => {
    const filteredRes = resData.filter((res) => {
      return res?.info?.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredResData(filteredRes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const RestaurantCardLabel = withRestaurantCardLabel(RestaurantCard);

  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.60658&lng=73.784073&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let jsonData = await data.json();
    setResData(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredResData(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return resData.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="mx-4">
      <div className="my-3">
        <input
          className="border border-solid border-black rounded-lg text-center"
          type="text"
          placeholder="Search"
          value={searchText}
          name="search"
          onChange={(e) => {
            handleSearch(e);
          }}
        />
        <button
          className="ml-4 bg-green-100 rounded-lg px-4 py-1"
          onClick={() => {
            handleSearchClick();
          }}
        >
          Search
        </button>
        <button
          className="ml-4 bg-green-100 rounded-lg px-4 py-1"
          onClick={() => {
            handleTopRes();
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="grid grid-cols-5">
        {filteredResData.map((resObj, index) => {
          return (
            <Link
              className="res-text"
              key={resObj.info.id}
              to={`/restaurants/${resObj.info.id}`}
            >
              {resObj.info.isOpen ? (
                <RestaurantCardLabel data={resObj} />
              ) : (
                <RestaurantCard data={resObj} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
