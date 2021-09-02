import React from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// Components
import FloatMenuBtn from "../../Components/restaurant/Order-Online/FloatMenuBtn";
import FoodList from "../../Components/restaurant/Order-Online/FoodList";
import MenuListContainer from "../../Components/restaurant/Order-Online/MenuListContainer";

const OrderOnline = () => {
    return (
        <>
            <div className="w-full h-screen flex">
                <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen md:block w-1/4">
                    <MenuListContainer />
                    <MenuListContainer />
                </aside>
                <div className="w-full px-3 md:w-3/4">
                    <div className="pl-3 mb-4">
                        <h2 className="text-xl font-semibold">Order Online</h2>
                        <h4 className="flex items-center gap-2 font-light text-gray-500"> <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min </h4>
                    </div>
                    <section className="flex h-screen overflow-y-scroll flex-col gap-3 md:gap-5">  
                        <FoodList 
                            title="Recommended" 
                            items={[
                                {
                                    image: "https://b.zmtcdn.com/data/dish_photos/3a4/d4c6fbb29f424c91f8e79b5426e1c3a4.jpg?fit=around|130:130&crop=130:130;*,*",
                                    price: "253",
                                    rating: 4, 
                                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quo aperiam omnis ipsum, exercitationem in! Doloremque sit numquam, delectus ut, fugit culpa assumenda a voluptatibus provident omnis, ratione vitae ipsum!",
                                    title: "Chinese Platter"
                                },
                            ]}
                        /> 
                    </section>
                </div>
            </div>
            <FloatMenuBtn />
        </>
    );
};

export default OrderOnline;
