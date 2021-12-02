const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/signup', (req, res, next) => {
  res.render('signup');
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  passReqToCallback: true
})); 

router.get('/signin', (req, res, next) => {
  res.render('signin');
});

router.post('/signin', passport.authenticate('local-signin', {
  successRedirect: '/profile',
  failureRedirect: '/signin',
  passReqToCallback: true
}));

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});
/*
//todos las rutas debajo estaran dentro de la seguridad de las sessions
router.use((req, res, next)=>{
  isAuthenticated(req, res, next);
  next();
});
*/
router.get('/profile',isAuthenticated, (req, res, next) => {
  res.render('profile',{mytext:'Nuevo texto'} );
});

const BOOK= require('../models/libro');

router.get('/libros',isAuthenticated, async(req, res, next) => {
  const book = await BOOK.find();
  res.render('libros', {book} );
});

router.post('/add',isAuthenticated,async(req,res,next)=>{
  const libro =new BOOK(req.body);
  await libro.save();
  res.redirect('/libros');
});

router.get('/edit_libro/:id',isAuthenticated,async(req,res, next)=>{
  const{id}= req.params;
  const edit_book = await BOOK.findById(id);
  res.render('edit_libro',{edit_book});

});

router.post('/edit_libro/:id',isAuthenticated, async(req,res, next)=>{
  const{id}= req.params;
  await BOOK.updateOne({_id:id},req.body);
  res.redirect('/libros');
});

router.get('/delete/:id',isAuthenticated, async(req, res, next)=>{
  const {id} = req.params;
   await BOOK.remove({_id:id});
   res.redirect('/libros');
});


function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/')
}

module.exports = router;