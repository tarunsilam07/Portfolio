import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_API, 
  baseURL: "https://openrouter.ai/api/v1",
});

const resumeData = `
  Name: Tarun Silam
  Title: Full-Stack Developer | IoT & AI Enthusiast
  Location: Samalkot, India
  Contact: tarun79767@gmail.com,
  LinkedIn: https://www.linkedin.com/in/tarun-silam-83a46021a
  GitHub: https://github.com/tarunsilam07
  Portfolio: https://watashino-bloggy.vercel.app/
  Leetcode: https://leetcode.com/u/Tarun_Silam/
  GeeksforGeeks: https://www.geeksforgeeks.org/user/tarun_silam/

  Summary:
  Aspiring software engineer and web developer with expertise in full-stack development, DSA, and IoT systems. Passionate about building user-focused applications and driving innovation in technology.

  Education:
  - Bachelor's in Internet of Things, Aditya College of Engineering (2022 - Present)
  - Intermediate (MPC), Pragati Vidyalaya Junior College (2020 - 2022)
  - SSC, Pratibha Vidya Niketan (2020)

  Experience:
  - University Innovation Fellow at Stanford University d.school (Represented at UIF Summit, led innovation initiatives)
  - Team Leader, Full-Stack Developer at Team Blue Pulse (Led IoT-based water monitoring project using MERN stack)
  - Web Development Intern at SkillCraft Technology (Developed responsive web pages, API testing, UI design)
  - Independent Full-Stack Developer (Built a Next.js-based blog website with authentication)

  Technical Skills:
  - Frontend: React.js, HTML5, CSS, EJS, Tailwind CSS, Bootstrap
  - Backend: Node.js, Express.js, Next.js, REST APIs
  - Databases: MongoDB, MySQL, Cloud Firestore, Firebase
  - Programming Languages: JavaScript, Python, C, C++,Typescript
  - Tools: Postman, Git, GitHub, Adobe Express
  - Concepts: Data Structures & Algorithms, Object-Oriented Programming, AI Elements, Cloud Computing

  Certifications:
  - Google AI for Everyone, IBM Python, SQL, Prompt Engineering, Cloud Computing, Artificial Intelligence Fundamentals, Postman Student Fundamentals

  Languages Spoken:
  - Telugu (Native), English (Proficient), Hindi (Proficient)

  Key Achievements:
  - Represented Aditya College at the UIF Summit in the Netherlands.
  - Built an IoT-based real-time water monitoring system with advanced visualization.
  - Developed a full-fledged blog platform using Next.js.

  Important Instruction:
  - Only answer questions strictly related to this resume.
  - If asked something unrelated, respond with: "I can only answer questions about Tarun's background."
`;

export async function POST(req:NextRequest) {
  try {
    const { prompt } = await req.json();
    const aiResponse = await openai.chat.completions.create({
      model: "meta-llama/llama-3.3-70b-instruct:free",
      messages: [
        { role: "system", content: `You are an AI assistant that only answers questions about Tarun Silam. Below is his resume:\n${resumeData}` },
        { role: "user", content: prompt }
      ],
      max_tokens: 300,
    });

    return NextResponse.json({ reply: aiResponse.choices[0]?.message?.content });
  } catch (error) {
    console.error("OpenRouter API error:", error);
    return NextResponse.json({ error: "Failed to fetch AI response" }, { status: 500 });
  }
}
