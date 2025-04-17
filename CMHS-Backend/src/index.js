import { app } from "./app";
import { connect_db } from "./db";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 8000;

connect_db
  .then(() => {
    app.on("error", () => {
      console.log("Error", error);
      throw error;
    });

    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed!!",err);
  });
