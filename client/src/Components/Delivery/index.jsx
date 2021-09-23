import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// Components
import DeliveryCarousal from "./DeliveryCarousal";
import Brand from "./Brand";
import RestaurantCard from "../restaurantCard";

const Delivery = () => {
    const [restaurantList, setRestaurantList] = useState([]);

    const reduxState = useSelector((globalStore) => globalStore.restaurant.restaurants);

    useEffect(() => {
        reduxState.restaurants && setRestaurantList(reduxState.restaurants);
    }, [reduxState.restaurants]);

    return (
        <>
            <DeliveryCarousal />
            <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">Delivery Restaurants in Jaipur</h1>
            <div className="flex flex-wrap justify-between">
                {
                    restaurantList.map((restaurant) => (
                        <RestaurantCard {...restaurant} key={restaurant._id} />
                    ))
                }
            </div>
        </>
    );
};

export default Delivery;

// flex flex-col md:flex-row h-screen w-screen m-3