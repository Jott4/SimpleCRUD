const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = {
    async auth(req, res) {
        const { email, password } = req.body;

        let user = await User.findOne({ email });

        if(user) {
            user = bcrypt.compareSync(password, user.password);
            user ? res.status(202).json({ message: 'Successfully logged in' }) : res.status(400).json({ message: 'Incorrect login or password' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    }
}