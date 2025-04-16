import mongoose, { Schema } from "mongoose";

const hospitalSchema = new Schema(
  {
    hospitalName: {
      type: String,
      required: true,
      unique: true,
      trim:true,
    },
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    address : {
        type: String,
        required: true,
        
    },
    city : {
        type: String,
        required: true,

    },
    state : {
        type: String,
        required: true,

    },
    pincode : {
        type: String,
        required: true,
    },
    contactNumber : {
        type: String,
        required: true,
    }
  },
  { timestamps: true }
);

export  const Hospital = mongoose.model("Hospital", hospitalSchema);
