import React from "react";

// Components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/restaurant/ImageGrid";

const RestaurantLayout = () => {

    return (
      <>
        <RestaurantNavbar />
        <div className = "container mx-auto px-4 lg:px-20">
            <ImageGrid images={[
                    "https://b.zmtcdn.com/data/pictures/chains/2/18878982/83ffa65c9ab42eb239ab12020dfb8c38.jpg?fit=around|771.75:416.25",
                    "https://b.zmtcdn.com/data/pictures/chains/2/18878982/83ffa65c9ab42eb239ab12020dfb8c38.jpg?fit=around|771.75:416.25",
                    "https://b.zmtcdn.com/data/pictures/chains/2/18878982/83ffa65c9ab42eb239ab12020dfb8c38.jpg?fit=around|771.75:416.25",
                    "https://b.zmtcdn.com/data/pictures/chains/2/18878982/83ffa65c9ab42eb239ab12020dfb8c38.jpg?fit=around|771.75:416.25",
                    "https://b.zmtcdn.com/data/pictures/chains/2/18878982/83ffa65c9ab42eb239ab12020dfb8c38.jpg?fit=around|771.75:416.25"
                ]} 
            />
        </div>
      </>
    );
};

export default RestaurantLayout;
