const router = require('express').Router();
const {
  getAllUsers,
  createUser,
} = require('../../controllers/user-controller');

// /api/pizzas
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// /api/pizzas/:id
// router
//   .route('/:id')
//   .get(getUserById)
//   .put(updateUser)
//   .delete(deleteUser);

module.exports = router;