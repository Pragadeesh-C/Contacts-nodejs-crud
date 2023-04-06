const asyncHandler = require("express-async-handler");


const getContacts = asyncHandler((req, res) => {
    res.status(200).json({ message: "Get all contacts" })
})

const createContact = asyncHandler((req, res) => {
    console.log("Request body",req.body)
    const {name,email,phone} = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    res.status(200).json({ message: "Create contacts" })
})

const getContact = asyncHandler((req, res) => {
    res.status(200).json({ message: `Get a contact ${req.params.id}` })
})

const updateContact = asyncHandler((req, res) => {
    res.status(200).json({ message: `Update contact ${req.params.id}` })
})

const deleteContact = asyncHandler((req, res) => {
    res.status(200).json({ message: `Delete contact ${req.params.id}` })
})

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact }