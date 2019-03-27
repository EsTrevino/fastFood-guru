const mongoose = require('mongoose');
const chalk = require('chalk');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
require('custom-env').env();

mongoose.connect(process.env.MONGO_URI, {
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
