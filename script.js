 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/script.js b/script.js
index 075895c899e7095c64de7176e5bb41a362b6ad6e..9a2bc4c321fcf0b501078a22e66f3b2a601ad747 100644
--- a/script.js
+++ b/script.js
@@ -1,33 +1,107 @@
-// Sticky Header
 const nav = document.getElementById('nav');
-window.addEventListener('scroll', () => {
-  nav.classList.toggle('stuck', window.scrollY > 50);
-});
-
-// Mobile Menu Logic
-const mob = document.getElementById('mob');
-const burger = document.getElementById('burger');
-const mobX = document.getElementById('mobX');
-
-burger.addEventListener('click', () => mob.classList.add('open'));
-mobX.addEventListener('click', () => mob.classList.remove('open'));
-
-// Close mobile menu on link click
-mob.querySelectorAll('a').forEach(link => {
-  link.addEventListener('click', () => mob.classList.remove('open'));
-});
-
-// Scroll Reveal Observer
-const revealOptions = {
-  threshold: 0.1
-};
+if (nav) {
+  window.addEventListener('scroll', () => {
+    nav.classList.toggle('stuck', window.scrollY > 50);
+  });
+}
 
+const revealOptions = { threshold: 0.1 };
 const observer = new IntersectionObserver((entries) => {
-  entries.forEach(entry => {
+  entries.forEach((entry) => {
     if (entry.isIntersecting) {
       entry.target.classList.add('on');
     }
   });
 }, revealOptions);
 
-document.querySelectorAll('.rev').forEach(el => observer.observe(el));
+document.querySelectorAll('.rev').forEach((el) => observer.observe(el));
+
+const form = document.getElementById('healthForm');
+const results = document.getElementById('results');
+
+const formatNumber = (value) => Number(value).toFixed(1);
+
+const getBmiCategory = (bmi) => {
+  if (bmi < 18.5) return 'Underweight';
+  if (bmi < 25) return 'Healthy range';
+  if (bmi < 30) return 'Overweight';
+  return 'Obesity range';
+};
+
+if (form && results) {
+  form.addEventListener('submit', (event) => {
+    event.preventDefault();
+
+    const age = Number(document.getElementById('age').value);
+    const sex = document.getElementById('sex').value;
+    const heightCm = Number(document.getElementById('height').value);
+    const weightKg = Number(document.getElementById('weight').value);
+    const activity = Number(document.getElementById('activity').value);
+    const goal = document.getElementById('goal').value;
+
+    const heightM = heightCm / 100;
+    const bmi = weightKg / (heightM * heightM);
+    const healthyMin = 18.5 * (heightM * heightM);
+    const healthyMax = 24.9 * (heightM * heightM);
+
+    const bmr = sex === 'male'
+      ? (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5
+      : (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
+
+    const tdee = bmr * activity;
+    let targetCalories = tdee;
+    if (goal === 'lose') targetCalories -= 400;
+    if (goal === 'gain') targetCalories += 300;
+
+    const hydration = weightKg * 0.033;
+
+    results.innerHTML = `
+      <article class="result-card">
+        <h3>Current BMI</h3>
+        <p>${formatNumber(bmi)} (${getBmiCategory(bmi)})</p>
+      </article>
+      <article class="result-card">
+        <h3>Relative Healthy Weight</h3>
+        <p>${formatNumber(healthyMin)}kg - ${formatNumber(healthyMax)}kg</p>
+      </article>
+      <article class="result-card">
+        <h3>Daily Target Calories</h3>
+        <p>${Math.round(targetCalories)} kcal</p>
+      </article>
+      <p class="result-note">Hydration target: about <strong>${formatNumber(hydration)}L/day</strong>. For personalised macros and meal timing, book your free consultation.</p>
+    `;
+  });
+}
+
+const challenges = [
+  '7-Day Step Ladder: Start at 6,000 steps and add 500 daily.',
+  'Hydration Sprint: Drink your target water amount before 7 PM for 7 days.',
+  'Protein Week: Include a protein source in all three major meals.',
+  'Sleep Reset: Fixed bedtime for 7 days and avoid screens 45 minutes before sleep.',
+  'Sugar Audit: Replace one sugary snack with fruit + nuts daily.'
+];
+
+const challengeText = document.getElementById('challengeText');
+const challengeBtn = document.getElementById('challengeBtn');
+const shareBtn = document.getElementById('shareBtn');
+const copyStatus = document.getElementById('copyStatus');
+
+if (challengeBtn && challengeText) {
+  challengeBtn.addEventListener('click', () => {
+    const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
+    challengeText.textContent = randomChallenge;
+    if (copyStatus) copyStatus.textContent = '';
+  });
+}
+
+if (shareBtn && challengeText) {
+  shareBtn.addEventListener('click', async () => {
+    const message = `I started a new Vitality Dose challenge: ${challengeText.textContent}`;
+    try {
+      await navigator.clipboard.writeText(message);
+      if (copyStatus) copyStatus.textContent = 'Share text copied. Paste it in WhatsApp or Instagram!';
+    } catch (error) {
+      if (copyStatus) copyStatus.textContent = 'Could not copy automatically. Please copy text manually.';
+    }
+  });
+}
 
EOF
)
