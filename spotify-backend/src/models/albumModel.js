import mongoose from "mongoose";
import { albumSquema } from "../../squemas/albumSquema.js";

const albumModel = mongoose.models.album || mongoose.model("album", albumSquema);

export default albumModel;