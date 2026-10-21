import React, { createContext, useContext, useState, useEffect } from 'react';
import { portfolioData as initialData } from '../data/portfolio';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio_db');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure critical arrays exist
        return {
          ...initialData,
          ...parsed,
          skills: parsed.skills || initialData.skills,
          projects: parsed.projects || initialData.projects,
          experience: parsed.experience || initialData.experience,
          education: parsed.education || initialData.education
        };
      }
    } catch (e) {
      console.error("Local storage error:", e);
    }
    return initialData;
  });

  useEffect(() => {
    localStorage.setItem('portfolio_db', JSON.stringify(data));
  }, [data]);

  const addSkill = (category, item) => {
    setData(prev => {
      const newSkills = [...prev.skills];
      const catIdx = newSkills.findIndex(s => s.category === category);
      
      if (catIdx > -1) {
        newSkills[catIdx].items = [...newSkills[catIdx].items, item];
      } else {
        newSkills.push({ category, items: [item] });
      }
      
      return { ...prev, skills: newSkills };
    });
  };

  const addProject = (project) => {
    setData(prev => ({
      ...prev,
      projects: [...prev.projects, { ...project, id: prev.projects.length + 1 }]
    }));
  };

  const addExperience = (exp) => {
    setData(prev => ({
      ...prev,
      experience: [exp, ...prev.experience]
    }));
  };

  const addEducation = (edu) => {
    setData(prev => ({
      ...prev,
      education: [edu, ...prev.education]
    }));
  };

  return (
    <PortfolioContext.Provider value={{ data, addSkill, addProject, addExperience, addEducation }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error('usePortfolio must be used within a PortfolioProvider');
  return context;
};
