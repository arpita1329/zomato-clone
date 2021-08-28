import React, {useState} from "react";

// Components
import DeliveryCarousal from "./DeliveryCarousal";
import Brand from "./Brand";
import RestaurantCard from "../restaurantCard";

const Delivery = () => {
    const [restaurantList, setRestaurantList] = useState([
        {
            _id: "12345",
            photos: [
                "https://b.zmtcdn.com/data/pictures/chains/4/55634/75d199829038cdcd50e25bf3f43bc5eb_o2_featured_v2.jpg?output-format=webp"
            ],
            name: "Subway",
            cuisine: ["Street Food", "Fast Food", "Tea"],
            averageCost: 100,
            isPro: true,
            isOff: 80,
            durationOfDelivery: 47,
            restaurantReviewValue: 4.1
        },
        {
            _id: "12345-1",
            photos: [
                "https://b.zmtcdn.com/data/pictures/0/19337850/ec5b8cf6656516f4929fb42e24b98dde.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            ],
            name: "Leon Grill",
            cuisine: ["Burger", "Wraps", "Fast Food", "Beverages"],
            averageCost: 200,
            isPro: true,
            isOff: 80,
            durationOfDelivery: 40,
            restaurantReviewValue: 4.1
        },
        {
            _id: "12345-2",
            photos: [
                "https://b.zmtcdn.com/data/pictures/chains/2/18852872/e6889489cc00aeb725c35c05e7875599_o2_featured_v2.jpg?output-format=webp"
            ],
            name: "Main Lassi Shop",
            cuisine: ["Beverages", "Ice Cream"],
            averageCost: 200,
            isPro: true,
            isOff: 80,
            durationOfDelivery: 43,
            restaurantReviewValue: 3.9
        },
        {
            _id: "12345-3",
            photos: [
                "https://b.zmtcdn.com/data/pictures/chains/3/18387423/85a315765de79046319a6bcdaae3416b_o2_featured_v2.jpg?output-format=webp"
            ],
            name: "Ovenstory Pizza",
            cuisine: ["Pizza"],
            averageCost: 200,
            isPro: false,
            isOff: 80,
            durationOfDelivery: 32,
            restaurantReviewValue: 4.1
        },
        {
            _id: "12345-4",
            photos: [
                "https://b.zmtcdn.com/data/pictures/chains/9/53059/b4be86754aaa3289d62b3fffae46b5be_o2_featured_v2.jpg?output-format=webp"
            ],
            name: "Lakeview Milkbar",
            cuisine: ["Desserts", "Cafe", "Fast Food", "Sandwich", "Beverages"],
            averageCost: 200,
            isPro: false,
            isOff: 80,
            durationOfDelivery: 38,
            restaurantReviewValue: 4.1
        },
        {
            _id: "12345-5",
            photos: [
                "https://b.zmtcdn.com/data/pictures/chains/9/18984599/532d08dc891c7869a048b57ea3f79a23_o2_featured_v2.jpg"
            ],
            name: "Slay Coffee",
            cuisine: ["Coffee", "Beverages"],
            averageCost: 400,
            isPro: false,
            isOff: 20,
            durationOfDelivery: 37,
            restaurantReviewValue: 4.1
        },
    ]);
    return (
        <>
            <DeliveryCarousal />
            <div className="flex justify-between flex-wrap">
                {
                    restaurantList.map((restaurant) => (
                        <RestaurantCard {...restaurant} key={restaurant._id} />
                    ))
                }
            </div>
        </>
    )
}

export default Delivery;