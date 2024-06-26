import { User } from "../../models/userModel.js";

export const userDetails = async (req, res) => {
  try {
    console.log("user id", req.user.id); // Correctly log the user ID

    // Fetch user details from the database
    const user = await User.findById(req.user.id)
  

     res.status(200).json({
      data: user,
      error: false,
      success: true,
      message: "User details",
    });

  } catch (error) {
   
   res.status(400).json({
      message: error.message || err,
      error: true,
      success: false,
    });
  }
};
