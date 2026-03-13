function calculateRisk(data) {

    let riskScore = 0;
    let factors = [];

    // Attendance check
    if (data.attendance < 60) {
        riskScore += 3;
        factors.push("Very low attendance");
    } else if (data.attendance < 75) {
        riskScore += 2;
        factors.push("Low attendance");
    }

    // GPA drop check
    if (data.previousGpa && (data.previousGpa - data.gpa > 1)) {
        riskScore += 2;
        factors.push("Significant GPA drop");
    }

    // Stress level
    if (data.stress === "high") {
        riskScore += 3;
        factors.push("High stress level");
    } else if (data.stress === "medium") {
        riskScore += 1;
        factors.push("Moderate stress");
    }

    // Social engagement
    if (data.social === "low") {
        riskScore += 1;
        factors.push("Low social engagement");
    }

    let riskLevel = "LOW";

    if (riskScore >= 7) riskLevel = "HIGH";
    else if (riskScore >= 4) riskLevel = "MEDIUM";

    return {
        riskScore,
        riskLevel,
        factors,
        recommendation:
            riskLevel === "HIGH"
                ? "Schedule counseling session"
                : riskLevel === "MEDIUM"
                ? "Faculty mentor check-in"
                : "Monitor student progress"
    };
}

module.exports = { calculateRisk };
