const express = require('express');
const cors = require('cors');
const config = require('./config');
const routes = require('./routes');

const app = express();
app.use(cors({
  origin: '*',
}));

// We use express to define our various API endpoints and
// provide their handlers that we implemented in routes.js
app.get('/signin', routes.signIn);
app.get('/profile', routes.profile);
app.get('/dashboard/:user_id', routes.dashboard);
app.get('/footprint', routes.footprint);
app.get('/practice', routes.practice);
app.get('/community', routes.community);

app.listen(config.server_port, () => {
  console.log(`Server running at http://${config.server_host}:${config.server_port}/`)
});

module.exports = app;
