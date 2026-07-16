import express from "express";

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
