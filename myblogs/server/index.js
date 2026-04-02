const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');

const rateLimit = require('express-rate-limit');

const connectToDB = require('./config/db');

// 🔌 Connect DB
connectToDB();

app.use(helmet());


// 🚦 Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: "Too many requests, please try again later"
});
app.use("/api", limiter);


app.use(cors({
    origin: process.env.CLIENT_URL || "*",
    credentials: true
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

app.get("/", (req, res) => {
    res.status(200).json({ message: "Server running" });
});

app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);


app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});


app.use((err, req, res, next) => {
    console.error("ERROR:", err.stack);

    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});