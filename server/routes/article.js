const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/ArticleController')

router.get('/', ArticleController.getArticles);
router.get('/:id', ArticleController.getArticle);
router.post('/:id', ArticleController.postArticle);
router.put('/:id', ArticleController.putArticle);
router.delete('/:id', ArticleController.deleteArticle);

module.exports = router;