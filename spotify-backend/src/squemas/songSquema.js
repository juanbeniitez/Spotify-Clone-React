import mongoose from "mongoose"

const songSquema = new mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    album: { type: String, required: true },
    image: { type: String, required: true },
    file: { type: String, required: true },
    duration: { type: String, required: true }

})

export default songSquema;
