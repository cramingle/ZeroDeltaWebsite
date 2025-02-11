import { useState } from 'react';
import { Clock, Search, Star, X, Calculator as CalcIcon } from 'lucide-react';

// Matrix representing the octopus mascot shape (1 represents filled dots)
const MASCOT_MATRIX = [
  [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
  [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
  [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
  [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1],
  [1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
  [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
  [0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0],
  [0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0],
  [1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1],
  [1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1]
];

interface Opportunity {
  id: number;
  pair: string;
  exchanges: string[];
  expectedYield: string;
  timeLeft: string;
  minBid: string;
  topBid: string;
  participants: number;
  size: string;
  status: 'active' | 'ending_soon';
  settlementTime: '8h' | '24h' | '1m' | '3m' | '1y';
  strategy: 'Funding Rate' | 'Intertemporal' | 'Basis Trading' | 'Yield Farming';
  tvl: string;
  underlyingPrice: string;
}

const ComingSoon = () => {
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('popular');
  const [showCalculator, setShowCalculator] = useState(false);
  const [calculatorInputs, setCalculatorInputs] = useState({
    amount: '',
    duration: '8h'
  });

  const sampleOpportunities: Opportunity[] = [
    // Popular Markets
    {
      id: 1,
      pair: "BTC-USDT",
      exchanges: ["Binance", "Bybit"],
      expectedYield: "720%",
      timeLeft: "5h 23m",
      minBid: "1.5 ZD",
      topBid: "2.8 ZD",
      participants: 12,
      size: "$50,000",
      status: "active",
      settlementTime: "8h",
      strategy: "Funding Rate",
      tvl: "$1.42B",
      underlyingPrice: "$1.00"
    },
    // New Markets
    {
      id: 2,
      pair: "ETH-USDT",
      exchanges: ["OKX", "Bybit"],
      expectedYield: "520%",
      timeLeft: "2d 15h",
      minBid: "1.2 ZD",
      topBid: "2.1 ZD",
      participants: 8,
      size: "$30,000",
      status: "active",
      settlementTime: "24h",
      strategy: "Basis Trading",
      tvl: "$378.60M",
      underlyingPrice: "$1.00"
    },
    // Bidding in Progress
    {
      id: 3,
      pair: "SOL-USDT",
      exchanges: ["Binance", "OKX"],
      expectedYield: "890%",
      timeLeft: "89d 12h",
      minBid: "1.8 ZD",
      topBid: "3.5 ZD",
      participants: 15,
      size: "$45,000",
      status: "active",
      settlementTime: "3m",
      strategy: "Intertemporal",
      tvl: "$92.63M",
      underlyingPrice: "$97,696.34"
    },
    // High Yield
    {
      id: 4,
      pair: "AVAX-USDT",
      exchanges: ["Binance", "Bybit"],
      expectedYield: "1200%",
      timeLeft: "6h 45m",
      minBid: "2.0 ZD",
      topBid: "4.2 ZD",
      participants: 23,
      size: "$75,000",
      status: "active",
      settlementTime: "8h",
      strategy: "Funding Rate",
      tvl: "$245.8M",
      underlyingPrice: "$1.00"
    },
    // Long Term
    {
      id: 5,
      pair: "BNB-USDT",
      exchanges: ["Binance", "OKX"],
      expectedYield: "450%",
      timeLeft: "364d 12h",
      minBid: "3.0 ZD",
      topBid: "5.5 ZD",
      participants: 18,
      size: "$100,000",
      status: "active",
      settlementTime: "1y",
      strategy: "Yield Farming",
      tvl: "$567.2M",
      underlyingPrice: "$1.00"
    }
  ];

  const getFilteredOpportunities = () => {
    switch (activeFilter) {
      case 'new':
        return sampleOpportunities.filter(opp => opp.id === 2);
      case 'high-yield':
        return sampleOpportunities.filter(opp => 
          parseFloat(opp.expectedYield) > 1000
        );
      case 'bidding':
        return sampleOpportunities.filter(opp => 
          parseInt(opp.timeLeft) < 24
        );
      case 'long-term':
        return sampleOpportunities.filter(opp => 
          opp.settlementTime === '1y' || opp.settlementTime === '3m'
        );
      case 'popular':
      default:
        return sampleOpportunities;
    }
  };

  const calculateProfit = () => {
    if (!calculatorInputs.amount) return { profit: '0', apy: '0' };
    const amount = parseFloat(calculatorInputs.amount);
    const apy = 720; // Example APY
    
    // Calculate based on duration
    const durationMap = {
      '8h': 8 / (24 * 365),
      '24h': 1 / 365,
      '1m': 1 / 12,
      '3m': 0.25,
      '1y': 1
    } as const;

    const durationInYears = durationMap[calculatorInputs.duration as keyof typeof durationMap];
    
    const profit = amount * (apy / 100) * durationInYears;
    return {
      profit: profit.toFixed(2),
      apy: apy.toFixed(2)
    };
  };

  return (
    <div className="min-h-screen bg-dark flex flex-col relative overflow-hidden py-20 sm:py-32">
      {/* Background Matrix */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="grid grid-cols-16 gap-1 sm:gap-2 transform scale-100 sm:scale-125 lg:scale-150">
          {MASCOT_MATRIX.flat().map((cell, i) => (
            <div
              key={i}
              className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full ${
                cell ? 'bg-success' : 'bg-dark-800'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Markets</h1>
              <p className="text-gray-400">
                Exit anytime at market price. All yield is streamed until maturity.
              </p>
            </div>
            <div className="inline-flex items-center bg-dark-800/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-success/30">
              <Clock className="w-5 h-5 text-success mr-2" />
              <span className="text-success">Preview of Q2 2025 Launch</span>
            </div>
          </div>

          {/* Filters & Search */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center space-x-4">
              {[
                { id: 'popular', label: 'All Markets' },
                { id: 'new', label: 'New Markets' },
                { id: 'high-yield', label: 'High Yield' },
                { id: 'bidding', label: 'Bidding Active' },
                { id: 'long-term', label: 'Long Term' }
              ].map((filter) => (
                <button
                  key={filter.id}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeFilter === filter.id
                      ? 'bg-success/10 text-success border border-success/30'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search markets"
                className="bg-dark-800/80 backdrop-blur-sm text-white pl-10 pr-4 py-2 rounded-lg border border-white/5 focus:border-success/30 outline-none w-[300px]"
              />
            </div>
          </div>

          {/* Market Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "24h Volume", value: "$2.45M" },
              { label: "Total TVL", value: "$1.89B" },
              { label: "Active Markets", value: "8" },
              { label: "ZD Price", value: "$0.85" }
            ].map((stat, index) => (
              <div key={index} className="bg-dark-800/80 backdrop-blur-sm rounded-lg p-4 text-center border border-white/5">
                <div className="text-success font-bold">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Calculator Widget */}
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={() => setShowCalculator(!showCalculator)}
            className="bg-success text-dark p-3 rounded-full shadow-lg hover:bg-success/90 transition-colors"
          >
            <CalcIcon className="w-6 h-6" />
          </button>
        </div>

        {showCalculator && (
          <div className="fixed bottom-24 right-8 w-80 bg-dark-800/95 backdrop-blur-sm rounded-xl border border-success/30 shadow-xl z-50">
            <div className="p-4 border-b border-white/5">
              <div className="flex justify-between items-center">
                <h3 className="text-white font-medium">Yield Calculator</h3>
                <button 
                  onClick={() => setShowCalculator(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Investment Amount (USDT)</label>
                <input
                  type="number"
                  value={calculatorInputs.amount}
                  onChange={(e) => setCalculatorInputs(prev => ({ ...prev, amount: e.target.value }))}
                  className="w-full bg-dark px-3 py-2 rounded-lg text-white border border-success/30 focus:border-success outline-none"
                  placeholder="Enter amount"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Settlement Time</label>
                <select
                  value={calculatorInputs.duration}
                  onChange={(e) => setCalculatorInputs(prev => ({ ...prev, duration: e.target.value }))}
                  className="w-full bg-dark px-3 py-2 rounded-lg text-white border border-success/30 focus:border-success outline-none"
                >
                  <option value="8h">8 Hours (Funding Rate)</option>
                  <option value="24h">24 Hours (Daily)</option>
                  <option value="1m">1 Month</option>
                  <option value="3m">3 Months (Intertemporal)</option>
                  <option value="1y">1 Year</option>
                </select>
              </div>
              <div className="pt-4 border-t border-white/5">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Estimated Profit</span>
                  <span className="text-success font-medium">${calculateProfit().profit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">APY</span>
                  <span className="text-success font-medium">{calculateProfit().apy}%</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-8">
          {/* Market Table - Adjust width */}
          <div className={`bg-dark-800/80 backdrop-blur-sm rounded-xl border border-white/5 overflow-hidden ${
            selectedOpportunity ? 'w-2/3' : 'w-full'
          }`}>
            {/* Table Header */}
            <div className="grid grid-cols-7 gap-4 p-4 border-b border-white/5 text-sm font-medium">
              <div className="col-span-2">Market</div>
              <div className="text-right">Total TVL</div>
              <div className="text-right">Settlement Time</div>
              <div className="text-right">Expected APY</div>
              <div className="text-right">Min Bid</div>
              <div className="text-right">Strategy</div>
            </div>

            {/* Table Body */}
            {getFilteredOpportunities().map((opp) => (
              <div
                key={opp.id}
                className={`grid grid-cols-7 gap-4 p-4 border-b border-white/5 hover:bg-dark-700/50 cursor-pointer ${
                  selectedOpportunity?.id === opp.id ? 'bg-dark-700/50' : ''
                }`}
                onClick={() => setSelectedOpportunity(opp)}
              >
                <div className="col-span-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-gray-500 mr-2" />
                    <div>
                      <div className="font-medium text-white">{opp.pair}</div>
                      <div className="text-sm text-gray-400">{opp.exchanges.join(" → ")}</div>
                    </div>
                  </div>
                </div>
                <div className="text-right text-white">{opp.tvl}</div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    opp.settlementTime === '8h' ? 'bg-purple-500/20 text-purple-300' :
                    opp.settlementTime === '24h' ? 'bg-blue-500/20 text-blue-300' :
                    opp.settlementTime === '3m' ? 'bg-green-500/20 text-green-300' :
                    'bg-orange-500/20 text-orange-300'
                  }`}>
                    {opp.settlementTime}
                  </span>
                </div>
                <div className="text-right text-success font-medium">{opp.expectedYield}</div>
                <div className="text-right text-white">{opp.minBid}</div>
                <div className="text-right">
                  <span className="text-gray-400">{opp.strategy}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bidding Side Panel */}
          {selectedOpportunity && (
            <div className="w-1/3">
              <div className="sticky top-24 bg-dark-800/80 backdrop-blur-sm rounded-xl p-6 border border-white/5">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedOpportunity.pair}</h3>
                    <p className="text-gray-400">{selectedOpportunity.exchanges.join(" → ")}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedOpportunity(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Time Remaining</div>
                    <div className="text-white font-medium">{selectedOpportunity.timeLeft}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Current Top Bid</div>
                    <div className="text-success font-medium">{selectedOpportunity.topBid}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Min Bid Required</div>
                    <div className="text-white font-medium">{selectedOpportunity.minBid}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Participants</div>
                    <div className="text-white font-medium">{selectedOpportunity.participants}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <input 
                      type="text"
                      className="w-full bg-dark px-4 py-3 rounded-lg text-white border border-success/30 focus:border-success outline-none"
                      placeholder="Enter bid amount"
                      disabled
                    />
                    <span className="absolute right-4 top-3 text-gray-400">ZD</span>
                  </div>
                  <button 
                    className="w-full px-6 py-3 bg-success/10 text-success border border-success/30 rounded-lg hover:bg-success/20 transition-colors"
                    disabled
                  >
                    Coming Q2 2025
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Expected APY</span>
                    <span className="text-success font-medium">{selectedOpportunity.expectedYield}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon; 