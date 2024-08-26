import { v2 as cloudinary } from 'cloudinary';
import albumModel from '../models/albumModel.js';
import songModel from '../models/songModel.js';

const addAlbum = async (req, res) => {
    try {

        const name = req.body.name;
        const desc = req.body.desc;
        const bgColour = req.body.bgColour;
        const imageFile = req.file;

        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });

        const albumData = {
            name,
            desc,
            bgColour,
            image: imageUpload.secure_url
        }

        const album = albumModel(albumData);
        await album.save();

        res.json({ succes: true, message: "Album added" });

    } catch (error) {
        res.json({ succes: false });
    }
}

const listAlbum = async (req, res) => {

    try {
        const allAlbums = await albumModel.find({});
        res.json({ succes: true, albums: allAlbums });
    } catch (error) {
        res.json({ succes: false });
    }


}

const removeAlbum = async (req, res) => {
    try {
        await albumModel.findByIdAndDelete(req.body.id);
        res.json({ succes: true, message: "Album removed" });
    } catch (error) {
        res.json({ succes: false });
    }
}


export { addAlbum, listAlbum, removeAlbum }