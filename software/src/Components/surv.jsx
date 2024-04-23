import React, { useState } from "react";
import logo from "../assets/logo.png";

const SurveyForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    staffType: "",
    jobSatisfaction: "",
    workEnvironment: "",
    communication: "",
    professionalDevelopment: "",
    department: "",
    benefits: "",
    policies: "",
    role: "",
    likeMost: "",
    improvementAreas: "",
    overAll: "",
  });

  const sections = [
    {
      title: "Introduction",
      image: { logo },
      text: "An employee satisfaction survey for all University staff is being conducted by Management to gauge their morale, identify areas for improvement, and enhance overall satisfaction. Your feedback is crucial in helping Management make the University an even better place to work. Please answer the following questions honestly and to the best of your ability. Your responses will remain confidential.",
    },
    {
      title: "Section 1: Staff Information",
      questions: [
        {
          id: "staffType",
          text: "Select your staff type",
          options: [
            "Academic Senior Member",
            "Administrative Senior Member",
            "Senior Staff",
            "Junior Staff",
          ],
        },
      ],
    },
    {
      title: "Section 2: General Job Satisfaction at the University",
      questions: [
        {
          id: "jobSatisfaction",
          text: "2.1. What is your overall job satisfaction at GCTU?",
          options: [
            "Very Satisfied",
            "Satisfied",
            "Neutral",
            "Dissatisfied",
            "Very Dissatisfied",
          ],
        },
        {
          id: "likeMost",
          text: "2.2. What do you like most about the University?",
          openText: true,
        },
        {
          id: "improvementAreas",
          text: "2.3. What aspects of the University do you think could be improved?",
          openText: true,
        },
        // Add other questions in this section
      ],
    },
    {
      title: "Section 3: Work Environment",
      questions: [
        {
          id: "workEnvironment",
          text: "3.1. How would you rate the external physical working conditions (ambiance) at the University?",
          options: [
            "Very Satisfied",
            "Satisfied",
            "Neutral",
            "Dissatisfied",
            "Very Dissatisfied",
          ],
        },
        {
          id: "workEnvironment",
          text: "3.2. How would you rate the internal physical working conditions (e.g., office space,resources such as computers, desk) in your office at the University?",
          options: [
            "Very Satisfied",
            "Satisfied",
            "Neutral",
            "Dissatisfied",
            "Very Dissatisfied",
          ],
        },
        {
          id: "workEnvironment",
          text: "3.3. How would you rate the washrooms at the University at the University?",
          options: [
            "Very Satisfied",
            "Satisfied",
            "Neutral",
            "Dissatisfied",
            "Very Dissatisfied",
          ],
        },
        {
          id: "workEnvironment",
          text: "3.4. How would you rate the general relationship and citizenship among all employees at the University?",
          options: [
            "Very Satisfied",
            "Satisfied",
            "Neutral",
            "Dissatisfied",
            "Very Dissatisfied",
          ],
        },
      ],
    },
    {
      title: "Section 4: Communication",
      questions: [
        {
          id: "communication",
          text: "4.1. How do you rate how goals and objectives are communicated to staff at the University?",
          options: [
            "Very Satisfied",
            "Satisfied",
            "Neutral",
            "Dissatisfied",
            "Very Dissatisfied",
          ],
        },
        {
          id: "communication",
          text: "4.2. How do you rate the quality of events, notices and news communicated to staff at the University?",
          options: [
            "Very Satisfied",
            "Satisfied",
            "Neutral",
            "Dissatisfied",
            "Very Dissatisfied",
          ],
        },
        {
          id: "communication",
          text: "4.3. How do you rate the timeliness of events, notices and news communicated to staff at the University?",
          options: [
            "Very Satisfied",
            "Satisfied",
            "Neutral",
            "Dissatisfied",
            "Very Dissatisfied",
          ],
        },
      ],
    },
    {
      title: "Section 5: Professional Development",
      questions: [
        {
          id: "professionalDevelopment",
          text: "5.1. Are you satisfied with the opportunities for professional and academic development programs provided at the University?",
          options: [
            "Very Satisfied",
            "Satisfied",
            "Neutral",
            "Dissatisfied",
            "Very Dissatisfied",
          ],
        },
        {
          id: "professionalDevelopment",
          text: "5.2. Are you satisfied with the capacity building workshops/conferences provided at the University?",
          options: [
            "Very Satisfied",
            "Satisfied",
            "Neutral",
            "Dissatisfied",
            "Very Dissatisfied",
          ],
        },
      ],
    },
    {
      title: "Section 6: Departmental Effectiveness and Relationship",
      questions: [
        {
          id: "department",
          text: "6.1. How would you rate the effectiveness/abilities of your immediate supervisor/manager in supporting your work and the Department as whole?",
          options: [
            "Very Satisfied",
            "Satisfied",
            "Neutral",
            "Dissatisfied",
            "Very Dissatisfied",
          ],
        },
        {
          id: "department",
          text: "6.2. How would you rate the relationship (attitude) between you and of your immediate supervisor/manager in supporting your work?",
          options: [
            "Very Satisfied",
            "Satisfied",
            "Neutral",
            "Dissatisfied",
            "Very Dissatisfied",
          ],
        },
        {
          id: "department",
          text: "6.3. How would you rate the effectiveness/abilities of the staff in your department in supporting your work?",
          options: [
            "Very Satisfied",
            "Satisfied",
            "Neutral",
            "Dissatisfied",
            "Very Dissatisfied",
          ],
        },
        {
          id: "department",
          text: "6.4. How would you rate the relationship (attitude) between you and your colleagues in your Department?",
          options: [
            "Very Satisfied",
            "Satisfied",
            "Neutral",
            "Dissatisfied",
            "Very Dissatisfied",
          ],
        },
      ],
    },
    {
      title: "Section 7: Benefits and Compensation",
      questions: [
        {
          id: "benefits",
          text: "7.1. Are you satisfied with the opportunities for professional and academic development programs provided at the University?",
          options: [
            "Very Satisfied",
            "Satisfied",
            "Neutral",
            "Dissatisfied",
            "Very Dissatisfied",
          ],
        },
        {
          id: "benefits",
          text: "7.2. Are you satisfied with the capacity building workshops/conferences provided at the University?",
          options: [
            "Very Satisfied",
            "Satisfied",
            "Neutral",
            "Dissatisfied",
            "Very Dissatisfied",
          ],
        },
      ],
    },
    {
      title: "Section 8: University Policies",
      questions: [
        {
          id: "policies",
          text: "8.1. Are you satisfied with the Policies of the University?",
          options: [
            "Very Satisfied",
            "Satisfied",
            "Neutral",
            "Dissatisfied",
            "Very Dissatisfied",
          ],
        },
        {
          id: "policies",
          text: "8.2. Are you satisfied with how Policies are implemented at the University?",
          options: [
            "Very Satisfied",
            "Satisfied",
            "Neutral",
            "Dissatisfied",
            "Very Dissatisfied",
          ],
        },
      ],
    },
    {
      title: "Section 9: Role/Duty Satisfaction",
      questions: [
        {
          id: "role",
          text: "9.1. Are you satisfied with your job/role at the University?",
          options: [
            "Very Satisfied",
            "Satisfied",
            "Neutral",
            "Dissatisfied",
            "Very Dissatisfied",
          ],
        },
        {
          id: "role",
          text: "9.2. Are you satisfied with the support provided by the University for your Work?",
          options: [
            "Very Satisfied",
            "Satisfied",
            "Neutral",
            "Dissatisfied",
            "Very Dissatisfied",
          ],
        },
      ],
    },
    {
      title: "Section 10: Overall Comments",
      questions: [
        {
          id: "overAll",
          text: "10.1. Is there anything else you would like to share regarding your experience as a staff member at [University Name]? [Open text]",
          openText: true,
        },
      ],
    },
  ];

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (questionId, value) => {
    setFormData({ ...formData, [questionId]: value });
  };

  const renderQuestions = () => {
    const currentSection = sections[currentStep];
    return (
      <div>
        <h3 className="text-lg font-semibold mb-2">{currentSection.title}</h3>
        {currentSection.questions &&
          currentSection.questions.map((question, index) => (
            <div key={index} className="mb-4">
              <p>{question.text}</p>
              {question.options ? (
                question.options.map((option, idx) => (
                  <label key={idx} className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      name={question.id}
                      value={option}
                      checked={formData[question.id] === option}
                      onChange={() => handleChange(question.id, option)}
                      className="form-radio text-indigo-600"
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                ))
              ) : (
                <textarea
                  rows="4"
                  cols="50"
                  value={formData[question.id]}
                  onChange={(e) => handleChange(question.id, e.target.value)}
                  className="border rounded p-2"
                />
              )}
            </div>
          ))}
        <div className="flex justify-between">
          {currentStep !== 0 && (
            <button
              onClick={handleBack}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
            >
              Back
            </button>
          )}
          {currentStep !== sections.length - 1 && (
            <button
              onClick={handleNext}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-lg mx-auto my-8 p-4 bg-gray-100 rounded-lg shadow-lg">
      {renderQuestions()}
    </div>
  );
};

export default SurveyForm;
