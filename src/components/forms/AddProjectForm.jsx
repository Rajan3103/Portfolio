import React, { useState } from 'react';
import { Copy, Check, Send } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

const AddProjectForm = ({ onClose }) => {
  const { addProject } = usePortfolio();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    type: 'app',
    github: '',
    demo: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
    addProject({
      ...formData,
      tags: tagsArray.length > 0 ? tagsArray : ["React"]
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
          <span className="text-gray-400 text-sm">Project Name</span>
          <input
            type="text"
            name="title"
            required
            value={formData.title}
            onChange={(e) => setFormData(p => ({...p, title: e.target.value}))}
            placeholder="e.g., E-commerce App"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors"
          />
        </label>
        <label className="block space-y-2">
          <span className="text-gray-400 text-sm">Project Type</span>
          <select
            name="type"
            value={formData.type}
            onChange={(e) => setFormData(p => ({...p, type: e.target.value}))}
            className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors text-white"
          >
            <option value="app" className="bg-background">General App (Layout Icon)</option>
            <option value="auth" className="bg-background">Security/Auth (Shield Icon)</option>
            <option value="car" className="bg-background">Automotive (Car Icon)</option>
          </select>
        </label>
      </div>

      <label className="block space-y-2">
        <span className="text-gray-400 text-sm">Description</span>
        <textarea
          name="description"
          required
          value={formData.description}
          onChange={(e) => setFormData(p => ({...p, description: e.target.value}))}
          rows="3"
          placeholder="What does this project do?"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors resize-none"
        ></textarea>
      </label>

      <label className="block space-y-2">
        <span className="text-gray-400 text-sm">Tags (comma separated)</span>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={(e) => setFormData(p => ({...p, tags: e.target.value}))}
          placeholder="React, Tailwind, Node.js"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors"
        />
      </label>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block space-y-2">
          <span className="text-gray-400 text-sm">GitHub Link</span>
          <input
            type="text"
            name="github"
            value={formData.github}
            onChange={(e) => setFormData(p => ({...p, github: e.target.value}))}
            placeholder="https://github.com/..."
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors"
          />
        </label>
        <label className="block space-y-2">
          <span className="text-gray-400 text-sm">Demo Link (optional)</span>
          <input
            type="text"
            name="demo"
            value={formData.demo}
            onChange={(e) => setFormData(p => ({...p, demo: e.target.value}))}
            placeholder="https://..."
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors"
          />
        </label>
      </div>

      <div className="pt-4 border-t border-white/5">
        <button
          type="submit"
          className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/25 disabled:opacity-50"
          disabled={submitted}
        >
          {submitted ? (
            <>
              <Check size={20} /> Project Added
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

export default AddProjectForm;
