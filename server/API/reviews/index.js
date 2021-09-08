import express from "express";
import passport from "passport";

// Database Models
import { ReviewModel } from "../../database/allModels";

// Validation
import { ValidateReviewId, ValidateReviewObject } from "../../validation/reviews";

const Router = express.Router();

/*
    Route           /
    Description     Get all reviews
    Params          resid
    Body            none
    Access          PUBLIC
    Method          Get
*/
Router.get("/:resid", async (req,res) => {
    try {
        const reviews = await ReviewModel.find({ restaurant: req.params.resid });
        return res.json({ reviews });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
    Route           /new
    Description     Add new food review and ratings
    Params          none
    Body            review object
    Access          PUBLIC
    Method          Post
*/
Router.post("/new", async (req,res) => {
    try {
        await ValidateReviewObject(req.body);
        const { reviewData } = req.body;
        await ReviewModel.create( reviewData );
        return res.json({ review : "Successfully created Review "});

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
    Route           /delete
    Description     Delete a review
    Params          _id
    Body            none
    Access          PUBLIC
    Method          Delete
*/
Router.delete("/delete/:_id", async(req,res) => {
    try {
        await ValidateReviewId(req.params);
        const { _id } = req.params;
        await ReviewModel.findOneAndDelete(_id);
        return res.json({ review: "Successfully deleted the review "});

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;