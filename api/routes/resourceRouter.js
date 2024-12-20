import express from 'express';
import * as resourceController from '../controllers/resourceController.js';

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

export default router;
