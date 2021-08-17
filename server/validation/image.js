import joi from "joi";

export const ValidateImages = (image) => {
    const Schema = joi.object({
        file : joi.array().items()
    });
    return Schema.validateAsync(image);
};