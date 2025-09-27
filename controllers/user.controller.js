const User = require('../lib/user.model');

const createUser = async (req, res) => {
    await User.create({
        email: 'example@example.com',
        password: 'example1234',
    });
    res.render('user', {
        title: 'User Creation',
        message: 'User Created',
        user: null
    });    
}

const getUser = async (req, res) => {
    const user = await User.findOne({ email: 'example@example.com' });
    res.render('user', {
        title: 'Users',
        message: 'User Retrieved',
        user: user
    })
}

const deleteUser = async (req, res) => {
    await User.findOneAndDelete({
        email: 'example@example.com'    
    });

    res.render('user', {
        title: 'User Deletion',
        message: 'User Deleted',
        user: null
    });
}

module.exports = {
    getUser,
    createUser,
    deleteUser
}