const calculateRisk = require("./riskEngine");

const student = {
  studentId: 203,
  attendance: 60,
  gpa: 5.5,
  previousGpa: 7.0,
  stressLevel: "high",
  socialActivity: "low",
};

const result = calculateRisk(student);

console.log("AI Risk Result:");
console.log(result);
