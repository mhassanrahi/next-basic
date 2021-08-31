import React from "react";
import { useRouter } from "next/router";

const Review = () => {
    const router = useRouter();
    console.log(router.query);

    const { productId, reviewId } = router.query;

    return (
        <div>
            Review with id {reviewId} about product {productId}.
        </div>
    );
};

export default Review;
