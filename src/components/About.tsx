import React from 'react';
import { MapPin, Mail, ExternalLink, Github, Linkedin, Twitter, Coins, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            About Ziro Delta
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The first specialized yield marketplace connecting sophisticated basis trading opportunities with capital providers.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                At Ziro Delta, we're revolutionizing yield generation by creating the first specialized marketplace for professional basis trading opportunities. Our platform enables users to bid for exclusive access to high-yield opportunities across major cryptocurrency exchanges.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Through our proprietary terminal system and risk management framework, we ensure secure and efficient execution of basis trading strategies, delivering yields ranging from 500% to 1800% APR while maintaining the highest standards of security and transparency.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-dark-800/50 rounded-xl p-6">
                <div className="text-success text-3xl font-bold mb-2">$50M+</div>
                <div className="text-white font-medium mb-2">Daily Volume</div>
                <p className="text-gray-400 text-sm">In basis opportunities</p>
              </div>
              <div className="bg-dark-800/50 rounded-xl p-6">
                <div className="text-success text-3xl font-bold mb-2">1800%</div>
                <div className="text-white font-medium mb-2">Max APR</div>
                <p className="text-gray-400 text-sm">Professional basis trading</p>
              </div>
              <div className="bg-dark-800/50 rounded-xl p-6">
                <div className="text-success text-3xl font-bold mb-2">100+</div>
                <div className="text-white font-medium mb-2">Daily Opportunities</div>
                <p className="text-gray-400 text-sm">Across major exchanges</p>
              </div>
              <div className="bg-dark-800/50 rounded-xl p-6">
                <div className="text-success text-3xl font-bold mb-2">80/20</div>
                <div className="text-white font-medium mb-2">Profit Share</div>
                <p className="text-gray-400 text-sm">User-favorable split</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Economics Section */}
      <section className="py-16 sm:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12">Token Economics</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-dark-800/50 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                  <Coins className="w-5 h-5 text-success" />
                </div>
                <h3 className="text-xl font-semibold text-white">ZD Coin Utility</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-400">
                  <span className="text-white font-medium">Total Supply:</span> 1B ZD
                </p>
                <p className="text-gray-400">
                  <span className="text-white font-medium">Initial Circulation:</span> 100M ZD
                </p>
                <p className="text-gray-400">
                  <span className="text-white font-medium">Treasury:</span> 400M ZD
                </p>
                <p className="text-gray-400">
                  <span className="text-white font-medium">Team & Advisors:</span> 200M ZD
                </p>
                <p className="text-gray-400">
                  <span className="text-white font-medium">Community & Ecosystem:</span> 300M ZD
                </p>
              </div>
            </div>
            <div className="bg-dark-800/50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Token Utility</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Required for bidding on yield opportunities</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Non-refundable for lost bids, creating natural demand</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Future governance rights for protocol decisions</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Staking rewards for long-term holders</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 sm:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-white mb-12">Leadership</h2>
            <div className="bg-dark-800/50 rounded-xl p-8">
              <div className="flex flex-col sm:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-success/10 flex items-center justify-center">
                    <span className="text-3xl text-success font-bold">RS</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Rizki Itsna Syafii
                  </h3>
                  <p className="text-success font-medium mb-4">Founder & CTO</p>
                  <p className="text-gray-400 text-lg mb-6">
                    Built the entire terminal system and infrastructure that powers Ziro Delta's yield marketplace. With deep expertise in crypto markets and arbitrage, Rizki leads our technological innovation and strategic direction. His experience in developing sophisticated trading algorithms and understanding of market microstructure ensures optimal execution of yield opportunities.
                  </p>
                  <div className="flex items-center space-x-6">
                    <a 
                      href="mailto:rizki@zirodelta.com" 
                      className="text-success hover:text-success/90 transition-colors"
                      title="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://github.com/rizkisyaf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-success hover:text-success/90 transition-colors"
                      title="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://twitter.com/kisra_fistya" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-success hover:text-success/90 transition-colors"
                      title="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Section */}
      <section className="py-16 sm:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12">Our Office</h2>
          <div className="bg-dark-800/50 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-success" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Jakarta Headquarters</h3>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  MTH Square Building<br />
                  Unit 03A/08<br />
                  Jalan MT Haryono Kav. 10<br />
                  Bidaracina, Jatinegara<br />
                  East Jakarta, Jakarta
                </p>
                <a 
                  href="https://maps.google.com/?q=MTH+Square+Building+Jakarta" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-success hover:text-success/90 transition-colors"
                >
                  <span className="font-medium">View on Google Maps</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
              <div className="aspect-[4/3] bg-dark-800 rounded-lg overflow-hidden">
                {/* You can add an actual office image here */}
                <div className="w-full h-full bg-success/5 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-success/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;