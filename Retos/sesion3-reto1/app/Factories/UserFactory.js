const User = require('../User');

class UserFactory
{
    create(username)
    {
        return new User(username);
    }
}

module.exports = UserFactory;