const calculateRisk = require("./riskEngine");

const students = [
  {
    attendance: 92,
    gpa: 8.5,
    previousGpa: 8.3,
    stressLevel: "low",
    socialActivity: "high",
  },
  {
    attendance: 72,
    gpa: 7.0,
    previousGpa: 8.3,
    stressLevel: "medium",
    socialActivity: "medium",
  },
  {
    attendance: 60,
    gpa: 5.5,
    previousGpa: 7.0,
    stressLevel: "high",
    socialActivity: "low",
  },
];

students.forEach((student, index) => {
  console.log(`Student ${index + 1}`);
  console.log(calculateRisk(student));
  console.log("---------------");
});
