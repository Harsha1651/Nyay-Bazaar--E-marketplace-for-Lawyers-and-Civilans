import express from "express";
import lawyer from "../models/lawyer.js";
import { connect, disconnect } from "../utils/connection.js";
import bcrypt from "bcryptjs";
import { createToken } from "../utils/auth.js";

const lawyerRouter = express.Router();

lawyerRouter.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;
        await connect();
        const u = await lawyer.findOne({ username });

        if (u) {
            res.status(200).json({
                message: "User Already Exist!",
                status: false,
                data: {},
            });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newLawyer = new lawyer({ ...req.body, password: hashedPassword });
        await newLawyer.save();
        res.status(200).json({
            message: "Registered successfully!",
            status: true,
            data: {},
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server", status: false });
        console.log(error);
    } finally {
        await disconnect();
    }
});

lawyerRouter.post("/login", async (req, res) => {
    const { username, password } = req.body;
    await connect();
    const u = await lawyer.findOne({ username });

    if (!u) {
        res.status(200).json({
            message: "User Does Not Exist!",
            status: false,
            data: {},
        });
        return;
    }

    const checkPassword = (password==u.password);
    if (!checkPassword)
        return res
            .status(200)
            .json({ message: "Incorrect Password", status: false, data: {} });

    const token = createToken({ username, password });
    res.status(200).json({
        message: "Logged In Successfully!",
        data: { token },
        status: true,
    });
});

lawyerRouter.get("/all", async (req, res) => {
    try {
        await connect();
        const u = await lawyer.find({});
        if (u) {
            res.status(200).json({
                message: "Lawyers data retrieved!",
                status: true,
                data: u,
            });
        } else {
            res.status(200).json({
                message: "Lawyers does not exist!",
                status: false,
                data: {},
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error",
            status: false,
        });
    } finally {
        await disconnect();
    }
});

lawyerRouter.get("/profile/:username", async (req, res) => {
    try {
        await connect();
        const username = req.params.username;
        const u = await lawyer.findOne({ username });
        if (u) {
            res.status(200).json({
                message: "Lawyer data retrieved!",
                status: true,
                data: u,
            });
        } else {
            res.status(200).json({
                message: "Lawyer does not exist!",
                status: false,
                data: {},
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error",
            status: false,
        });
    } finally {
        await disconnect();
    }
});

export default lawyerRouter;
