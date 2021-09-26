const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Hello World",
        user_id: 3,
        post_id: 1
    },
]

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;