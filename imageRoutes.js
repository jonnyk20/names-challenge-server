module.exports = function(app) {
  const images = require('./imageController');

  app.route('/').get((req, res) => res.end('Server Live'));

  app.route('/images').get(images.getImages);
};
