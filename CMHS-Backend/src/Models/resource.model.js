import mongoose , {Schema} from "mongoose";

const resourceSchema = new Schema({
    hospitalId : {
        type: Schema.Types.ObjectId,
        ref:"Hospital",
    },
    bedAvailability: {
        types: Number,
        default: 0,
        required: true,
    },
    icuBeds: {
        types: Number,
        default: 0,
    },
    ventilators: {
        types: Number,
        default: 0,
    },
    oxygenCyclinder: {
        types:Number,
        default: 0,
    }
}, {timestamps: true});

export const Resource = mongoose.model("Resource",resourceSchema);