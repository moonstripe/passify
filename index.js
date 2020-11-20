require('dotenv')
  .config();
const express = require('express');
const routes = require('./routes');

require('./services/passport');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
app.use(express.static(publicPath));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log('Server is up!');
});
