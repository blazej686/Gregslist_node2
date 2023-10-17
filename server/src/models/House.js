import { Schema } from "mongoose";

export const HouseSchema = new Schema(
    {
        bedrooms: {
            type: Number,
            required: true
        },
        bathrooms: {
            type: Number,
            required: true
        },
        imgUrl: {
            type: String,
            required: true
        },

        creatorId:
        {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Account'
        },


    },
    { timestamps: true, toJSON: { virtuals: true } },
)