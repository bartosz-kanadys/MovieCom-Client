const express = require('express');
const router = express.Router();
const { User } = require('../models/UserModel');


module.exports = {
    async getAll(req, res) {
        try {
            const users = await User.find()
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json({error: "Internal error server"})
        }
    },

    async getById(req, res) {
        try {
            const user = await User.findById(req.params.id)
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({error: "Internal error server"})
        }
    },

    async getByLogin(req, res) {
        try {
            const user = await User.find({login: req.params.login})
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({error: "Internal error server"})
        }
    },

    async update(req, res) {
        try {
            const filter = req.body.filter
            const update = req.body.update
            console.log(filter)
            await User.findOneAndUpdate(filter, update)
            res.status(200).json({msg: "Updated"})
        } catch (error) {
            res.status(500).json({error: "Internal error server"})
        }
    },

    async delete(req, res) {
        try {
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).json({msg: "Usunięto użytkownika"})
        } catch (error) {
            res.status(500).json({error: "Internal error server"})
        }
    },
    

}

