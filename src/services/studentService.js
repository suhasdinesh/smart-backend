const Contact = require('../models/Contact');
const Student = require('../models/Student');

const createStudent = async (studentData) => {
  const student = new Student(studentData);
  return await student.save();
};

const findAllStudents = async () => {
  return await Student.find();
};

const findStudentById = async (id) => {
  return await Student.findById(id);
};

const updateStudent = async (id, updateData) => {
  return await Student.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteStudent = async (id) => {
  return await Student.findByIdAndDelete(id);
};

const getContacts = async (id) => {
  try {
    return await Contact.find({student : id})
  } catch(error) {
    throw error;
  }
}

module.exports = {
  createStudent,
  findAllStudents,
  findStudentById,
  updateStudent,
  deleteStudent,
  getContacts
};
