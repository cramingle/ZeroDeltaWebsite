import React from 'react';
import { ArrowRight, Cpu, Shield, Zap, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Technology = () => {
  const features = [
    {
      icon: <BarChart className="w-6 h-6 text-success" />,
      title: "Basis Trading",
      description: "Advanced statistical arbitrage across spot and derivatives markets, capturing price differentials with precision.",
      points: [
        "Real-time basis spread monitoring",
        "Multi-venue execution optimization",
        "Automated position management"
      ]
    },
    {
      icon: <Zap className="w-6 h-6 text-success" />,
      title: "Funding Rate Optimization",
      description: "Sophisticated strategies for funding rate capture and optimization across perpetual markets.",
      points: [
        "Dynamic rate prediction models",
        "Cross-exchange rate arbitrage",
        "Risk-adjusted position sizing"
      ]
    },
    {
      icon: <Cpu className="w-6 h-6 text-success" />,
      title: "Exchange Integration",
      description: "Direct connectivity to major venues with microsecond precision execution capabilities.",
      points: [
        "Binance, Bybit, OKX integration",
        "WebSocket data streaming",
        "Smart order routing system"
      ]
    },
    {
      icon: <Shield className="w-6 h-6 text-success" />,
      title: "Risk Systems",
      description: "Comprehensive risk management framework ensuring portfolio safety and optimal performance.",
      points: [
        "Real-time position monitoring",
        "Automated risk controls",
        "Multi-level security checks"
      ]
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Advanced Trading Technology
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our proprietary trading systems execute sophisticated strategies with microsecond precision across major venues.
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
              Ready to Earn High Yields?
            </h3>
            <p className="text-gray-300 mb-6">
              Join us in revolutionizing yield earning with Real World Assets (RWA) as protection, powered by our advanced trading technology.
            </p>
            <Link 
              to="/earn-yield" 
              className="inline-block px-8 py-3 bg-success text-dark font-medium hover:bg-success/90 transition-colors"
            >
              START EARNING
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;