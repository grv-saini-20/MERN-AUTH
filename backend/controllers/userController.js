import asyncHandler from "express-async-handler";

//@desc Authenticate user/ set token
//@route POST /api/users/auth
//@access Public
const authUser = asyncHandler(async(req, res) => {              //asyncHandler helps to not wrap everything in try catch
    res.status(200).json({ message: "User authenticated" });
});

//@desc register a new user
//@route POST /api/users
//@access Public
const registerUser = asyncHandler(async(req, res) => {              //asyncHandler helps to not wrap everything in try catch
    res.status(201).json({ message: "User registered" });
});

//@desc logout user
//@route POST /api/users/logout
//@access Public
const logoutUser = asyncHandler(async(req, res) => {              //asyncHandler helps to not wrap everything in try catch
    res.status(200).json({ message: "User logged out" });
});

//@desc get user profile
//@route GET /api/users/profile
//@access Private
const getUserProfile = asyncHandler(async(req, res) => {              //asyncHandler helps to not wrap everything in try catch
    res.status(200).json({ message: "User profile data" });
});


//@desc update user profile
//@route PUT /api/users/profile
//@access Private
const updateUserProfile = asyncHandler(async(req, res) => {              //asyncHandler helps to not wrap everything in try catch
    res.status(200).json({ message: "User profile updated" });
});

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile };