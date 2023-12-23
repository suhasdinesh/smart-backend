const schoolService = require('../services/schoolService');

const createSchool = async (req, res) => {
  try {
    const school = await schoolService.createSchool(req.body);
    res.status(201).json(school);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllSchools = async (req, res) => {
  try {
    const schools = await schoolService.findAllSchools();
    res.json(schools);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSchoolById = async (req, res) => {
  try {
    const school = await schoolService.findSchoolById(req.params.id);
    if (!school) {
      return res.status(404).json({ message: 'School not found' });
    }
    res.json(school);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSchool = async (req, res) => {
  try {
    const updatedSchool = await schoolService.updateSchool(req.params.id, req.body);
    res.status(200).json(updatedSchool);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSchool = async (req, res) => {
  try {
    await schoolService.deleteSchool(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStudents = async(req,res) => {
  try{
    const students = await schoolService.getStudents(req.params.id)
    res.status(200).json(students)

  } catch (error){
    res.status(500).json({message : error.message})
  }
}

module.exports = {
  createSchool,
  getAllSchools,
  getSchoolById,
  updateSchool,
  deleteSchool,
  getStudents
};
