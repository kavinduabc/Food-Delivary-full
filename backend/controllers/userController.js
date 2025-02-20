import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export async function userRejistration(req, res) {
    try {
        // Get user data from request body
        const data = req.body;

        // Check if required fields exist
        if (!data.username || !data.email || !data.password || !data.role) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Hash the password
        data.password = bcrypt.hashSync(data.password, 10);

        // Create a new user instance
        const newUser = new User(data);

        // Save the new user
        await newUser.save();

        res.json({ message: "User registered successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "User registration failed", details: error.message });
    }
}
