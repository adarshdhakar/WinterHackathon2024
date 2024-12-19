const express = require('express');
const progressController = require('../controllers/progressController');

const router = express.Router();

router
  .route('/')
  .get(progressController.getAllProgresss)
  .post(progressController.createProgress);

router
  .route('/:id')
  .get(progressController.getProgress)
  .patch(progressController.updateProgress)
  .delete(progressController.deleteProgress);

module.exports = router;
