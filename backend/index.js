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

const allowedOrigin = process.env.FRONTEND_URL
// Middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
// Configure body-parser to handle larger payloads
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json())
app.use(cookieParser());

const corsOptions = {
  origin:
    "https://667846e9769ada9f6e58e0d0--harmonious-pudding-980fa4.netlify.app",
  credentials: true,
};
app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// Routes
app.use("/api",userRoutes) 

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});