const School = require('../models/School');

const createSchool = async (schoolData) => {
  const school = new School(schoolData);
  return await school.save();
};

const findAllSchools = async () => {
  return await School.find();
};

const findSchoolById = async (id) => {
  return await School.findById(id);
};

const updateSchool = async (id, updateData) => {
  return await School.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteSchool = async (id) => {
  return await School.findByIdAndDelete(id);
};

module.exports = {
  createSchool,
  findAllSchools,
  findSchoolById,
  updateSchool,
  deleteSchool
};
