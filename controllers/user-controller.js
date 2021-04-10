const { User } = require('../models/index');

const userController = {
    getAllUsers(req, res) {
        User.find({})
        // .populate({
        //     path:'friends',
        //     select: '-__v'
        // })
        .then(dbUser => res.json(dbUser))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },
    createUser({ body }, res) {
        User.create(body)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.json(err));
    }
}

module.exports = userController;