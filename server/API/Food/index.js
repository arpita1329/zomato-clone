import express from "express";
import passport from "passport";

// Database Models
import { FoodModel } from "../../database/allModels";

// Validation
import { ValidateRestaurantId, Validatecategory } from "../../validation/food";

const Router = express.Router();

/*
    Route           /r
    Description     Get all food based on particular restaurant
    Params          id
    Access          PUBLIC
    Method          Get
*/
Router.get("/r/:_id", async (req,res) => {
    try {
        await ValidateRestaurantId(req.params);
        const {_id} = req.params;
        const foods = await FoodModel.find({ restaurant: _id });
        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
    Route           /:_id
    Description     Get food based on id
    Params          _id
    Access          PUBLIC
    Method          Get
*/
Router.get("/:_id", async (req,res) => {
    try {
        const {_id} = req.params;
        const foods = await FoodModel.findById({ _id });
        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
    Route           /c
    Description     Get all food based on particular category
    Params          category
    Access          PUBLIC
    Method          Get
*/
Router.get("/r/:category", async (req,res) => {
    try {
        await Validatecategory(req.params);
        const {category} = req.params;
        const foods = await FoodModel.find({ 
            category: { $regex: category, $options: "i" } 
        });
        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;