const router = require('express').Router();
const {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// /api/users -- Get all users, create a user
router
    .route('/')
    .get(getAllUsers)
    .post(createUser)
;

 // /api/users/:id -- Get user by ID, update user by ID, delete User by ID
 router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)
;

// /api/users/:userId/friends/:friendId -- Add a friend, delete a friend
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend)
;
module.exports = router;