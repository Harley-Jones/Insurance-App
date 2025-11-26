import { useState } from 'react';

interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
}

const glossaryTerms: GlossaryTerm[] = [
  { term: 'Cash Value', definition: 'The savings component of permanent life insurance that grows tax-deferred and can be borrowed against.', category: 'Life Insurance' },
  { term: 'Death Benefit', definition: 'The amount paid to beneficiaries when the insured person dies.', category: 'Life Insurance' },
  { term: 'Premium', definition: 'The payment made to keep an insurance policy active.', category: 'General' },
  { term: 'Underwriting', definition: 'The process insurers use to evaluate risk and determine eligibility and pricing.', category: 'General' },
  { term: 'Beneficiary', definition: 'The person or entity designated to receive insurance proceeds.', category: 'General' },
  { term: 'Infinite Banking', definition: 'Strategy using dividend-paying whole life insurance as a personal banking system.', category: 'Wealth Building' },
  { term: 'Paid-Up Additions', definition: 'Additional insurance purchased with dividends, increasing cash value and death benefit.', category: 'Life Insurance' },
  { term: 'Surrender Charge', definition: 'Fee charged for canceling a policy early, common in first 10-15 years.', category: 'General' },
  { term: 'Annuitant', definition: 'Person whose life the annuity payments are based on.', category: 'Annuities' },
  { term: 'Probate', definition: 'Legal process of validating a will and distributing assets, can be lengthy and expensive.', category: 'Estate Planning' }
];

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(glossaryTerms.map(t => t.category)))];

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Insurance Glossary</h2>
      
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search terms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="space-y-4">
        {filteredTerms.map((item, index) => (
          <div key={index} className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-900">{item.term}</h3>
              <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">{item.category}</span>
            </div>
            <p className="text-gray-700">{item.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
