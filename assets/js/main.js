// Vitality Dose - Interactive Body Composition Analysis (BCA) & Daily Wellness Calculator
document.addEventListener('DOMContentLoaded', () => {
  const bcaForm = document.getElementById('bca-calculator-form');
  if (!bcaForm) return;

  const calculateMetrics = () => {
    const gender = document.getElementById('calc-gender').value;
    const age = parseFloat(document.getElementById('calc-age').value) || 28;
    const heightCm = parseFloat(document.getElementById('calc-height').value) || 170;
    const weightKg = parseFloat(document.getElementById('calc-weight').value) || 70;
    const activity = parseFloat(document.getElementById('calc-activity').value) || 1.375;
    const goal = document.getElementById('calc-goal').value;

    // 1. BMI Calculation
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);

    let bmiCategory = 'Optimal Range';
    if (bmi < 18.5) bmiCategory = 'Underweight';
    else if (bmi >= 23 && bmi < 25) bmiCategory = 'Overweight (Asian Standard)';
    else if (bmi >= 25) bmiCategory = 'Elevated Weight';

    // 2. Estimated Body Fat % (Deurenberg Adult Equation for educational screening)
    const genderFactor = gender === 'male' ? 1 : 0;
    const bodyFat = Math.max(6, Math.min(55, (1.20 * bmi) + (0.23 * age) - (10.8 * genderFactor) - 5.4));

    // 3. BMR (Mifflin-St Jeor Equation)
    const bmrBase = (10 * weightKg) + (6.25 * heightCm) - (5 * age);
    const bmr = gender === 'male' ? bmrBase + 5 : bmrBase - 161;

    // 4. TDEE & Target Calories
    const tdee = bmr * activity;
    let targetCalories = tdee;
    if (goal === 'fat-loss') targetCalories = tdee - 400;
    else if (goal === 'muscle-gain') targetCalories = tdee + 300;

    // 5. Daily Protein & Hydration Targets
    let proteinFactor = 1.2;
    if (goal === 'fat-loss') proteinFactor = 1.5;
    else if (goal === 'muscle-gain') proteinFactor = 1.8;
    const dailyProtein = Math.round(weightKg * proteinFactor);
    const dailyWaterLiters = (weightKg * 0.035).toFixed(1);

    // Update UI
    document.getElementById('res-bmi').textContent = `${bmi.toFixed(1)} (${bmiCategory})`;
    document.getElementById('res-bodyfat').textContent = `${bodyFat.toFixed(1)}%`;
    document.getElementById('res-calories').textContent = `${Math.round(targetCalories)} kcal`;
    document.getElementById('res-protein').textContent = `${dailyProtein} g / day`;
    document.getElementById('res-water').textContent = `${dailyWaterLiters} Liters`;
    document.getElementById('res-bmr').textContent = `${Math.round(bmr)} kcal`;
  };

  bcaForm.addEventListener('input', calculateMetrics);
  bcaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    calculateMetrics();
  });

  // Run initial calculation on load
  calculateMetrics();
});
