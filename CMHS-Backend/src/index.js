import { app } from "./app.js";
import connect_db from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT;

connect_db().then(() => {
    app.on("error", () => {
      console.log("Error", error);
      throw error;
    });

    app.listen(PORT || 8000, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed!!", err);
  });
