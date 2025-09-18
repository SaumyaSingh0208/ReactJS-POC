import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/restaurants";     

const Body = () => {
const [filteredRestaurants , setFilteredRestaurants] = useState(restaurants);
  // const [search, setSearch] = useState("");

  // const filteredRestaurants = restaurants.filter((r) =>
  //   r.info.name.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <div className="body">
      {/* <div className="search">
        <input
          type="text"
          placeholder="Search Restaurants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div> */}
      <div className="filter">
        <button onClick={() => {
          const filteredList = restaurants.filter(
            (r) => r.info.avgRating > 4
          );
          setFilteredRestaurants(filteredList);
        }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurants.map((r) => (
          <RestaurantCard key={r.info.id} restaurant={r} />
        ))}
      </div>
    </div>
  );
};

export default Body;