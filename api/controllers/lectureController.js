import Lecture from './../models/lectureModel.js';
import APIFeatures from './../utils/apiFeatures.js';
import catchAsync from './../utils/catchAsync.js';
import AppError from './../utils/appError.js';

export const getAllLectures = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Lecture.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const lectures = await features.query;

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: lectures.length,
    data: {
      lectures
    }
  });
});

export const getLecture = catchAsync(async (req, res, next) => {
  const lecture = await Lecture.findById(req.params.id);

  if (!lecture) {
    return next(new AppError('No lecture found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      lecture
    }
  });
});

export const createLecture = catchAsync(async (req, res, next) => {
  const newLecture = await Lecture.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      tour: newLecture
    }
  });
});

export const updateLecture = catchAsync(async (req, res, next) => {
  const lecture = await Lecture.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!lecture) {
    return next(new AppError('No lecture found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      lecture
    }
  });
});

export const deleteLecture = catchAsync(async (req, res, next) => {
  const lecture = await Lecture.findByIdAndDelete(req.params.id);

  if (!lecture) {
    return next(new AppError('No lecture found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});
