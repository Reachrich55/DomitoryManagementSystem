const express = require('express');
const router = express.Router();
const Hygiene = require('../models/Hygiene');

// 获取所有卫生检查信息
router.get('/', async (req, res) => {
    try {
        const hygieneRecords = await Hygiene.find();
        res.json(hygieneRecords);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 创建新的卫生检查记录
router.post('/', async (req, res) => {
    const hygiene = new Hygiene({
        dormitoryId: req.body.dormitoryId,
        checkDate: req.body.checkDate,
        score: req.body.score,
        remarks: req.body.remarks
    });

    try {
        const newHygiene = await hygiene.save();
        res.status(201).json(newHygiene);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 获取单个卫生检查记录
router.get('/:id', getHygiene, (req, res) => {
    res.json(res.hygiene);
});

// 更新卫生检查记录
router.put('/:id', getHygiene, async (req, res) => {
    if (req.body.dormitoryId != null) {
        res.hygiene.dormitoryId = req.body.dormitoryId;
    }
    if (req.body.checkDate != null) {
        res.hygiene.checkDate = req.body.checkDate;
    }
    if (req.body.score != null) {
        res.hygiene.score = req.body.score;
    }
    if (req.body.remarks != null) {
        res.hygiene.remarks = req.body.remarks;
    }
    try {
        const updatedHygiene = await res.hygiene.save();
        res.json(updatedHygiene);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 删除卫生检查记录
router.delete('/:id', getHygiene, async (req, res) => {
    try {
        await res.hygiene.remove();
        res.json({ message: 'Deleted Hygiene Record' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 中间件：通过ID获取卫生检查记录
async function getHygiene(req, res, next) {
    let hygiene;
    try {
        hygiene = await Hygiene.findById(req.params.id);
        if (hygiene == null) {
            return res.status(404).json({ message: 'Cannot find hygiene record' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.hygiene = hygiene;
    next();
}

module.exports = router;
