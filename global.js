/* ==========================================================================
   WEB MCP (AGENT DISCOVERY & EXECUTION)
   ========================================================================== */
if ('modelContext' in navigator) {
    navigator.modelContext.provideContext({
        tools: [
            {
                name: "calculate_bmi",
                description: "Calculates the Body Mass Index (BMI) and metabolic risk for a patient.",
                inputSchema: {
                    type: "object",
                    properties: {
                        weight: { type: "number", description: "Weight in kilograms" },
                        height: { type: "number", description: "Height in centimeters" }
                    },
                    required: ["weight", "height"]
                },
                execute: async (params) => {
                    const heightInMeters = params.height / 100;
                    const bmi = (params.weight / (heightInMeters * heightInMeters)).toFixed(1);
                    
                    let classification = "Metabolic Stress Risk";
                    if (bmi < 18.5) classification = "Deficit Mass Profile";
                    else if (bmi >= 18.5 && bmi <= 24.9) classification = "Optimal Equilibrium";
                    else if (bmi >= 25.0 && bmi <= 29.9) classification = "Excess Structural Mass";

                    return {
                        result: `BMI is ${bmi}. Classification: ${classification}.`
                    };
                }
            }
        ]
    });
}
