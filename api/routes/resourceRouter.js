const express = require('express');
const resourceController = require('../controllers/resourceController');

const router = express.Router();

router
  .route('/')
  .get(resourceController.getAllResources)
  .post(resourceController.createResource);

router
  .route('/:id')
  .get(resourceController.getResource)
  .patch(resourceController.updateResource)
  .delete(resourceController.deleteResource);

module.exports = router;
