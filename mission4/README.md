Cover Letter Generator:
A simple web-based application that generates professional cover letters using user input such as name, role, company, and skills. This project uses an AI API 
( Gemini) to dynamically create personalized cover letters.

Features:
Generate professional cover letters instantly
Clean and simple user interface
Input fields for:
      Candidate Name
      Job Role
      Company Name
      Skills
AI-powered text generation
Copy-to-clipboard functionality
Loading indicator while generating


Tech Stack
Frontend: HTML, CSS, JavaScript
Backend : Node.js, Express
API: Gemini API

Project Structure
Mission4/
│
├── index.html        # Main UI
├── index.css         # Styling
├── index.js         # Frontend logic
├── server.js         # Backend (for API security)
├── .env              # API key (not uploaded to GitHub)
├── package.json
└── README.md


Create a .env file and add:
GEMINI_API_KEY= ..................xyz

Run the Project
        Start backend server:
            node server.js
        Open frontend:
            Just open index.html in  browser

How It Works
User fills the form
Data is captured using JavaScript
A prompt is created using the input
Request is sent to AI API
AI generates a professional cover letter
Output is displayed in UI



Example Prompt
"Generate a professional cover letter.
Rules:
- Do NOT include placeholders or generic content..
- Output ONLY the cover letter (no explanations, no headings like "Here is your cover letter").
Details:
Name: ${name}
Role: ${role}
Company: ${company}
Skills: ${skills}"