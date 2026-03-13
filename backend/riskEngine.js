function calculateRisk(data) {
  let score = 0;
  let factors = [];

  // Attendance Risk
  if (data.attendance < 60) {
    score += 3;
    factors.push("Very low attendance");
  } else if (data.attendance < 75) {
    score += 2;
    factors.push("Low attendance");
  }

  // GPA Drop Risk
  const gpaDrop = data.previousGpa - data.gpa;

  if (gpaDrop > 1) {
    score += 2;
    factors.push("Significant GPA drop");
  }

  // Stress Level Risk
  if (data.stressLevel === "high") {
    score += 3;
    factors.push("High stress level");
  } else if (data.stressLevel === "medium") {
    score += 1;
    factors.push("Moderate stress");
  }

  // Social Activity Risk
  if (data.socialActivity === "low") {
    score += 1;
    factors.push("Low social engagement");
  }

  // Determine Risk Level
  let riskLevel = "Low";
  let recommendation = "Monitor student";

  if (score >= 7) {
    riskLevel = "High";
    recommendation = "Schedule counseling session";
  } else if (score >= 4) {
    riskLevel = "Medium";
    recommendation = "Faculty mentor check-in";
  }

  // Final Output
  return {
    score: score,
    riskLevel: riskLevel,
    factors: factors,
    recommendation: recommendation,
  };
}

module.exports = calculateRisk;
