import React from "react";
import {TiStarFullOutline} from "react-icons/ti";

const ReviewCard = () => {
    return (
        <>
           <div className="my-3 flex flex-col gap-3">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full">
                       <img 
                            src="https://b.zmtcdn.com/data/user_profile_pictures/893/5d120c0fe5a0599fd1764d0d710d0893.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" 
                            alt="avatar"
                            className="w-full h-full rounded-full object-cover" 
                        />
                    </div>
                   <div className="flex flex-col ">
                       <h3 className="text-lg font-semibold">Arpita Dubey</h3>
                       <small className="text-gray-500">5 Reviews &#8226; 3 Followers</small>
                   </div>
                  </div>
                   <button className="text-zomato-400 border border-zomato-400 py-2 px-4 rounded-lg">Follow</button>
               </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1"> 
                            3 <TiStarFullOutline />
                        </span>
                        <h5 className="font-regular uppercase">Delivery</h5>
                        <small className="text-gray-500">3 days ago</small>
                    </div>
                    <div className="w-full ">
                        <p className="w-full text-gray-600 font-light text-base">
                            Midnight mania is my new go-to restaurant for my late-night hunger pangs and midnight parties. Imagine craving for all this at 
                            midnight or after-party, a real fulfilling meal and for the real, you can order all you want from 6 pm until the early morning. 
                            Highly recommended!
                        </p>
                    </div>
                </div>
            
            </div> 
        </>
    );
};

export default ReviewCard;