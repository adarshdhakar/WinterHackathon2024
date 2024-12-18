const express = require('express');
const lectureController = require('./../controllers/lectureController');
const authController = require('./../controllers/authController');

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

module.exports = router;
