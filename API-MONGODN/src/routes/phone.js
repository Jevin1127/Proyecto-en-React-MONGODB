const express = require('express');
const phoneSchema = require("../models/phone");

const router = express.Router();

// create phone
router.post("/phones", (req, res) => {
    const phone = phoneSchema(req.body);
    phone
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});


//obtener todos los phones
router.get("/phones", (req, res) => {
    phoneSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});


//obtener uno en especifico los phones
router.get("/phones/:id", (req, res) => {
    const { id } = req.params;
    phoneSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

//Actualizar un phone
router.put("/phones/:id", (req, res) => {
    const { id } = req.params;
    const { phonename, marca, modelo} = req.body;
    phoneSchema
    .updateOne({ _id: id}, { $set: {phonename, marca, modelo} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});


//Eliminar un phone
router.delete("/phones/:id", (req, res) => {
    const { id } = req.params;
    phoneSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message : error}));
});


module.exports = router;