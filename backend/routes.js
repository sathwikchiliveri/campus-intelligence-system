const express = require("express");
const router = express.Router();
const fs = require("fs");

const { calculateRisk } = require("./riskLogic");
const { getAlerts } = require("./alerts");
const { getResourceUsage } = require("./resources");

// Risk Prediction API
router.post("/predict-risk", (req, res) => {

    const result = calculateRisk(req.body);

    const studentRecord = {
    studentId: req.body.studentId,
    attendance: req.body.attendance,
    gpa: req.body.gpa,
    stress: req.body.stress,
    social: req.body.social,
    riskScore: result.riskScore,
    riskLevel: result.riskLevel
};

    let students = [];

    try {
        students = JSON.parse(fs.readFileSync("students.json"));
    } catch (err) {
        students = [];
    }

    students.push(studentRecord);

    fs.writeFileSync("students.json", JSON.stringify(students, null, 2));

    res.json(result);

});

// Get All Students
router.get("/students", (req, res) => {

    try {
        const students = JSON.parse(fs.readFileSync("students.json"));
        res.json(students);
    } catch (err) {
        res.json([]);
    }

});

// Alerts API
router.get("/alerts", (req, res) => {
    res.json(getAlerts());
});

// Resource Usage API
router.get("/resource-usage", (req, res) => {
    res.json(getResourceUsage());
});

router.get("/dashboard-stats", (req, res) => {

    let students = [];

    try {
        students = JSON.parse(fs.readFileSync("students.json"));
    } catch {
        students = [];
    }

    const totalStudents = students.length;

    const highRisk = students.filter(s => s.riskLevel === "HIGH").length;
    const mediumRisk = students.filter(s => s.riskLevel === "MEDIUM").length;
    const lowRisk = students.filter(s => s.riskLevel === "LOW").length;

    res.json({
        totalStudents,
        highRisk,
        mediumRisk,
        lowRisk
    });

});
module.exports = router;
