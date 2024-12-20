import express from 'express';
import * as progressController from '../controllers/progressController.js';

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

export default router;
