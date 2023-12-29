import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import gigRoute from "./routes/gig.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import orderRoute from "./routes/order.route.js";
import reviewRoute from "./routes/review.route.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors(
    {
        origin: "http://localhost:5173", 
        credentials: true
    },
    { withCredentials: true }
));

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/gig", gigRoute);
app.use("/api/conversation", conversationRoute);
app.use("/api/order", orderRoute);
app.use("/api/messages", messageRoute);
app.use("/api/review", reviewRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    
    return res.status(errorStatus).send(errorMessage);
})

const PORT = process.env.PORT || 9000;
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    })
    .catch((error) => {
        console.log(error);
    })
