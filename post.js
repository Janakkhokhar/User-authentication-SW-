const express = require('express');

const Passport = require('passport');

const routes = express.Router();

const PostController = require('../controller/postcontroller');

routes.post('/add_post', Passport.authenticate("userverify", { failureRedirect: "/user/faillogin" }), PostController.add_post);

routes.get('/viewPost', Passport.authenticate("userverify", { failureRedirect: "/user/faillogin" }), PostController.viewPost);

routes.put('/editPost/:id', Passport.authenticate("userverify", { failureRedirect: "/user/faillogin" }), PostController.editPost);

routes.delete('/deletePost/:id', Passport.authenticate("userverify", { failureRedirect: "/user/faillogin" }), PostController.deletePost);







module.exports = routes;