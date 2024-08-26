import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongdb.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoute.js';

// app config
const app = express();
const port = process.env.PORT || 5000;
// Establece conexión con la base de datos y cloudinary
connectDB();
connectCloudinary();
app.disable("x-powered-by");

// middlewares
app.use(express.json());
app.use(cors());

// initializing routes
app.use("/api/song", songRouter)
app.use("/api/album", albumRouter)

app.get('/', (req, res) => res.send("API Working"))

app.listen(port, () => console.log(`Server started on http://localhost:${port}`))