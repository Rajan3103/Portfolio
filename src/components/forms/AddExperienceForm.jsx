import React, { useState } from 'react';
import { Copy, Check, Plus, Trash2, Send } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

const AddExperienceForm = ({ onClose }) => {
  const { addExperience } = usePortfolio();
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    period: '',
    location: '',
    responsibilities: ['']
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredResponsibilities = formData.responsibilities.filter(r => r.trim() !== '');
    addExperience({
      ...formData,
      responsibilities: filteredResponsibilities.length > 0 ? filteredResponsibilities : ["Work experience point"]
    });
    setSubmitted(true);
    setTimeout(() => {
      if (onClose) onClose();
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block space-y-2">
          <span className="text-gray-400 text-sm">Job/Degree Title</span>
          <input
            type="text"
            name="title"
            required
            value={formData.title}
            onChange={(e) => setFormData(p => ({...p, title: e.target.value}))}
            placeholder="e.g., Senior Developer"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors"
          />
        </label>
        <label className="block space-y-2">
          <span className="text-gray-400 text-sm">Company/Institution</span>
          <input
            type="text"
            name="company"
            required
            value={formData.company}
            onChange={(e) => setFormData(p => ({...p, company: e.target.value}))}
            placeholder="e.g., Tech Corp"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block space-y-2">
          <span className="text-gray-400 text-sm">Period</span>
          <input
            type="text"
            name="period"
            required
            value={formData.period}
            onChange={(e) => setFormData(p => ({...p, period: e.target.value}))}
            placeholder="e.g., Jan 2023 – Present"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors"
          />
        </label>
        <label className="block space-y-2">
          <span className="text-gray-400 text-sm">Location</span>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={(e) => setFormData(p => ({...p, location: e.target.value}))}
            placeholder="e.g., Remote"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors"
          />
        </label>
      </div>

      <div className="space-y-3">
        <span className="text-gray-400 text-sm block">Responsibilities / Highlights</span>
        {formData.responsibilities.map((resp, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              value={resp}
              required
              onChange={(e) => {
                const newR = [...formData.responsibilities];
                newR[index] = e.target.value;
                setFormData(p => ({...p, responsibilities: newR}));
              }}
              placeholder={`Point ${index + 1}`}
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors"
            />
            <button
              type="button"
              onClick={() => {
                if (formData.responsibilities.length > 1) {
                  const newR = formData.responsibilities.filter((_, i) => i !== index);
                  setFormData(p => ({...p, responsibilities: newR}));
                }
              }}
              className="p-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl transition-colors"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => setFormData(p => ({...p, responsibilities: [...p.responsibilities, '']}))}
          className="w-full py-3 border border-dashed border-white/10 rounded-xl flex items-center justify-center gap-2 text-gray-400 hover:text-white hover:bg-white/5 transition-all text-sm mb-4"
        >
          <Plus size={18} />
          <span>Add Point</span>
        </button>
      </div>

      <div className="pt-4 border-t border-white/5">
        <button
          type="submit"
          className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/25 disabled:opacity-50"
          disabled={submitted}
        >
          {submitted ? (
            <>
              <Check size={20} /> Added to Portfolio
            </>
          ) : (
            <>
              Add to Portfolio <Send size={20} />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default AddExperienceForm;
