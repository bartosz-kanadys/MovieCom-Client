const express = require('express');
const router = express.Router();
const { User } = require('../models/UserModel');


module.exports = {
    async getAll(req, res) {
        try {
            const users = await User.find()
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json({ error: "Internal error server" })
        }
    },

    async getById(req, res) {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    },

    async getByLogin(req, res) {
        try {
            const user = await User.findOne({ login: req.params.login });
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    },

    async update(req, res) {
        const { filter, update } = req.body;
        if (!filter || !update) {
            return res.status(400).json({ error: "Filter and update data must be provided" });
        }
        try {
            const updatedUser = await User.findOneAndUpdate(filter, update, { new: true });
            if (!updatedUser) {
                return res.status(404).json({ error: "User not found" });
            }
            res.status(200).json({ message: "Updated", user: updatedUser });
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    },

    async delete(req, res) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            res.status(200).json({ message: "User deleted" });
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    },


}

