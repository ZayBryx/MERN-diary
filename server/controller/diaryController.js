const Diary = require("../model/Diary");
const CustomError = require("../errors/custom-error");
const { StatusCodes } = require("http-status-codes");
const mongoose = require("mongoose");

const getAll = async (req, res) => {
  const diary = await Diary.find({});

  if (!diary) {
    throw new CustomError("Diary Not Found", StatusCodes.NOT_FOUND);
  }

  res.status(StatusCodes.OK).json(diary);
};

const create = async (req, res) => {
  const { title, content, date } = req.body;

  if (!title || !content) {
    throw new CustomError(
      "Title and Content is required",
      StatusCodes.BAD_REQUEST
    );
  }

  const diary = await Diary.create(req.body);

  res.status(StatusCodes.CREATED).json(diary);
};

const getOne = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    diary = await Diary.findById(id);
  }

  const diary = await Diary.findById(id);

  if (!diary) {
    throw new CustomError("Diary Not Found", StatusCodes.NOT_FOUND);
  }

  res.status(StatusCodes.OK).json(diary);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, content, date } = req.body;

  const diary = await Diary.findByIdAndUpdate(id, req.body);

  if (!diary) {
    throw new CustomError("Diary Not Found", StatusCodes.NOT_FOUND);
  }

  res.status(StatusCodes.OK).json({ message: "Updated Successfully" });
};

const remove = async (req, res) => {
  const { id } = req.params;

  const diary = await Diary.findByIdAndDelete(id);

  if (!diary) {
    throw new CustomError("Diary Not Found", StatusCodes.NOT_FOUND);
  }

  res.status(StatusCodes.OK).json({ message: "Deleted Successfully" });
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove,
};
