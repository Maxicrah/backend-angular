const Sector = require('../models/sector');
const sectorController = {}
sectorController.getSectores = async (req, res) => {
    var sectores = await Sector.find();
    res.json(sectores);
}
sectorController.createSector = async (req, res) => {
    var sector = new Sector(req.body);
    try {
        await sector.save();
        res.json({
            'status': '1',
            'msg': 'Sector guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}
sectorController.getSector = async (req, res) => {
    const sector = await Sector.findById(req.params.id);
    res.json(sector);
}
sectorController.editSector = async (req, res) => {
    const vsector = new Sector(req.body);
    try {
        await Sector.updateOne({ _id: req.body._id }, vsector);
        res.json({
            'status': '1',
            'msg': 'Sector updated'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
sectorController.deleteSector = async (req, res) => {
    try {
        await Sector.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Sector removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = sectorController;