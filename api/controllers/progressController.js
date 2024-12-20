import Progress from './../models/progressModel.js';
import APIFeatures from './../utils/apiFeatures.js';
import catchAsync from './../utils/catchAsync.js';
import AppError from './../utils/appError.js';

export const getAllProgresss = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Progress.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const progresss = await features.query;

  res.status(200).json({
    status: 'success',
    results: progresss.length,
    data: {
      progresss,
    },
  });
});

export const getProgress = catchAsync(async (req, res, next) => {
  const progress = await Progress.findById(req.params.id);

  if (!progress) {
    return next(new AppError('No progress found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      progress,
    },
  });
});

export const createProgress = catchAsync(async (req, res, next) => {
  const newProgress = await Progress.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      progress: newProgress,
    },
  });
});

export const updateProgress = catchAsync(async (req, res, next) => {
  const progress = await Progress.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!progress) {
    return next(new AppError('No progress found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      progress,
    },
  });
});

export const deleteProgress = catchAsync(async (req, res, next) => {
  const progress = await Progress.findByIdAndDelete(req.params.id);

  if (!progress) {
    return next(new AppError('No progress found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
