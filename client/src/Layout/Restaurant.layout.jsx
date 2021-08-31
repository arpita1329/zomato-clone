import React from "react";
import {TiStarOutline} from "react-icons/ti";
import {RiDirectionLine, RiShareForwardLine} from "react-icons/ri";
import {BiBookmarkPlus} from "react-icons/bi";
 
// Components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/restaurant/ImageGrid";
import InfoButtons from "../Components/restaurant/InfoButtons";
import RestaurantInfo from "../Components/restaurant/RestaurantInfo";

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
            <RestaurantInfo 
              name="Mumbai Xpress" 
              restaurantRating="3.5" 
              deliveryRating="3.2" 
              cuisine="North Indian, Fast Food, Chinese, Street Food" 
              address="C-Scheme, Jaipur" 
            />
            <div className="my-4 flex flex-wrap gap-3">
              <InfoButtons isActive>
                <TiStarOutline /> Add Review
              </InfoButtons>
              <InfoButtons >
                <RiDirectionLine /> Direction
              </InfoButtons>
              <InfoButtons >
                <BiBookmarkPlus /> Bookmark
              </InfoButtons>
              <InfoButtons >
                <RiShareForwardLine /> Share
              </InfoButtons>
            </div>
        </div>
      </>
    );
};

export default RestaurantLayout;
