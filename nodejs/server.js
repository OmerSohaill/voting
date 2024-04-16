const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const path = require('path');
const upload = multer();
const cors = require('cors');
const getuser = require('./controllers/auth');
const loginRoutes = require('./routes/logins');
const app = express();
const port = 3001;
// Middleware
app.use(cors());
app.use(upload.none());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// MongoDB connection
const mongoURI = 'mongodb+srv://umer:umer@cluster0.avg1bjf.mongodb.net/railway?retryWrites=true&w=majority';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
// Middleware for checking authentication
app.use('/login', function(req, res, next) {
  console.log("hello")
  try{
    const token=req.cookies.token;
    if(!token){
      res.render('login')
    }
    const user=getuser(token);
    if(!user){
      res.render('login')
    }
    if(user){
      res.render('votehome')
    }

  }catch(error){
    res.send(error)
  }
});

// Routes

app.use('/check', loginRoutes);

// Start the server
app.listen(port, () => {
  console.log('Server is listening on Port', port);
});
