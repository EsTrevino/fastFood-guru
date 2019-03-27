const dev = require('./keys_dev');
const prod = require('./keys_prod');

if (process.env.NODE_ENV === 'production') {
  module.exports = prod;
} else {
  module.exports = dev;
}
