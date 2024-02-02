import { Schema, model } from "mongoose";

const userSchema = new Schema({
  fullName: { type: String, require: true, min: 6 },
  phoneNumber: { type: String, require: true, min: 11, max: 11 },
  passwords: [{
    siteURL: {
        type: String,
        require: true,
    },
    userName: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
  }],
  OTP: {
    value: {
        type: String,
        default: null
    },
    expireDate: {
        type: Date,
        default: null
    }
  }
});

export default model('User', userSchema)
