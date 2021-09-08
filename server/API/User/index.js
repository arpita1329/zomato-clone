import express from "express";
import passport from "passport";

// Database Models
import { UserModel } from "../../database/allModels";

// Validation
import { ValidateUsertId, ValidateUserData } from "../../validation/user";

const Router = express.Router();

/*
    Route           /
    Description     Get user data
    Params          none
    Access          PUBLIC
    Method          Get
*/
Router.get("/", passport.authenticate("jwt"), async (req,res) => {
    try {
        const { email, fullname, phoneNumber, address } = req.session.passport.user._doc;
        return res.json({ user : { email, fullname, phoneNumber, address } });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
    Route           /:_id
    Description     Get user data
    Params          _id
    Access          PUBLIC
    Method          Get
*/
Router.get("/:_id", async (req,res) => {
    try {
        const user = await UserModel.findById(req.params._id);
        const { fullname } = user;                                                                                                   
        return res.json({ user : { fullname } });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
    Route           /update
    Description     Update user id
    Params          _id
    Body            User data
    Access          PUBLIC
    Method          Put
*/
Router.put("/update/:userId", async (req,res) => {
    try {
        await ValidateUsertId(req.params);
        await ValidateUserData(req.body);
        const { userId } = req.params;
        const { userData } = req.body;
        const updateUserData = await UserModel.findByIdAndUpdate( userId, 
            { $set : userData },
            { new : true }
        );
        return res.json({ user: updateUserData });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;