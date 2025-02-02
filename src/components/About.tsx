import React from 'react';
import { MapPin, Mail, ExternalLink, Github, Linkedin, Twitter } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            About Zero Delta
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Revolutionizing digital asset trading through cutting-edge technology and 
            sophisticated algorithmic strategies.
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
                At Zero Delta, we're committed to revolutionizing the digital asset trading 
                landscape through innovative technology and sophisticated algorithms. Our focus 
                is on developing cutting-edge solutions that optimize trading strategies and 
                maximize market opportunities.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We specialize in basis trading and market making, leveraging advanced 
                technology to identify and capitalize on market inefficiencies while 
                maintaining the highest standards of reliability and performance.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-dark-800/50 rounded-xl p-6">
                <div className="text-success text-3xl font-bold mb-2">15+</div>
                <div className="text-white font-medium mb-2">Connected Exchanges</div>
                <p className="text-gray-400 text-sm">Global market coverage for optimal opportunities</p>
              </div>
              <div className="bg-dark-800/50 rounded-xl p-6">
                <div className="text-success text-3xl font-bold mb-2">24/7</div>
                <div className="text-white font-medium mb-2">Market Operation</div>
                <p className="text-gray-400 text-sm">Continuous monitoring and execution</p>
              </div>
              <div className="bg-dark-800/50 rounded-xl p-6">
                <div className="text-success text-3xl font-bold mb-2">5ms</div>
                <div className="text-white font-medium mb-2">Execution Time</div>
                <p className="text-gray-400 text-sm">Ultra-low latency trading infrastructure</p>
              </div>
              <div className="bg-dark-800/50 rounded-xl p-6">
                <div className="text-success text-3xl font-bold mb-2">100+</div>
                <div className="text-white font-medium mb-2">Trading Pairs</div>
                <p className="text-gray-400 text-sm">Diverse market opportunities</p>
              </div>
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
                  <p className="text-success font-medium mb-4">Founder & CEO</p>
                  <p className="text-gray-400 text-lg mb-6">
                    With extensive experience in algorithmic trading and market making, 
                    Rizki leads Zero Delta's vision to revolutionize digital asset trading. 
                    His expertise in developing sophisticated trading algorithms and deep 
                    understanding of market microstructure drives our technological innovation 
                    and strategic direction.
                  </p>
                  <div className="flex items-center space-x-6">
                    <a 
                      href="mailto:rizki@zerodelta.io" 
                      className="text-success hover:text-success/90 transition-colors"
                      title="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://github.com/rizkisyafii" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-success hover:text-success/90 transition-colors"
                      title="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://linkedin.com/in/rizkisyafii" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-success hover:text-success/90 transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://twitter.com/rizkisyafii" 
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