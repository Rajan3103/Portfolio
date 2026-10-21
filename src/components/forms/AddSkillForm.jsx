import React, { useState } from 'react';
import { Copy, Check, Plus, Trash2, Send } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

const AddSkillForm = ({ onClose }) => {
  const { addSkill } = usePortfolio();
  const [formData, setFormData] = useState({
    category: '',
    items: ['']
  });

  const [submitted, setSubmitted] = useState(false);

  const handleItemChange = (index, value) => {
    const newItems = [...formData.items];
    newItems[index] = value;
    setFormData(prev => ({ ...prev, items: newItems }));
  };

  const addItem = () => {
    setFormData(prev => ({ ...prev, items: [...prev.items, ''] }));
  };

  const removeItem = (index) => {
    if (formData.items.length > 1) {
      const newItems = formData.items.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, items: newItems }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredItems = formData.items.filter(item => item.trim() !== '');
    if (formData.category && filteredItems.length > 0) {
      filteredItems.forEach(item => addSkill(formData.category, item));
      setSubmitted(true);
      setTimeout(() => {
        if (onClose) onClose();
      }, 1500);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <label className="block space-y-2">
        <span className="text-gray-400 text-sm">Category Name</span>
        <input
          type="text"
          name="category"
          required
          value={formData.category}
          onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
          placeholder="e.g., Programming Languages"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors"
        />
      </label>

      <div className="space-y-3">
        <span className="text-gray-400 text-sm block">Skill Items</span>
        {formData.items.map((item, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              value={item}
              required
              onChange={(e) => handleItemChange(index, e.target.value)}
              placeholder={`Skill ${index + 1}`}
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors"
            />
            <button
              type="button"
              onClick={() => removeItem(index)}
              className="p-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl transition-colors"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addItem}
          className="w-full py-3 border border-dashed border-white/10 rounded-xl flex items-center justify-center gap-2 text-gray-400 hover:text-white hover:bg-white/5 transition-all text-sm mb-4"
        >
          <Plus size={18} />
          <span>Add Another Skill</span>
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
              <Check size={20} /> Added Successfully
            </>
          ) : (
            <>
              Add to Portfolio <Send size={20} />
            </>
          )}
        </button>
        <p className="mt-4 text-xs text-center text-gray-500 italic">
          Tip: This will update the website immediately and save your changes locally.
        </p>
      </div>
    </form>
  );
};

export default AddSkillForm;
