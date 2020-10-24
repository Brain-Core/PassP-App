const jwt = require('jsonwebtoken');
const config = require('config');

const protectRoute = (req, res, next) => {
    const token = req.header('app-token');
    if(!token) res.status(400).json({msg: 'no token' })

    try{
        const testToken = jwt.verify(token, config.get('secret_key'));
        req.user = testToken;
        next();
    }
    catch(e){
        res.json({msg: e});
    }
}

module.exports = protectRoute;