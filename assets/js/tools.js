/* ── TOOL TABS ── */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tool-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('panel-' + btn.dataset.tab).classList.add('active');
  });
});

/* ── UNIT TOGGLE ── */
let bmiUnit = 'metric';
function setUnit(tool, unit, btn) {
  bmiUnit = unit;
  document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const wl = document.getElementById('bmi-w-label');
  const hl = document.getElementById('bmi-h-label');
  const wi = document.getElementById('bmi-weight');
  const hi = document.getElementById('bmi-height');
  if (unit === 'imperial') {
    wl.textContent = 'Weight (lbs)'; hl.textContent = 'Height (inches)';
    wi.placeholder = '154'; hi.placeholder = '67';
  } else {
    wl.textContent = 'Weight (kg)'; hl.textContent = 'Height (cm)';
    wi.placeholder = '70'; hi.placeholder = '170';
  }
}

/* ── BMI ── */
function calcBMI() {
  let w = parseFloat(document.getElementById('bmi-weight').value);
  let h = parseFloat(document.getElementById('bmi-height').value);
  if (!w || !h) return alert('Please enter both weight and height.');
  if (bmiUnit === 'imperial') { w = w * 0.453592; h = h * 2.54; }
  const bmi = w / ((h / 100) ** 2);
  const el = document.getElementById('bmi-result');
  el.classList.add('show');
  document.getElementById('bmi-val').textContent = bmi.toFixed(1);
  let cat = '', color = '';
  const rows = ['bmi-normal','bmi-over','bmi-obese'];
  rows.forEach(r => document.getElementById(r).classList.remove('highlight'));
  if (bmi < 18.5) { cat = 'Underweight'; color = '#6B8E8A'; }
  else if (bmi < 25) { cat = 'Normal Weight ✓'; color = '#4F7A6F'; document.getElementById('bmi-normal').classList.add('highlight'); }
  else if (bmi < 30) { cat = 'Overweight'; color = '#D4956A'; document.getElementById('bmi-over').classList.add('highlight'); }
  else { cat = 'Obese'; color = '#B87333'; document.getElementById('bmi-obese').classList.add('highlight'); }
  document.getElementById('bmi-cat').textContent = cat;
  document.getElementById('bmi-val').style.color = color;
}

/* ── TDEE ── */
function calcTDEE() {
  const age = parseFloat(document.getElementById('tdee-age').value);
  const w = parseFloat(document.getElementById('tdee-weight').value);
  const h = parseFloat(document.getElementById('tdee-height').value);
  const gender = document.getElementById('tdee-gender').value;
  const activity = parseFloat(document.getElementById('tdee-activity').value);
  if (!age || !w || !h) return alert('Please fill all fields.');
  let bmr;
  if (gender === 'male') bmr = 10 * w + 6.25 * h - 5 * age + 5;
  else bmr = 10 * w + 6.25 * h - 5 * age - 161;
  const tdee = Math.round(bmr * activity);
  document.getElementById('tdee-result').classList.add('show');
  document.getElementById('tdee-val').textContent = tdee.toLocaleString();
  document.getElementById('tdee-loss').textContent = (tdee - 500).toLocaleString() + ' kcal';
  document.getElementById('tdee-maint').textContent = tdee.toLocaleString() + ' kcal';
  document.getElementById('tdee-gain').textContent = (tdee + 500).toLocaleString() + ' kcal';
}

/* ── MACROS ── */
function calcMacros() {
  const cals = parseFloat(document.getElementById('macro-cal').value);
  const weight = parseFloat(document.getElementById('macro-weight').value);
  const goal = document.getElementById('macro-goal').value;
  if (!cals) return alert('Please enter your calorie target.');
  let pRatio, cRatio, fRatio;
  if (goal === 'loss')     { pRatio=0.35; cRatio=0.35; fRatio=0.30; }
  else if (goal === 'gain') { pRatio=0.30; cRatio=0.45; fRatio=0.25; }
  else                      { pRatio=0.30; cRatio=0.40; fRatio=0.30; }
  const pCal = cals * pRatio, cCal = cals * cRatio, fCal = cals * fRatio;
  const pG = Math.round(pCal / 4), cG = Math.round(cCal / 4), fG = Math.round(fCal / 9);
  document.getElementById('macro-result').classList.add('show');
  document.getElementById('prot-val').textContent = pG + 'g';
  document.getElementById('carb-val').textContent = cG + 'g';
  document.getElementById('fat-val').textContent  = fG + 'g';
  setTimeout(() => {
    document.getElementById('prot-bar').style.width = (pRatio * 100) + '%';
    document.getElementById('carb-bar').style.width = (cRatio * 100) + '%';
    document.getElementById('fat-bar').style.width  = (fRatio * 100) + '%';
  }, 50);
  const note = weight ? ` (Protein goal: ${Math.round(weight * (goal==='gain'?2.2:1.8))}g based on your weight)` : '';
  document.getElementById('macro-summary').textContent = `${Math.round(pRatio*100)}% protein · ${Math.round(cRatio*100)}% carbs · ${Math.round(fRatio*100)}% fats${note}`;
}

/* ── IDEAL BODY WEIGHT ── */
function calcIBW() {
  const h = parseFloat(document.getElementById('ibw-height').value);
  const gender = document.getElementById('ibw-gender').value;
  const current = parseFloat(document.getElementById('ibw-current').value);
  if (!h) return alert('Please enter your height.');
  const inchOver = (h / 2.54) - 60; // inches over 5ft
  const devine  = gender==='male' ? 50   + 2.3 * inchOver : 45.5 + 2.3 * inchOver;
  const robinson= gender==='male' ? 52   + 1.9 * inchOver : 49   + 1.7 * inchOver;
  const miller  = gender==='male' ? 56.2 + 1.41* inchOver : 53.1 + 1.36* inchOver;
  const hamwi   = gender==='male' ? 48   + 2.7 * inchOver : 45.5 + 2.2 * inchOver;
  const box = document.getElementById('ibw-result');
  box.classList.add('show');
  const range = document.getElementById('ibw-range');
  range.innerHTML = [
    {f:'Devine',v:devine},{f:'Robinson',v:robinson},{f:'Miller',v:miller},{f:'Hamwi',v:hamwi}
  ].map(x => `<div class="range-row"><span class="r-label">${x.f} Formula</span><span class="r-val">${Math.max(0,x.v).toFixed(1)} kg</span></div>`).join('');
  const avg = (devine+robinson+miller+hamwi)/4;
  range.innerHTML += `<div class="range-row highlight" style="margin-top:.5rem"><span class="r-label">Average Estimate</span><span class="r-val">${avg.toFixed(1)} kg</span></div>`;
  const comp = document.getElementById('ibw-comparison');
  if (current) {
    const diff = current - avg;
    comp.style.display='block';
    comp.innerHTML = diff > 0
      ? `<span style="color:var(--cu)">You are approximately <strong>${diff.toFixed(1)} kg above</strong> the average ideal weight estimate.</span> This is a guide — body composition (muscle vs fat) matters more than this number.`
      : diff < 0
      ? `<span style="color:var(--fl)">You are approximately <strong>${Math.abs(diff).toFixed(1)} kg below</strong> the average ideal weight estimate.</span>`
      : `<span style="color:var(--cu)">You are right at the average ideal weight estimate! ✓</span>`;
  } else { comp.style.display='none'; }
}

/* ── BODY FAT ── */
function toggleHips() {
  const g = document.getElementById('bf-gender').value;
  document.getElementById('bf-hips-group').style.display = g==='female' ? 'block' : 'none';
}
function calcBodyFat() {
  const gender = document.getElementById('bf-gender').value;
  const h = parseFloat(document.getElementById('bf-height').value);
  const neck = parseFloat(document.getElementById('bf-neck').value);
  const waist = parseFloat(document.getElementById('bf-waist').value);
  const hips = parseFloat(document.getElementById('bf-hips').value) || 0;
  if (!h || !neck || !waist) return alert('Please enter height, neck, and waist.');
  if (gender==='female' && !hips) return alert('Please enter hip measurement for female calculation.');
  let bf;
  if (gender==='male') {
    bf = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(h)) - 450;
  } else {
    bf = 495 / (1.29579 - 0.35004 * Math.log10(waist + hips - neck) + 0.22100 * Math.log10(h)) - 450;
  }
  bf = Math.max(2, Math.min(60, bf));
  const box = document.getElementById('bf-result');
  box.classList.add('show');
  document.getElementById('bf-val').textContent = bf.toFixed(1) + '%';
  let cat, color;
  const ranges_m = [{l:'Essential Fat',r:'2–5%',lo:2,hi:5},{l:'Athletic',r:'6–13%',lo:6,hi:13},{l:'Fitness',r:'14–17%',lo:14,hi:17},{l:'Average',r:'18–24%',lo:18,hi:24},{l:'Obese',r:'≥ 25%',lo:25,hi:100}];
  const ranges_f = [{l:'Essential Fat',r:'10–13%',lo:10,hi:13},{l:'Athletic',r:'14–20%',lo:14,hi:20},{l:'Fitness',r:'21–24%',lo:21,hi:24},{l:'Average',r:'25–31%',lo:25,hi:31},{l:'Obese',r:'≥ 32%',lo:32,hi:100}];
  const ranges = gender==='male' ? ranges_m : ranges_f;
  const matched = ranges.find(r => bf >= r.lo && bf <= r.hi) || ranges[ranges.length-1];
  cat = matched.l; color = ['Essential Fat','Athletic','Fitness'].includes(cat) ? 'var(--fl)' : cat==='Average' ? 'var(--cu)' : '#D4956A';
  document.getElementById('bf-cat').textContent = cat;
  document.getElementById('bf-val').style.color = color;
  document.getElementById('bf-range').innerHTML = ranges.map(r =>
    `<div class="range-row ${matched.l===r.l?'highlight':''}"><span class="r-label">${r.l}</span><span class="r-val">${r.r}</span></div>`
  ).join('');
}