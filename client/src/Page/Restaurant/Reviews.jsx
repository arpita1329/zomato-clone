import React, {useState} from "react";

// Components
import ReviewCard from "../../Components/restaurant/Reviews/reviewCard";
import AddReviewCard from "../../Components/restaurant/Reviews/AddReviewCard";

const Reviews = () => {
    const [reviews, setReviews] = useState(["","","",""]);

    return (
        <>
           <div className="w-full flex flex-col md:flex-row relative">
                <div className="flex flex-col gap-3 w-full md:w-8/12">
                    <div className="md:hidden">
                        <AddReviewCard />
                    </div>
                    {
                        reviews.map((review) => (
                            <ReviewCard {...review} />
                        ))
                    }
                </div>
                <aside style={{height: "fit-content"}} className="hidden md:flex items-start md:w-4/12 rounded-xl sticky top-2 bg-white p-3 shadow-md flex flex-col gap-3">
                    <AddReviewCard />
                </aside>
           </div>
        </>
    );
};

export default Reviews;
