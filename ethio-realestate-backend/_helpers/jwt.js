const expressJwt = require('express-jwt');
const config = require('../config.json');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/users/authenticate',
            '/users/register',
        ]
    });
}

async function isRevoked(req, payload, done) {
    done();
};