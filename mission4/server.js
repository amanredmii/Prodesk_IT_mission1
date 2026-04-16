require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate", async (req, res) => {
    const { name, role, company, skills } = req.body;

    const prompt = `Generate ONLY a professional cover letter.

Rules:
- Use ONLY the provided details.
- Do NOT include placeholders or generic content.
- Keep it concise and formal.
- Output ONLY the cover letter (no explanations, no headings like "Here is your cover letter").

Details:
Name: ${name}
Role: ${role}
Company: ${company}
Skills: ${skills}
`;

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${process.env.API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [{ text: prompt }]
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        const text =
            data?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!text) {
            return res.status(500).json({
                error: "Failed to generate letter",
                fullResponse: data
            });
        }

        res.json({ letter: text });

    } catch (error) {
        console.error("ERROR:", error);
        res.status(500).json({
            error: "Server error"
        });
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});


