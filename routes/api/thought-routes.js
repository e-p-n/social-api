const router = require('express').Router();
const {
    getAllThoughts,
    createThought,
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// /api/thoughts -- get all thoughts and create new thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)
;

// /api/thoughts/:id -- get thougt by ID, update thought by ID, delete thought by ID
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)
;

// /api/thoughts/:id/reactions -- create a reaction (stored in thought)
router
    .route('/:id/reactions')
    .put(addReaction)
;
// /api/thoughts/:id/reactions/:reactionId -- delete a reaction

router
    .route('/:id/reactions/:reactionId')
    .delete(deleteReaction)
;

module.exports = router;