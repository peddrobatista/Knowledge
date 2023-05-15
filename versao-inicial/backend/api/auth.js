const {authSecret} = require('../.env');
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');

module.exports = app => {
    const signin = async (req, res) => {
        if (!req.body.email || !req.body.password) {
            return res.status(400).send('Informe usuário e senha!')
        }

        const user = await app.db('users')
        .where({email: req.body.email})
    }
}