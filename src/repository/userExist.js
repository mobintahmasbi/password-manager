import userModel from "../models/user.model";
import { validatePhoneNumber } from "../services/utility";

export default async (phoneNumber) => {
    
    const { status, message } = validatePhoneNumber(phoneNumber)
    if(!status) {
        return {
            status,
            message
        }
    }

    const user = await userModel.findOne({phoneNumber})
    return {
        userData: user
    }
}
