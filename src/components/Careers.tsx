import React from 'react';
import { ArrowRight, Users, Code, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const openPositions = [
    {
      id: 'python-developer',
      title: 'Junior Python Developer',
      location: 'Kediri Kota',
      type: 'Full-time',
      description: 'Join us in building Ziro Delta Terminal, a specialized market analysis tool for basis markets. Looking for a junior developer with Python experience and eagerness to learn about financial markets.'
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-dark" id="careers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Help us build the future of basis trading and market making in the digital asset space.
          </p>
        </div>

        <div className="grid gap-8 max-w-2xl mx-auto">
          {openPositions.map((position) => (
            <div 
              key={position.id}
              className="bg-dark-800/50 rounded-xl p-6 hover:bg-dark-800 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {position.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4">
                    <span>{position.location}</span>
                    <span>•</span>
                    <span>{position.type}</span>
                  </div>
                  <p className="text-gray-400 mb-6">
                    {position.description}
                  </p>
                </div>
                <Code className="w-8 h-8 text-success flex-shrink-0" />
              </div>
              
              <Link 
                to={`/careers/${position.id}`}
                className="inline-flex items-center px-4 py-2 bg-success text-dark font-medium rounded-lg hover:bg-success/90 transition-colors"
              >
                View Position
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Culture Section */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center space-x-2 text-success mb-6">
            <Users className="w-5 h-5" />
            <span className="font-medium">Our Culture</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            What Makes Us Different
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
            {[
              {
                title: 'Early Stage Impact',
                description: 'Join early and have a significant impact on our product and company direction.'
              },
              {
                title: 'Learning & Growth',
                description: 'Continuous learning opportunities in trading, technology, and market analysis.'
              },
              {
                title: 'Innovation Focus',
                description: 'Work on cutting-edge solutions in the basis trading and market making space.'
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <ArrowRight className="w-5 h-5 text-success mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;