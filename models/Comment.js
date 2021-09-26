const { Model, Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init (
    {
        id: 
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          user_id: 
          {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
          },
          post_id: 
          {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id',
            }
            },
            comment_text: 
            {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            }
          },
          {
              sequelize,
              modelName: 'comment',
              freezeTableName: true,
              underscored: 'comment'
          }
);

module.exports = Comment 