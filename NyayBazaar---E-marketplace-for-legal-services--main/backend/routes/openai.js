import express from "express";
import axios from "axios";
import { connect, disconnect } from "../utils/connection.js";

const aiRouter = express.Router();

aiRouter.post('/ai', async (req, res) => {
    try {
        await connect();
        const userInput = req.body.userInput; // Get user input from request body

        const response = await axios.post('http://localhost:6000/generate', { input: userInput });

        res.status(200).json({ message: response.data.output });
        console.log(response.data.output);
    } catch (e) {
        console.error(e);
        res.status(400).json({ message: e.message });
    } finally {
        await disconnect();
    }
});

export default aiRouter;