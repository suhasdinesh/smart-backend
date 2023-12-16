const Contact = require('../models/Contact');

const createContact = async (contactData) => {
  const contact = new Contact(contactData);
  return await contact.save();
};

const findAllContacts = async () => {
  return await Contact.find();
};

const findContactById = async (id) => {
  return await Contact.findById(id);
};

const updateContact = async (id, updateData) => {
  return await Contact.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteContact = async (id) => {
  return await Contact.findByIdAndDelete(id);
};

module.exports = {
  createContact,
  findAllContacts,
  findContactById,
  updateContact,
  deleteContact
};
