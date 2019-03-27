const mongoose = require('mongoose');
const chalk = require('chalk');
const config = require('../config/keys');
const connectionString = config.mongoURI;

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose.connect(connectionString, {
  useNewUrlParser: true
});

mongoose.connection.on('connected', () => {
  console.log(chalk.italic.yellow('database successfully connected'));
});

mongoose.connection.on('error', () => {
  console.log(chalk.red('error on database connection'));
});

module.exports.User = require('./user');
module.exports.Review = require('./review');
