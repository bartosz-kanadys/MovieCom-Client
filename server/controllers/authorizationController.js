const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken')
var dotenv = require('dotenv')
dotenv.config()

var { User } = require('../models/UserModel')
var roles = require('../roles')


module.exports = {
    async authenticate(req, res, next) {
        const authHeader = req.headers
        // const token = authHeader['authorization']
        const token = req.cookies.JWT
        console.log(token)
        if (token == null || token == '') return res.status(401).json({ message: 'Unauthorized' })

        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err) return res.status(403).json({ message: 'Token is not valid' })
            req.user = user
            next()
        })
    },

    checkRole(roles) {
        return (req, res, next) => {
            const userRole = req.user.role
            if (roles.includes(userRole)) {
                next()
            } else {
                return res.status(403).json({ message: 'Unauthorized access' });
            }
        }
    },

    async register(req, res, next) {
        try {
            const user = req.body
            const { login, email, password, role } = user

            const isEmailExist = await User.findOne({ email: email })
            const isLoginExist = await User.findOne({ login: login })

            if (isEmailExist) {
                res.json({
                    status: 409,
                    success: false,
                    message: "Email istnieje już w bazie",
                });
                return;
            }

            if (isLoginExist) {
                res.json({
                    status: 409,
                    success: false,
                    message: "Login istnieje już w bazie",
                });
                return;
            }

            const saltRounds = 10;

            bcrypt.genSalt(saltRounds, function (err, salt) {
                bcrypt.hash(password, salt, function (err, hash) {
                    if (err) throw err;
                    let newUser = new User({
                        login: login,
                        email: email,
                        password: hash,
                        role: role
                    })
                    newUser.save()
                });
            });

            res.status(201).json({
                status: 201,
                success: true,
                message: "Zarejestrowano użytkownika"
            });

        } catch (error) {
            res.status(400).json({
                status: 400,
                message: error.message.toString(),
            });
        }
    },

    async login(req, res, next) {
        try {
            const user = req.body
            const { login, password } = user

            const loggingUser = await User.findOne({ login: login })

            if (!loggingUser) {
                res.json({
                    status: 404,
                    success: false,
                    message: "User not found"
                })
                return
            }

            const hashedPass = loggingUser?.password

            bcrypt.compare(password, hashedPass, (err, result) => {
                if (err) {
                    res.json({
                        status: 404,
                        success: true,
                        message: "Login failed",
                    });
                   return
                };
                if (result === true) {
                    const accesToken = jwt.sign(
                        {
                            login: loggingUser?.login,
                            email: loggingUser?.email,
                            role: loggingUser?.role
                        },
                        process.env.TOKEN_SECRET,
                        { expiresIn: "1m" }
                    )

                    res.cookie("JWT", accesToken, {
                        httpOnly: false,
                        secure: false
                    })

                    res.status(200).json({
                        status: 200,
                        success: true,
                        message: "login success",
                        login: loggingUser?.login,
                        token: accesToken,
                    });
                } else {
                    res.json({
                        status: 404,
                        success: true,
                        message: "Login failed",
                    });
                }
            });
        } catch (error) {
            res.json({
                status: 400,
                message: error.message.toString(),
            });
        }
    },

    async logout(req, res, nect) {
        res.cookie("JWT", "", {
            httpOnly: flase,
            secure: false
        })

        res.status(200).json({
            status: 200,
            success: true,
            message: "logout success",
        });
    }
}


