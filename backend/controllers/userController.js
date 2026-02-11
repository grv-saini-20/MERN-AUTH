import asyncHandler from "express-async-handler";

//@desc Authenticate user
//@route POST /api/users/auth
//@access Public
const authUser = asyncHandler(async(req, res) => {              //asyncHandler helps to not wrap everything in try catch
    res.status(200).json({ message: "User authenticated" });
});

export { authUser };