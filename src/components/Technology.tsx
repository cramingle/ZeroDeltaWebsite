import React from 'react';

const Technology = () => {
  return (
    <section className="py-32 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-light mb-8">Systematic Trading</h2>
            <p className="text-xl text-gray-400 mb-12">
              Our proprietary trading systems execute sophisticated basis and 
              funding rate strategies with microsecond precision across major venues.
            </p>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-light mb-4">Basis Trading</h3>
                <p className="text-gray-400">
                  Advanced statistical arbitrage across spot and derivatives markets
                </p>
              </div>
              <div>
                <h3 className="text-xl font-light mb-4">Funding Rate Optimization</h3>
                <p className="text-gray-400">
                  Sophisticated strategies for funding rate capture and optimization
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-light mb-8">Infrastructure</h2>
            <p className="text-xl text-gray-400 mb-12">
              Custom-built trading infrastructure optimized for low-latency 
              execution and real-time risk management.
            </p>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-light mb-4">Exchange Integration</h3>
                <p className="text-gray-400">
                  Direct connectivity to major venues: Binance, Bybit, OKX, KuCoin, Bitget
                </p>
              </div>
              <div>
                <h3 className="text-xl font-light mb-4">Risk Systems</h3>
                <p className="text-gray-400">
                  Real-time position monitoring and automated risk controls
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;