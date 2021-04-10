const { Schema, model } = require('mongoose');
const { format } = require('date-fns');

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
        get: createdAtVal => format(createdAtVal,'EEE MMM d, yyyy. h:mm a')
    }
},
{
    toJSON: {
        getters: true
    }
})

const ThoughtSchema = new Schema({
    thoughText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => format(createdAtVal,'EEE MMM d, yyyy. h:mm a')
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
    }
})

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

const Thought = model('Thought', ThoughtSchema);

model.exports = Thought;
