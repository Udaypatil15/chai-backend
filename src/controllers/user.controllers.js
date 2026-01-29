import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
    //get user details from fronted
    //validation--->  not empty
    //check if user already exist: username, email
    //check for image,check for avatar
    //uploaf them to cloudinary , avatar
    //create user object -- create entry un db
    //remove password and refresh token field from response
    //check for user creation
    //return res

})

export { registerUser };
