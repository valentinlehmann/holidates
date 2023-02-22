import express from "express";
import {holidays} from "../icalImporter";

const router = express.Router();

router.get('/current/:state?', (req, res) => {
    const state = req.params.state;
    const current = holidays
        .filter(holiday => !state || holiday.state.code === state)
        .filter(holiday => holiday.isInDateRange(new Date()));

    if (!current || current.length === 0) {
        res.status(404);
        res.send("No holiday found for this date.");

        return;
    }

    res.status(200);
    return res.json(current);
});

router.get('/next/:state', (req, res) => {
    const next = holidays
        .filter(holiday => holiday.state.code === req.params.state)
        .find(holiday => holiday.start > new Date());

    if (!next) {
        res.status(404);
        res.send("No upcoming holiday found.");

        return;
    }

    res.status(200);
    res.json(next);
});

router.get('/upcoming/:state?', (req, res) => {
    const state = req.params.state;
    const upcoming = holidays
        .filter(holiday => !state || holiday.state.code === state)
        .filter(holiday => holiday.start > new Date());

    if (!upcoming || upcoming.length === 0) {
        res.status(404);
        res.send("No upcoming holiday found.");

        return;
    }

    res.status(200);
    res.json(upcoming);
});

export default router;