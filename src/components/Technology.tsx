import React from 'react';
import { ArrowRight, Cpu, Shield, Zap, BarChart, Clock, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

const Technology = () => {
  const features = [
    {
      icon: <Clock className="w-6 h-6 text-success" />,
      title: "Basis Discovery System",
      description: "Advanced opportunity scanning and validation across major exchanges, identifying optimal basis spreads.",
      points: [
        "Real-time basis monitoring",
        "Cross-exchange validation",
        "Risk assessment",
        "Yield calculation"
      ]
    },
    {
      icon: <Zap className="w-6 h-6 text-success" />,
      title: "Trading Terminal",
      description: "Professional-grade execution system ensuring optimal basis capture and risk management.",
      points: [
        "Automated market making",
        "Position management",
        "Risk monitoring",
        "Performance tracking"
      ]
    },
    {
      icon: <Coins className="w-6 h-6 text-success" />,
      title: "Bidding System",
      description: "Transparent and efficient marketplace for accessing high-yield basis opportunities.",
      points: [
        "Real-time bid updates",
        "Smart contract security",
        "ZD Coin integration",
        "Automated settlement"
      ]
    },
    {
      icon: <Shield className="w-6 h-6 text-success" />,
      title: "Risk Management",
      description: "Comprehensive protection framework ensuring secure and reliable basis trading.",
      points: [
        "Capital controls",
        "Insurance fund",
        "Multi-sig wallets",
        "Regular audits"
      ]
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Advanced Basis Trading Infrastructure
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our proprietary systems enable secure access to professional-grade basis trading opportunities with expected returns of 500-1800% APR.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-dark/50 rounded-xl p-8 hover:bg-dark transition-colors"
            >
              <div className="flex items-start mb-6">
                <div className="bg-success/10 rounded-lg p-3 mr-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                {feature.points.map((point, idx) => (
                  <div key={idx} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-success/10 rounded-xl p-8 border border-success/20 backdrop-blur-sm max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready for Professional Yields?
            </h3>
            <p className="text-gray-300 mb-6">
              Join the first specialized basis trading marketplace, launching Q2 2025. Bid for exclusive access to opportunities with professional execution.
            </p>
            <Link 
              to="/marketplace" 
              className="inline-block px-8 py-3 bg-success text-dark font-medium hover:bg-success/90 transition-colors rounded-lg"
            >
              Preview Marketplace
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;