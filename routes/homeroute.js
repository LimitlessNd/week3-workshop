const validUsers = [
  { email: 'user1@com.au', password: '123' },
  { email: 'user2@com.au', password: '456' },
  { email: 'user3@com.au', password: '789' }
];

module.exports = {
  route: (app, path) => {

    // Serve login form
    app.get('/', function(req, res) {
      let filePath = path.resolve('./www/form.html');
      res.sendFile(filePath);
    });

    // Serve account page
    app.get('/account', function(req, res) {
      let filePath = path.resolve('./www/account.html');
      res.sendFile(filePath);
    });

    // Handle login post request
    app.post('/login', function(req, res) {
      const { email, password } = req.body;
      const isValid = validUsers.some(user => user.email === email && user.password === password);

      if (isValid) {
        res.json({ valid: true });
      } else {
        res.json({ valid: false });
      }
    });
  }
};
