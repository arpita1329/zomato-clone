import express from "express";
import passport from "passport";
import multer from "multer";

// Database Models
import { ImageModel } from "../../database/allModels";

// Utilities
import { s3Upload } from "../../Utils/AWS/s3";

const Router = express.Router();

// Multer Config
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*
    Route           /
    Description     Uploads given image to s3 bucket, & saves file link to mongodb
    Params          none
    Access          PUBLIC
    Method          Post
*/
Router.post("/", upload.single("file",4), async(req,res) => {
    try {
        const file = req.file;

        // S3 bucket options
        const bucketOptions = {
            Bucket: "arpita-1329",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read"          // Access Control List
        };

        const  uploadImage = await s3Upload(bucketOptions);

        return res.status(200).json({ uploadImage });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;
