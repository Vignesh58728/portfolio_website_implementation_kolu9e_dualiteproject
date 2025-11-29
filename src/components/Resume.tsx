import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

export const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-[210mm] mx-auto px-4 sm:px-0"> {/* A4 Width approx */}
        
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 px-4 sm:px-0">
            <h2 className="font-inter font-extrabold text-3xl text-dark-300 mb-4 sm:mb-0">Resume</h2>
            <button 
              onClick={() => window.print()}
              className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors font-work font-medium shadow-md"
            >
                <Download size={18} /> Download / Print
            </button>
        </div>

        {/* ATS Document Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white shadow-xl p-8 md:p-12 text-black font-serif text-sm leading-relaxed"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
            {/* Header */}
            <div className="text-center border-b-2 border-black pb-4 mb-6">
                <h1 className="text-3xl font-bold uppercase tracking-wider mb-2">VIGNESHWARAN .M</h1>
                <p className="text-[13px]">
                    Phone: +91 9360826971 | Email: <a href="mailto:saivigneshas@gmail.com" className="text-blue-800 hover:underline">saivigneshas@gmail.com</a> | 
                    <a href="https://www.linkedin.com/in/vigneshwaran-m-442673254/" target="_blank" rel="noreferrer" className="text-blue-800 hover:underline ml-1">LinkedIn</a> | 
                    <a href="https://github.com/Vignesh58728" target="_blank" rel="noreferrer" className="text-blue-800 hover:underline ml-1">GitHub</a>
                </p>
            </div>

            {/* Education */}
            <div className="mb-6">
                <h3 className="font-bold text-[15px] uppercase border-b border-black mb-3 tracking-wide">Education</h3>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className="font-bold">M.I.E.T Engineering College</span>
                        <span className="font-bold">2022-2026</span>
                    </div>
                    <div className="flex justify-between mb-1">
                        <span>BTech AI-DS</span>
                        <span className="font-bold">CGPA: 8.1 (6th SEM)</span>
                    </div>
                    
                    <div className="flex justify-between mt-2">
                        <span className="font-bold">Government higher secondary school</span>
                        <span className="font-bold">2021-2022</span>
                    </div>
                    <div className="flex justify-between mb-1">
                        <span>HSC</span>
                        <span className="font-bold">65%</span>
                    </div>

                    <div className="flex justify-between mt-2">
                        <span className="font-bold">Government Higher Secondary school</span>
                        <span className="font-bold">2019-2020</span>
                    </div>
                    <div className="flex justify-between">
                        <span>SSLC</span>
                        <span className="font-bold">75%</span>
                    </div>
                </div>
            </div>

            {/* Internships */}
             <div className="mb-6">
                <h3 className="font-bold text-[15px] uppercase border-b border-black mb-3 tracking-wide">Internships</h3>
                
                <div className="mb-4">
                    <div className="flex justify-between mb-1">
                        <span className="font-bold">WEB DESIGN - DLK</span>
                        <span className="font-bold">2024</span>
                    </div>
                    <p className="text-justify">
                        Web design internship should include core technical skills like HTML, CSS, and JavaScript, along with design principles such as UI/UX, wireframing, and responsive design. Other important keywords are proficiency in software like the Adobe Creative Suite or Figma, knowledge of Content Management Systems (CMS) like WordPress, and concepts like SEO.
                    </p>
                </div>

                <div className="mb-4">
                    <div className="flex justify-between mb-1">
                        <span className="font-bold">Diploma In Computer Application - CSE</span>
                        <span className="font-bold">2022</span>
                    </div>
                    <p className="text-justify">
                        Software Proficiency: Microsoft Office Suite (Word, Excel, PowerPoint, Outlook), Google Workspace (Docs, Sheets, Slides, Gmail). Operating Systems: Windows (mention specific versions if relevant, e.g., Windows 10/11), Linux (e.g., Ubuntu), macOS. Internet & Communication Tools: Email management (Outlook, Gmail), Video conferencing (Zoom, MS Teams), Web browsers, Slack. Hardware Skills: Basic troubleshooting, software installation, system maintenance, technical support.
                    </p>
                </div>

                <div>
                    <div className="flex justify-between mb-1">
                        <span className="font-bold">Infosys springboard-Infosys</span>
                    </div>
                    <p className="text-justify">
                        Digital Skills, "Leadership Skills," and "Lifelong Learning" in the skills section. Highlight completed learning modules, projects, and assessments with specific keywords from your completed courses (e.g., Business Communication, Problem-Solving, specific technologies). Mention the completed Springboard certification as a key achievement to boost employability.
                    </p>
                </div>
            </div>

            {/* Projects */}
            <div className="mb-6">
                <h3 className="font-bold text-[15px] uppercase border-b border-black mb-3 tracking-wide">Projects</h3>
                
                <div className="mb-4">
                    <div className="flex justify-between mb-1">
                        <span className="font-bold">AI Based Handwritten Digit Recognition</span>
                        <span className="font-bold">2025</span>
                    </div>
                    <p className="text-justify mb-1">
                        Developed a Forward Intrusion Detection System using microcontrollers and AI for real-time rogue Wi-Fi detection and threat analysis. Integrated Tensor Flow for AI-driven malware analysis, enhancing cybersecurity defenses. Built a live monitoring dashboard with Flask to visualize threats in real time. Designed an affordable, scalable solution targeting the $300B+ cybersecurity market.
                    </p>
                    <p className="italic">
                        <span className="font-bold not-italic">Tech Stack:</span> Micro Controllers, Python, flask API, Embedded C, Tensor flow lite, Machine Learning Algorithms.
                    </p>
                </div>

                <div>
                    <div className="flex justify-between mb-1">
                        <span className="font-bold">AI Based Chatbot using NLP</span>
                        <span className="font-bold">2024</span>
                    </div>
                    <p className="text-justify mb-1">
                        I engineered an AI-driven recommendation system using NLP, cosine similarity, and a custom Counter Victories algorithm to analyze movie descriptions and deliver personalized rankings based on user preferences and viewing history. Built with Python, machine learning, Streamlet, and Pickle libraries, for advanced text analytics and optimization for a seamless, tailored experience.
                    </p>
                    <p className="italic">
                        <span className="font-bold not-italic">Tech Stack:</span> Python, NLP (Natural Language Processing), Machine Learning (Cosine Similarity), Streamlet.
                    </p>
                </div>
            </div>

            {/* Achievements */}
            <div className="mb-6">
                <h3 className="font-bold text-[15px] uppercase border-b border-black mb-3 tracking-wide">Achievements</h3>
                <ul className="list-none space-y-1">
                    <li className="flex justify-between">
                        <span>LeetCode : Solved 200+ Problems | Contest Rating 1600 | <a href="#" className="text-blue-800 hover:underline">Profile</a></span>
                    </li>
                    <li className="flex justify-between">
                        <span>Kochi Hackathon Netstrum Company Kerala : Selected in top 17 teams and finalist</span>
                        <span className="font-bold">2025</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Hack Hustle: Participated in Saveeth Engineering College Hackathon Selected up to final Round</span>
                        <span className="font-bold">2025</span>
                    </li>
                    <li className="flex justify-between">
                        <span>MSME: Participated at SAP hack fest with the theme "Harnessing Renewable Energy.</span>
                        <span className="font-bold">2024</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Bit-AI-MI Hackathon: Participated in the first national-level hackathon with my team, advancing to the finals.</span>
                        <span className="font-bold">2024</span>
                    </li>
                </ul>
            </div>

            {/* Certifications */}
            <div className="mb-6">
                <h3 className="font-bold text-[15px] uppercase border-b border-black mb-3 tracking-wide">Certifications</h3>
                <div className="grid grid-cols-[1fr_auto_auto] gap-x-6 gap-y-1 items-baseline">
                    {/* 2025 */}
                    <div>Advancing in AI development and Cloud computing</div>
                    <div className="font-bold text-right">LinkedIn</div>
                    <div className="font-bold text-right w-12">2025</div>

                    <div>AI agent and AI Cloud computing</div>
                    <div className="font-bold text-right">Microsoft</div>
                    <div className="font-bold text-right">2025</div>

                    <div>Certified in Python for Data Science</div>
                    <div className="font-bold text-right">IBM</div>
                    <div className="font-bold text-right">2025</div>

                    <div>Web Development</div>
                    <div className="font-bold text-right">Alagappa University</div>
                    <div className="font-bold text-right">2025</div>

                    <div>Certified in Programming in Java (88)</div>
                    <div className="font-bold text-right">NPTEL</div>
                    <div className="font-bold text-right">2025</div>

                    <div>Certified in Cloud Computing (67)</div>
                    <div className="font-bold text-right">NPTEL</div>
                    <div className="font-bold text-right">2025</div>

                    <div>Certified in Ethical Hacking (90)</div>
                    <div className="font-bold text-right">NPTEL</div>
                    <div className="font-bold text-right">2025</div>

                    <div>Certified in C Language (78)</div>
                    <div className="font-bold text-right">NPTEL</div>
                    <div className="font-bold text-right">2025</div>

                    {/* 2024 */}
                    <div>Business Email</div>
                    <div className="font-bold text-right">HP</div>
                    <div className="font-bold text-right">2024</div>

                    <div>Certified in Python Essentials</div>
                    <div className="font-bold text-right">GUVI</div>
                    <div className="font-bold text-right">2024</div>

                    <div>Certified in Cloud Computing</div>
                    <div className="font-bold text-right">IBM</div>
                    <div className="font-bold text-right">2024</div>

                    {/* 2022 */}
                    <div>DCA in CSE</div>
                    <div className="font-bold text-right">-</div>
                    <div className="font-bold text-right">2022</div>
                </div>
            </div>

            {/* Skills */}
            <div className="mb-0">
                <h3 className="font-bold text-[15px] uppercase border-b border-black mb-3 tracking-wide">Skills</h3>
                <div className="grid grid-cols-[180px_1fr] gap-y-2">
                    <div className="font-bold">Programming Languages</div>
                    <div>Python | Java | C | HTML/CSS | Java Script | SQL | Dart</div>

                    <div className="font-bold">Technical :</div>
                    <div>Artificial Intelligence | Machine Learning | GenAI | LLM |</div>

                    <div className="font-bold">Tools :</div>
                    <div>VS Code | GitHub | Google Colab | Power BI | Eclipse | Figma | AWS</div>

                    <div className="font-bold">Machine Learning:</div>
                    <div>Pandas | Numpy | Matplotlib | Seaborn | Scikit-learn |</div>
                </div>
            </div>

        </motion.div>
      </div>
    </section>
  );
};
