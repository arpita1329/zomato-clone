// Importing env variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";

// Config
import googleOAuthConfig from "./config/google.config";

// Microservice Routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/menu";
import Image from "./API/Image";
import Order from "./API/orders";
import Reviews from "./API/reviews";
import User from "./API/User";

// Database connection
import ConnectDB from "./database/connection";
import passport from "passport";
const zomato = express();

// Application Middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended : false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

// Passport Configuration
googleOAuthConfig(passport);

// Application Routes
zomato.use("/auth",Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image",Image);
zomato.use("/order",Order);
zomato.use("/reviews",Reviews);
zomato.use("/user",User);

zomato.get("/", (req,res) => res.json ( {message: "Setup Success"} ));

zomato.listen(4000,() => 
    ConnectDB()
    .then(() => console.log("Server is running"))
    .catch(() =>  console.log("Server is running but DB connection is failed"))
);