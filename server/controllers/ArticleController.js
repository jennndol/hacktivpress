const Article = require('../models/Article');

class ArticleController {

  static postArticle(req, res) {
    let obj = {
      title: req.body.title,
      content: req.body.content,
      userId: req.body.userId
    }
    Article.create(obj)
      .then(doc => {
        res.status(200).json({
          message: 'create article success',
          doc
        });
      })
      .catch(error => {
        res.status(400).json({
          message: error.message
        });
      })
  }

  static getArticles(req, res) {
    Article.find()
      .then(docs => {
        res.status(200).json({
          message: 'get articles success',
          docs
        });
      })
      .catch(error => {
        res.status(400).json({
          message: error.message
        });
      });
  }

  static getArticle(req, res) {
    Article.findById(req.params.id)
      .then(doc => {
        res.status(200).json({
          message: 'get article success',
          doc
        });
      })
      .catch(error => {
        res.status(400).json({
          message: error.message
        });
      })
  }

  static deleteArticle(req, res) {
    Article.deleteOne({
        _id: req.params.id
      })
      .then(payload => {
        res.status(200).json({
          message: 'delete article success',
          payload
        });
      })
      .catch(error => {
        res.status(400).json({
          error
        });
      });
  }

  static putArticle(req, res) {
    Article.findOne({
        _id: req.params.id
      })
      .then(doc => {
        doc.title = req.body.title;
        doc.content = req.body.content;
        doc.userId = req.decoded._id;
        doc.save()
          .then(payload => {
            res.status(200).json({
              message: 'update article success',
              payload
            });
          })
          .catch(error => {
            res.status(400).json({
              error
            });
          })
      })
      .catch(error => {
        res.status(400).json({
          message: error.message
        });
      });
  }
}

module.exports = ArticleController;