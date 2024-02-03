import userModel from "../models/user.model.js";
import { validatePhoneNumber } from "../services/utility.js";

export default async (phoneNumber) => {
  const { status, message } = validatePhoneNumber(phoneNumber);
  if (!status) {
    return {
      status,
      message,
    };
  }

  try {
    const user = await userModel.findOne({ phoneNumber });
    return {
      userData: user,
    };
  } catch (error) {
    console.log(error.message);
    return {
        status: false,
        message: "something went wrong try later!!!"
    }
  }
  
};
