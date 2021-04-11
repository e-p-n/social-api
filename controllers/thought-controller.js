const { User, Thought } = require('../models');

const thoughtController = {
    getAllThoughts(req, res) {
        Thought.find({})
        .then(dbThought => res.json(dbThought))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    getThoughtById( { params }, res) {
        Thought.findOne({ _id: params.id })
        .then(dbThought => {
            if(!dbThought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(dbThought)
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },    
    
    createThought({ body }, res) {
        Thought.create(body)
        .then(dbThought => {
            User.findOneAndUpdate( 
                { _id: body.userId },
                { $push: { thoughts: dbThought._id }},
                { new: true }
            )
            .then(dbUser => {
                if(!dbUser) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
            })
            res.json(dbThought)

        })
        .catch(err => res.json(err));
    },

    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.id }, 
            body, 
            { new: true, runValidators: true }
        )
        .then(dbThought => {
            if (!dbThought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(dbThought);
        })
        .catch(err => res.status(400).json(err));            
    },

    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
        .then(dbThought => {
            if (!dbThought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            return User.findOneAndUpdate (
              { username: dbThought.username },
              { $pull: { thoughts: params.id }},
              { new: true }
            );
        })
        .then(dbUser => {
            if(!dbUser){
                res.status(404).json({ message: 'Username not found!' });
                return;
            }
            res.json(dbUser)
        })
        .catch(err => res.status(400).json(err))
    },

    addReaction({ params, body }, res) {
        Thought.findOneAndUpdate (
            { _id: params.id },
            { $push: { reactions: body }},
            { new: true, runValidators:true }
        )
        .then(dbThought => {
            if(!dbThought) {
                res.status(404).json({ message:  'No thought found with this id!' });
                return;
            }
            res.json(dbThought)
        })
        .catch(err => res.json(err))
    },

    deleteReaction({ params }, res) {
        Thought.findOneAndUpdate(
          { _id: params.id },
          { $pull: { reactions: { reactionId: params.reactionId } } },
          { new: true }
        )
        .then(dbThought => res.json(dbThought))
        .catch(err => res.json(err));
    }

}

module.exports = thoughtController;