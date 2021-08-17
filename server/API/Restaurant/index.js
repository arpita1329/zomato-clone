import express from "express";
import passport from "passport";

// Database Models
import { RestaurantModel } from "../../database/allModels";

// Validation
import { ValidateRestaurantCity, ValidateRestaurantSearchString } from "../../validation/restaurant";
import { ValidateRestaurantId } from "../../validation/food";

const Router = express.Router();

/*
    Route           /
    Description     Get all restaurant detail based on city
    Params          None
    Access          PUBLIC
    Method          Get
*/
Router.get("/", async (req,res) => {
    try {
        await ValidateRestaurantCity(req.query);
        const {city} = req.query;
        const restaurants = await RestaurantModel.find({ city });
        return res.json({ restaurants });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
    Route           /
    Description     Get individual restaurant based on id
    Params          id
    Access          PUBLIC
    Method          Get
*/
Router.get("/:_id", async (req,res) => {
    try {
        await ValidateRestaurantId(req.params);
        const {_id} = req.params;
        const restaurant = await RestaurantModel.findOne(_id);
        if(!restaurant)     
            return res.status(404).json({ error: "Restaurant not found!" });
        return res.json({ restaurant });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
    Route           /search
    Description     Get restaurant detail based on search string
    Params          none
    Body            searchString
    Access          PUBLIC
    Method          Get
*/
Router.get("/search", async (req,res) => {
    try {
        await ValidateRestaurantSearchString(req.body);
        const {searchString} = req.body;
        const restaurants = await RestaurantModel.find({ 
            name: { $regex: searchString, $options: "i" } 
        });
        if(!restaurants)     
            return res.status(404).json({ error: `No restaurant matched with ${searchString}` });
        return res.json({ restaurants });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;