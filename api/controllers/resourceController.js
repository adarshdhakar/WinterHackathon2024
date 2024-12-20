import Progress from './../models/progressModel.js';
import APIFeatures from './../utils/apiFeatures.js';
import catchAsync from './../utils/catchAsync.js';
import AppError from './../utils/appError.js';

exports.getAllResources = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Resource.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const resources = await features.query;

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: resources.length,
    data: {
      resources
    }
  });
});

exports.getResource = catchAsync(async (req, res, next) => {
  const resource = await Resource.findById(req.params.id);

  if (!resource) {
    return next(new AppError('No Resource found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      resource
    }
  });
});

exports.createResource = catchAsync(async (req, res, next) => {
  const newResource = await Resource.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      tour: newResource
    }
  });
});

exports.updateResource = catchAsync(async (req, res, next) => {
  const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!resource) {
    return next(new AppError('No Resource found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      resource
    }
  });
});

exports.deleteResource = catchAsync(async (req, res, next) => {
  const resource = await Resource.findByIdAndDelete(req.params.id);

  if (!resource) {
    return next(new AppError('No Resource found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});
