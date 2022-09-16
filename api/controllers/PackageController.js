const router = require('express').Router();

const { Packages } = require('../models/MackageModel');

router.get('/getUnassigned', (req, res, next) => {   
    Packages.find({"assigned": t})
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err));
});

router.post('/postNewPackage', (req, res, next) => {
    if (!req.body) return next({ status: 400, msg: 'Incomplete/No Body Provided' });

    Packages.create(req.body)
        .then((result) => res.status(201).json(result))
        .catch((err) => next(err));
});

router.delete('/deletePackage/:id', (req, res, next) => {
    const {id} = req.params;

    Discussions.delete({"_id": id})
        .then((result) => res.status(204).json(result))
        .catch((err) => next(err))
});

router.patch('/packageAssigned/:id', (req, res, next) => {
    const { id } = req.params;

    Packages.updateOne({"_id": id}, {"assigned": true})
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err))
});

router.patch('/packageDelivered/:id', (req, res, next) => {
    const { id } = req.params;

    Packages.updateOne({"_id": id}, {"delivered": true})
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err))
});

module.exports = router;