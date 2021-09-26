const { Post } = require('../models');
const seedUsers = require('./user-seeds');

const postData = [

]
const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts;