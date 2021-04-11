const { Schema, model } = require('mongoose');

// create user schema
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        // email regex that is supposed to work 99.9% of the time. From https://emailregex.com/
        match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }

    ]
},
{
    toJSON: {
        virtuals: true
    },
    id: false
})

// virtual to get total count of Friends on retrieval
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;