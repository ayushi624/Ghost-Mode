const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');

const app = express();

// ✅ This should be correct if your HTML is in login-signup/public
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}));

const usersFile = './users.json';

function readUsers() {
  return JSON.parse(fs.readFileSync(usersFile, 'utf8') || '[]');
}

function writeUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  const users = readUsers();
  if (users.find(u => u.email === email)) {
    return res.send('User already exists. <a href="/signup.html">Try again</a>');
  }
  const hashedPassword = bcrypt.hashSync(password, 8);
  users.push({ username, email, password: hashedPassword });
  writeUsers(users);
  res.send('Signup successful! <a href="/login.html">Login</a>');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();
  const user = users.find(u => u.email === email);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.send('Invalid credentials. <a href="/login.html">Try again</a>');
  }
  req.session.user = user;
  res.redirect('/profile.html');
});

app.get('/userdata', (req, res) => {
  if (!req.session.user) return res.status(401).send('Unauthorized');
  res.json(req.session.user);
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login.html');
  });
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));

