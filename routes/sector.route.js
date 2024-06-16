//defino controlador para el manejo de CRUD
const sectorController = require('./../controller/sector.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/', sectorController.getSectores);
router.post('/', sectorController.createSector);
router.get('/:id', sectorController.getSector);
router.put('/:id', sectorController.editSector);
router.delete('/:id', sectorController.deleteSector);
//exportamos el modulo de rutas
module.exports = router;