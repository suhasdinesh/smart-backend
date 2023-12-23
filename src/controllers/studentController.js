const studentService = require('../services/studentService');

const createStudent = async (req, res) => {
  try {
    const student = await studentService.createStudent(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await studentService.findAllStudents();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await studentService.findStudentById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const updatedStudent = await studentService.updateStudent(req.params.id, req.body);
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    await studentService.deleteStudent(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getContacts = async(req,res) => {
  try{
    const studentContacts = await studentService.getContacts(req.params.id);
    res.status(200).json(studentContacts)
  } catch (error) {
    res.status(500).json({message : error.message})
  }
}

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
  getContacts
};
