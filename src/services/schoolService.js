const School = require('../models/School');
const Student = require('../models/Student');

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

const getStudents = async(id) => {
  try {
    return await Student.find({school : id})
  } catch (error) {
    throw error
  }
}

module.exports = {
  createSchool,
  findAllSchools,
  findSchoolById,
  updateSchool,
  deleteSchool,
  getStudents
};
