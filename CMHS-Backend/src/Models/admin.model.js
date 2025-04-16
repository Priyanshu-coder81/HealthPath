import mongoose, {mongo, Schema} from "mongoose";

const adminSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    hospitalId : {
        type: Schema.Types.ObjectId,
        ref: "Hospital",
        required : true,
    },
    lastLogin : {
        type: Date,
        default: null,

    }
}, {timestamps: true});

export const Admin = mongoose.model("Admin",adminSchema);