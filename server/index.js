// Importing env variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";

// Config
import googleOAuthConfig from "./config/google.config";

// Microservice Router
import Auth from "./API/Auth";

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

zomato.get("/", (req,res) => res.json ( {message: "Setup Success"} ));

zomato.listen(4000,() => 
    ConnectDB()
    .then(() => console.log("Server is running"))
    .catch(() =>  console.log("Server is running but DB connection is failed"))
);