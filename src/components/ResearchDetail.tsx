import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

const researchItems = {
  'basis-trading-strategies': {
    title: 'Basis Trading Strategies',
    category: 'Trading Strategy',
    expectedDate: 'Q2 2025'
  },
  'market-making-optimization': {
    title: 'Market Making Optimization',
    category: 'Market Making',
    expectedDate: 'Q2 2025'
  },
  'funding-rate-analysis': {
    title: 'Funding Rate Analysis',
    category: 'Market Analysis',
    expectedDate: 'Q3 2025'
  }
};

const ResearchDetail = () => {
  const { id } = useParams();
  const research = id ? researchItems[id as keyof typeof researchItems] : null;

  if (!research) {
    return (
      <div className="min-h-screen bg-dark py-20 sm:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Research Not Found</h1>
          <Link to="/research" className="text-success hover:text-success/90">
            Back to Research
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark py-20 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link 
          to="/research" 
          className="inline-flex items-center text-success hover:text-success/90 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Research
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
            <div className="flex items-center">
              <Tag className="w-4 h-4 mr-2" />
              <span>{research.category}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Expected: {research.expectedDate}</span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            {research.title}
          </h1>
        </div>

        {/* Coming Soon Message */}
        <div className="bg-dark-800/50 rounded-xl p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mb-6">
            <Calendar className="w-8 h-8 text-success" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Research Coming Soon
          </h2>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Our team is currently working on this comprehensive research paper. 
            We're conducting thorough analysis and gathering data to provide you with 
            valuable insights into {research.title.toLowerCase()}.
          </p>
          <div className="inline-flex items-center text-success">
            <Calendar className="w-5 h-5 mr-2" />
            <span>Expected Publication: {research.expectedDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchDetail; 