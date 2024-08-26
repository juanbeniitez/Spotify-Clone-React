import mongoose from "mongoose";

const albumSquema = mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    bgColour: { type: String, required: true },
    image: { type: String, required: true },
})

export default albumSquema;
