import express from "express";
import connectDB from "./config/db.js";
import { config } from "dotenv";

config();
connectDB();

//import Routes
import movieRoutes from "./routes/movieRoutes.js";

const app = express();

//API ROUTES
app.use("/movies", movieRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
const PORT = 5001;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//Handle unhandeled promise rejections
process.on("unhandledRejection", (err) => {
  console.error(`Error: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});

//handle uncaught expectations
process.on("uncaughtException", (err) => {
  console.error(`Error: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});

//Graceful shutdown
process.on("SIGTERM", async () => {
  console.log("SIGTERM received, shutting down gracefully");
  await prisma.$disconnect();
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});
