import express from "express"
import dotenv from "dotenv";
import cors from "cors"
import databaseConnection from "./config/dataBase.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

dotenv.config();
const app = express();


// Connect to the database
databaseConnection();

// Configure body-parser to handle larger payloads
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json())
app.use(cookieParser());



const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));


// Routes
app.use("/api",userRoutes) 

const PORT = 8080 || process.env.PORT ;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});