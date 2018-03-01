const FB = require('fb');
const User = require('../models/User');
class UserController {
  static loginFB(req, res) {
    FB.api('/me', {
        fields: 'name, email'
      })
      .then(doc => {
        User.findOne({
            email: doc.email
          })
          .then(user => {
            if (user) {
              res.status(200).json({
                message: 'Successfully login',
                user: {
                  _id: user._id,
                  username: user.username,
                  email: user.email
                }
              });
            } else {
              let obj = {
                name: doc.name,
                email: doc.email,
                password: doc.email
              }
              User.create(obj)
                .then(user => {
                  res.status(200).json({
                    message: 'Successfully created',
                    user: {
                      _id: user._id,
                      name: user.name,
                      email: user.email
                    }
                  });
                })
                .catch(error => {
                  res.status(500).json({
                    message: error.message
                  });
                });
            }
          })
          .catch(error => {
            res.status(500).json({
              message: error.message
            });
          });
      
        })
      .catch(error => {
        res.status(500).json({
          message: error.message
        });
      });
  }
}

module.exports = UserController