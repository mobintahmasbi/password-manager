export function validatePhoneNumber(phoneNumber) {
    if(phoneNumber == null || phoneNumber == undefined) {
        return {
            status: false,
            message: "phoneNumber can not be empty!!!"
        }
    }
    if(phoneNumber.length != 11) {
        return {
            status: false,
            message: "phoneNumber lenght must be 11"
        }
    }
    if(!phoneNumber.startsWith("09")){
        return {
            status: false,
            message: "phoneNumber must starts with 09"
        }
    }
    if (!/^\d+$/.test(phoneNumber)) {
        return {
          status: false,
          message: "phoneNumber must contain only number",
        }
    }
    return {
        status: true
    }
}