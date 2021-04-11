
const { Schema, model, Types } = require('mongoose');
// import date formatter
const { format } = require('date-fns');

// create Reaction schema
const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // formats date
        get: createdAtVal => format(createdAtVal,"MMM. do, yyyy 'at' h:mm a")
    }
},
{
    toJSON: {
        getters: true
    },
    id: false
})

// create Thought schema
const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // formats date
        get: createdAtVal => format(createdAtVal,"MMM. do, yyyy 'at' h:mm a")
    },
    username: {
        type: String,
        required: true
    },
    reactions:[ReactionSchema]
},
{
    toJSON: {
        getters: true,
        virtuals: true
    },
    id: false
})

// virtual for counting reactions
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
