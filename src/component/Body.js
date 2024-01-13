import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [filteredResData, setFilteredResData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleTopRes = () => {
    const filteredRes = resData.filter((res) => {
      return res?.card?.card?.info?.avgRating > 4.2;
    });
    setFilteredResData(filteredRes);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchClick = () => {
    const filteredRes = resData.filter((res) => {
      return res.card.card.info.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    setFilteredResData(filteredRes);
  };

  useEffect(() => {
    fetchData();
    console.log(resData);
  }, []);

  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.86345081202028&lng=81.02116920053959&collection=88750&tags=layout_ux4&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    let jsonData = await data.json();
    setResData(
      jsonData.data.cards.filter((res, index) => {
        return index > 1;
      })
    );
    setFilteredResData(
      jsonData.data.cards.filter((res, index) => {
        return index > 1;
      })
    );
  };

  return resData.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          name="search"
          onChange={(e) => {
            handleSearch(e);
          }}
        />
        <button
          onClick={() => {
            handleSearchClick();
          }}
        >
          Search
        </button>
        <button
          className="btn-topRes"
          onClick={() => {
            handleTopRes();
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restau-container">
        {filteredResData.map((resObj) => {
          return (
            <RestaurantCard key={resObj?.card?.card?.info?.id} data={resObj} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
