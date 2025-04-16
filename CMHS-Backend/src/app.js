import express from "express";

const app = express();

app.use(cors());

app.use(express.json({ limit: "10kb" }));

app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use(cookieParser());

export {app};