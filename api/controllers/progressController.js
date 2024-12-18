const Progress = require('./../models/progressModel');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAllProgresss = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Progress.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const progresss = await features.query;

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: progresss.length,
    data: {
      progresss
    }
  });
});

exports.getProgress = catchAsync(async (req, res, next) => {
  const progress = await Progress.findById(req.params.id);

  if (!progress) {
    return next(new AppError('No progress found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      progress
    }
  });
});

exports.createProgress = catchAsync(async (req, res, next) => {
  const newProgress = await Progress.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      tour: newProgress
    }
  });
});

exports.updateProgress = catchAsync(async (req, res, next) => {
  const progress = await Progress.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!progress) {
    return next(new AppError('No progress found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      progress
    }
  });
});

exports.deleteProgress = catchAsync(async (req, res, next) => {
  const progress = await Progress.findByIdAndDelete(req.params.id);

  if (!progress) {
    return next(new AppError('No progress found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});
