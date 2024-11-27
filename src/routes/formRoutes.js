import express from 'express';
import FormData from '../models/formData.js';

const router = express.Router();

// Endpoint untuk menambahkan data ke tabel brasiees
router.post('/', async (req, res) => {
    const { name, text } = req.body;

    // Validasi data input
    if (!name || !text) {
        return res.status(400).json({
            success: 0,
            message: 'Both name and text are required fields'
        });
    }

    try {
        // Menyimpan data ke database
        const data = await FormData.create({ name, text });
        res.status(201).json({
            success: 1,
            message: 'Data saved successfully',
            data
        });
    } catch (error) {
        res.status(500).json({
            success: 0,
            message: 'Failed to save data',
            error: error.message
        });
    }
});

// Endpoint untuk mengambil semua data dari tabel brasiees
router.get('/', async (_req, res) => {
    try {
        const data = await FormData.findAll();
        res.json({
            success: 1,
            data
        });
    } catch (error) {
        res.status(500).json({
            success: 0,
            message: 'Failed to fetch data',
            error: error.message
        });
    }
});

export default router;


