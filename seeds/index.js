// Referenced from module 14 - adjusted for project

const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPosts();

  await seedUsers();

  await seedComments();

  process.exit(0);
};

seedAll();