const express = require('express');
const http = require('http');
const chalk = require('chalk');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const path = require('path');

require('custom-env').env();
const config = require('./config/keys');
const PORT = config.PORT;
const app = express();
//const PORT = process.env.PORT;
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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('../client', 'build', 'index.html'));
  });
}

app.listen(PORT, () =>
  console.log(chalk.italic.yellow(`App is listening on port ${PORT}`))
);
