import React from "react";
import {AiTwotoneStar} from "react-icons/ai";

const RestaurantCard = () => {
    return (
        <>
            <div className="bg-white p-2 w-full mb-20 rounded-2xl hover:shadow-lg transition duration-700 ease-in-out md:w-1/2 lg:w-1/3">
                <div className="w-full h-56 lg:h-64 relative ">
                    <div className="absolute w-full bottom-4 flex items-end justify-between">
                        <div className="flex flex-col gap-2 items-start">
                            <span className="bg-zomato-400 text-white px-2 py-1 rounded text-sm">Pro extra 10% off</span>
                            <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">₹80 OFF</span>
                        </div>
                        <span className="bg-white bg-opacity-75 p-1 rounded mr-3">42 min</span>
                    </div>
                    <img src="https://b.zmtcdn.com/data/pictures/chains/4/55634/75d199829038cdcd50e25bf3f43bc5eb_o2_featured_v2.jpg?output-format=webp" alt="food" className="w-full h-full rounded-lg" />
                </div>
                <div className="flex flex-col gap-2 my-2">
                    <div className="flex items-center justify-between"> 
                        <h4 className="text-xl font-medium">Subway</h4>
                        <span className="bg-green-800 text-white text-sm p-1 rounded flex items-center">4.1 <AiTwotoneStar /></span>
                    </div>
                    <div className="flex items-center justify-between text-gray-500">
                        <p>Healthy Food, Wraps, Fast Food</p>
                        <p>₹ 350</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RestaurantCard;
