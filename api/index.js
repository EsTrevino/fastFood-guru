const express = require('express');
const http = require('http');
const chalk = require('chalk');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

require('custom-env').env();
const app = express();
const PORT = process.env.PORT;
const userRoutes = require('./routes/userRoutes');
const mapRoutes = require('./routes/mapRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

app.server = http.createServer(app);
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
require('./config/passport')(passport);

app.get('/', (req, res) => res.send('Hello World'));
app.use('/api/users', userRoutes);
app.use('/api/maps', mapRoutes);
app.use('/api/reviews', reviewRoutes);

app.listen(PORT, () =>
  console.log(chalk.italic.yellow(`App is listening on port ${PORT}`))
);
