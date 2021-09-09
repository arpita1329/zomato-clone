import express from "express";
import passport from "passport";

// Database Models
import { MenuModel, ImageModel } from "../../database/allModels";

// Validation
import { ValidateMenuId } from "../../validation/menu";

const Router = express.Router();

/*
    Route           /list
    Description     Get all list menu based on id
    Params          _id
    Access          PUBLIC
    Method          Get
*/
Router.get("/list/:_id", async (req,res) => {
    try {
        await ValidateMenuId(req.params);
        const { _id } = req.params;
        const menus = await MenuModel.findById(_id);
        return res.json({ menus }); 
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
    Route           /image
    Description     Get all menu images based on id
    Params          _id
    Access          PUBLIC
    Method          Get
*/
Router.get("/image/:_id", async (req,res) => {
    try {
        await ValidateMenuId(req.params);
        const { _id } = req.params;
        const menus = await ImageModel.findOne(_id);
        return res.json({ menus }); 
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;