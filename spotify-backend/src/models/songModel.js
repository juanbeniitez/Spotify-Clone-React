import mongoose from "mongoose";
import songSquema from "../squemas/songSquema.js";

const songModel = mongoose.models.song || mongoose.model("song", songSquema);


export default songModel;