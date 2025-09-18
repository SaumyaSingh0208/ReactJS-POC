const RestaurantCard = ({ restaurant }) => {
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } = restaurant.info;

  // Construct image URL if cloudinaryImageId exists
  const imageUrl = cloudinaryImageId
    ? `https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`
    : "https://via.placeholder.com/150";

  return (
    <div className="restaurant-card">
      <img className="restaurant-image" src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>⭐ {avgRating} | {costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;