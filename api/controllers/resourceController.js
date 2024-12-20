import Progress from './../models/progressModel.js';
import APIFeatures from './../utils/apiFeatures.js';
import catchAsync from './../utils/catchAsync.js';
import AppError from './../utils/appError.js';

export const getAllResources = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Resource.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const resources = await features.query;

  res.status(200).json({
    status: 'success',
    results: resources.length,
    data: {
      resources,
    },
  });
});

export const getResource = catchAsync(async (req, res, next) => {
  const resource = await Resource.findById(req.params.id);

  if (!resource) {
    return next(new AppError('No Resource found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      resource,
    },
  });
});

export const createResource = catchAsync(async (req, res, next) => {
  const newResource = await Resource.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      resource: newResource,
    },
  });
});

export const updateResource = catchAsync(async (req, res, next) => {
  const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!resource) {
    return next(new AppError('No Resource found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      resource,
    },
  });
});

export const deleteResource = catchAsync(async (req, res, next) => {
  const resource = await Resource.findByIdAndDelete(req.params.id);

  if (!resource) {
    return next(new AppError('No Resource found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
