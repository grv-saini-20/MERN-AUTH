import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//@desc Authenticate user/ set token
//@route POST /api/users/auth
//@access Public
const authUser = asyncHandler(async(req, res) => {              //asyncHandler helps to not wrap everything in try catch
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))) {
        generateToken(res, user._id);
        res.status(201).json({ _id: user._id, name: user.name, email: user.email });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});

//@desc register a new user
//@route POST /api/users
//@access Public
const registerUser = asyncHandler(async(req, res) => {              //asyncHandler helps to not wrap everything in try catch
    const {name, email, password} = req.body;
    const userExists = await User.findOne({ email });

    if(userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        email,
        password
    });

    if(user) {
        generateToken(res, user._id);
        res.status(201).json({ _id: user._id, name: user.name, email: user.email });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

//@desc logout user
//@route POST /api/users/logout
//@access Public
const logoutUser = asyncHandler(async(req, res) => {              //asyncHandler helps to not wrap everything in try catch
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0)
    })
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