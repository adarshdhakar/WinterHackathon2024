import express from 'express';
import * as lectureController from '../controllers/lectureController.js';
import * as authController from '../controllers/authController.js';

const router = express.Router();

router
  .route('/')
  .get(authController.protect, lectureController.getAllLectures)
  .post(lectureController.createLecture);

router
  .route('/:id')
  .get(lectureController.getLecture)
  .patch(lectureController.updateLecture)
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'teacher'),
    lectureController.deleteLecture
  );

export default router;
