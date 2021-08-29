import React from "react";
import {BsStarFill, BsStarHalf, BsStar} from "react-icons/bs";
import ReactStars from "react-rating-stars-component";

const NutritionCard = (props) => {

    return (
        <div className="w-full p-4 md:w-1/2 lg:w-1/3">
          <div className="w-full h-full bg-white rounded-2xl shadow-lg">
            <div className={`w-full p-4 h-56 rounded-t-2xl bg-${props.bg}-100`}>
                <img src={props.image} 
                     alt="suppliments"
                     className="w-full h-full"
                />
            </div>
           <div className="p-3 flex flex-col gap-3">
              <div className="flex mt-2 items-center gap-3">
                <div className="w-4 h-4">
                    <img src="data:image/png;base64,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"
                         alt="veg" 
                         className="w-full h-full"
                    />
                </div>
                <ReactStars
                    count={5}
                    // onChange={ratingChanged}
                    size={16}
                    isHalf={true}
                    value={3.5}
                    emptyIcon={<BsStar />}
                    halfIcon={<BsStarHalf />}
                    fullIcon={<BsStarFill />}
                    activeColor="#ffd700"
                />
                <span className="text-gray-400">15</span>
              </div>
              <h3 className="text-xl font-bold text-gray-700">Burn - Weight Balance</h3>
              <p className="text-sm font-light text-gray-600">This formula with VFill™ technology will help improve metabolism and support fat burn.</p>
              <div className="mt-4">
                  <hr />
              </div>
              <div>
                    <span>
                        <s className="text-gray-300 font-light mr-3">₹600</s>
                        <strong>₹320</strong>
                  </span>
                  <p>Monthly pack - 30 capsules</p>
              </div>
           </div>
          </div>
        </div>
    );
};

export default NutritionCard;
