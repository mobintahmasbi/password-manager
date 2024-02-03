import userExist from "../repository/userExist.js";

export async function sendOTP (req, res) {
    const { phoneNumber } = req.body
    const response = await userExist(phoneNumber)

    res.send(response)
}