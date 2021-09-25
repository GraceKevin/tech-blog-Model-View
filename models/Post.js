const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init (
    {
    body: {
        title: DataTypes.STRING,
        body: DataTypes.STRING
    }
    },
    {
        sequelize
    }
);

module.exports = Post;