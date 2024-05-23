const express = require('express');
const router = express.Router();
const Allocation = require('../models/Allocation');

// 获取所有分配信息
router.get('/', async (req, res) => {
    try {
        const allocations = await Allocation.find();
        res.json(allocations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 创建新的分配
router.post('/', async (req, res) => {
    const allocation = new Allocation({
        studentId: req.body.studentId,
        dormitoryId: req.body.dormitoryId,
        bedNumber: req.body.bedNumber,
        startDate: req.body.startDate,
        endDate: req.body.endDate
    });

    try {
        const newAllocation = await allocation.save();
        res.status(201).json(newAllocation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 获取单个分配信息
router.get('/:id', getAllocation, (req, res) => {
    res.json(res.allocation);
});

// 更新分配信息
router.put('/:id', getAllocation, async (req, res) => {
    if (req.body.studentId != null) {
        res.allocation.studentId = req.body.studentId;
    }
    if (req.body.dormitoryId != null) {
        res.allocation.dormitoryId = req.body.dormitoryId;
    }
    if (req.body.bedNumber != null) {
        res.allocation.bedNumber = req.body.bedNumber;
    }
    if (req.body.startDate != null) {
        res.allocation.startDate = req.body.startDate;
    }
    if (req.body.endDate != null) {
        res.allocation.endDate = req.body.endDate;
    }
    try {
        const updatedAllocation = await res.allocation.save();
        res.json(updatedAllocation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 删除分配
router.delete('/:id', getAllocation, async (req, res) => {
    try {
        await res.allocation.remove();
        res.json({ message: 'Deleted Allocation' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 中间件：通过ID获取分配
async function getAllocation(req, res, next) {
    let allocation;
    try {
        allocation = await Allocation.findById(req.params.id);
        if (allocation == null) {
            return res.status(404).json({ message: 'Cannot find allocation' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.allocation = allocation;
    next();
}

module.exports = router;
