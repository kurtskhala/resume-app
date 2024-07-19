import React from "react";
import "./ExperienceStyles.css";
import Header from "../header/Header";

const data = [
  {
    company: "JTI",
    period: "2021-2022",
    position: "Sales Analyst",
    describtion: [
      "Data Analysis: Utilized advanced data analysis techniques to interpret sales data, identifying key trends and insights to support decision-making processes.",
      "Reporting: Designed and maintained interactive dashboards and reports using tools like Power BI, enhancing the visibility of sales performance metrics.",
      "Collaboration: Worked closely with sales and marketing teams to provide actionable insights, contributing to the development and implementation of sales strategies.",
      "Data Visualization: Applied strong data visualization skills to present complex data in a clear and concise manner, facilitating better understanding and communication across departments.",
      "Technical Skills: Gained proficiency in SQL, Excel, and other data management tools, laying a solid foundation for transitioning into front-end development with a focus on data-driven web applications.",
    ],
  },
  {
    company: "Trainee",
    period: "2021-2022",
    position: "Front-End Development",
    describtion: [
      "Comprehensive Training: Successfully completed an intensive training program focused on front-end development technologies including HTML5, CSS3, JavaScript, and React.",
      "Code Quality: Emphasized best practices for code quality, version control with Git, and modern development tools.",
      "Continuous Learning: Demonstrated commitment to continuous learning and professional development by actively engaging in workshops, coding challenges, and peer code reviews.",
      "Technical Skills: Acquired proficiency in utilizing RESTful APIs, implementing responsive design principles, and optimizing web applications for performance and accessibility.",
    ],
  },
  {
    company: "Freelancer",
    period: "2019-2024",
    position: "Accountant",
    describtion: [
      "Financial Management: Managed financial records, prepared budgets, and conducted financial analysis for various clients, ensuring accuracy and compliance with accounting standards.",
      "Client Communication: Effectively communicated with clients to understand their financial needs, providing tailored accounting solutions and actionable financial advice.",
      "Software Proficiency: Utilized accounting software such as QuickBooks, Excel, and other financial tools to streamline processes and improve efficiency.",
      "Attention to Detail: Maintained a high level of accuracy and attention to detail in all financial transactions and reports, paralleling the precision required in front-end coding and debugging.",
      "Adaptability: Demonstrated adaptability and problem-solving skills by managing diverse client portfolios, transitioning these skills into effectively troubleshooting and solving issues in web development projects.",
    ],
  },
];

const Experience = () => {
  return (
    <div id="experience" className="app-resume-experience">
      <Header header="Experience" />
      <div className="app-resume-experience-container">
        {data.map((job) => (
          <div key={job.company} className="app-resume-experience-card">
            <div className="app-resume-experience-companyPeriod">
              <div className="app-resume-experience-company">{job.company}</div>
              <div className="app-resume-experience-period">{job.period}</div>
            </div>
            <div className="app-resume-experience-position-description">
              <div className="app-resume-experience-position">
                {job.position}
              </div>
              <ol className="app-resume-experience-position-description">
                {job.describtion.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
