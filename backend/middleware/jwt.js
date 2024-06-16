const jwt = require('jsonwebtoken');
const User = require('../model/user.js');

const verifyToken = async (req, res, next) => {
    const cookie = req.cookies['jwt'];

    if (!cookie) {
        return res.status(401).send('Access Denied');
    }

    let claims;
    try {
        claims = jwt.verify(cookie, process.env.JWTKEY);
    } catch (err) {
        return res.status(403).send('Invalid Token');
    }

    if (!claims) {
        return res.status(401).send('Access Denied');
    }

    const user = await User.findOne({ _id: claims.id });
    if (!user) {
        return res.status(404).send('User not found');
    }

    req.userId = claims.id;
    next();
};

module.exports = verifyToken;
