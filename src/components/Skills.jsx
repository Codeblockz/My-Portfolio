import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "C#", "Java", "Matlab", "SQL", "R"]
    },
    {
      title: "AI/ML Frameworks & Libraries",
      skills: ["TensorFlow", "PyTorch", "Keras", "scikit-learn", "pandas", "Seaborn"]
    },
    {
      title: "AI/ML Specializations",
      skills: ["NLP", "Statistical Analysis", "Classification", "Regression", "RAG Systems", "Multi-Agent AI"]
    },
    {
      title: "Frameworks & Technologies",
      skills: ["Django", ".NET", "OpenAI API", "Langchain", "Hugging Face", "CrewAI"]
    },
    {
      title: "DevOps & Tools",
      skills: ["GitHub", "CI/CD", "Azure", "Jupyter Notebook", "Excel VBA", "Object-Oriented Programming"]
    },
    {
      title: "Data & Databases",
      skills: ["SQL Server", "Vector Databases", "Chroma DB", "Data Transformation", "Statistical Analysis", "EDA"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
