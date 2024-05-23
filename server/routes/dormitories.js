const express = require('express');
const router = express.Router();
const Dormitory = require('../models/Dormitory');

// 获取所有宿舍信息
router.get('/', async (req, res) => {
    try {
        const dormitories = await Dormitory.find();
        res.json(dormitories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 创建新的宿舍
router.post('/', async (req, res) => {
    const dormitory = new Dormitory({
        building: req.body.building,
        floor: req.body.floor,
        roomNumber: req.body.roomNumber,
        bedCount: req.body.bedCount
    });

    try {
        const newDormitory = await dormitory.save();
        res.status(201).json(newDormitory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 获取单个宿舍信息
router.get('/:id', getDormitory, (req, res) => {
    res.json(res.dormitory);
});

// 更新宿舍信息
router.put('/:id', getDormitory, async (req, res) => {
    if (req.body.building != null) {
        res.dormitory.building = req.body.building;
    }
    if (req.body.floor != null) {
        res.dormitory.floor = req.body.floor;
    }
    if (req.body.roomNumber != null) {
        res.dormitory.roomNumber = req.body.roomNumber;
    }
    if (req.body.bedCount != null) {
        res.dormitory.bedCount = req.body.bedCount;
    }
    try {
        const updatedDormitory = await res.dormitory.save();
        res.json(updatedDormitory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 删除宿舍
router.delete('/:id', getDormitory, async (req, res) => {
    try {
        await res.dormitory.remove();
        res.json({ message: 'Deleted Dormitory' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 中间件：通过ID获取宿舍
async function getDormitory(req, res, next) {
    let dormitory;
    try {
        dormitory = await Dormitory.findById(req.params.id);
        if (dormitory == null) {
            return res.status(404).json({ message: 'Cannot find dormitory' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.dormitory = dormitory;
    next();
}

module.exports = router;
