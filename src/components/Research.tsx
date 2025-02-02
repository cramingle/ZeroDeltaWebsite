import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const researchItems = [
  {
    id: 'basis-trading-strategies',
    title: 'Basis Trading Strategies',
    description: 'Analysis of various basis trading strategies across different market conditions and their performance metrics.',
    category: 'Trading Strategy'
  },
  {
    id: 'market-making-optimization',
    title: 'Market Making Optimization',
    description: 'Deep dive into market making strategies optimization using advanced algorithms and real-time data analysis.',
    category: 'Market Making'
  },
  {
    id: 'funding-rate-analysis',
    title: 'Funding Rate Analysis',
    description: 'Comprehensive analysis of funding rate patterns and their impact on trading strategies.',
    category: 'Market Analysis'
  }
];

const Research = () => {
  return (
    <section className="py-20 sm:py-32 bg-dark" id="research">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Research & Development
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Exploring the frontiers of basis trading and market making through rigorous research and analysis.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {researchItems.map((item) => (
            <Link 
              key={item.id}
              to={`/research/${item.id}`}
              className="group bg-dark-800/50 rounded-xl p-6 hover:bg-dark-800 transition-colors"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <span className="text-success text-sm font-medium">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-success transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-6 flex-grow">
                  {item.description}
                </p>
                <div className="flex items-center text-success">
                  <span className="text-sm font-medium">Read Research</span>
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;