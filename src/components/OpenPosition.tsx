import React from 'react';
import { ArrowRight, MapPin, Clock, Github, Mail } from 'lucide-react';

const OpenPosition = () => {
  const mustHaveList = [
    'Some Python programming experience (0-2 years is fine)',
    'Willingness to learn about financial markets',
    'Ability to work independently',
    "Good communication skills (we'll be working closely together)",
    'Comfortable with Git basics'
  ];

  const niceToHaveList = [
    'Any experience with basis market or financial markets',
    'Basic knowledge of APIs and Websocket',
    'Experience with async Python',
    'Familiarity with terminal applications and Textual Framework'
  ];

  const benefitsList = [
    'Real responsibility from day one',
    "Direct mentorship (you'll work directly with me)",
    'Learn about markets and data analysis',
    'Competitive entry-level salary'
  ];

  const realityCheckList = [
    "You'll be employee #1",
    "We'll be building things from scratch",
    'Your input will directly shape the product',
    'There will be challenges, but also huge learning opportunities'
  ];

  return (
    <div className="min-h-screen bg-dark py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Junior Python Developer
          </h1>
          <div className="flex items-center justify-center space-x-6 text-gray-400">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Kediri Kota</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>Full-time</span>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-xl text-gray-300 mb-8">
            Hey there! 👋
          </p>
          <p className="text-gray-400 mb-8">
            I'm building Ziro Delta Terminal, a specialized market analysis tool for basis markets, and I'm looking for a junior developer to join me on this journey. This is a bootstrapped project with promising potential - we're in talks with investors and have potential funding opportunities on the horizon.
          </p>
        </div>

        {/* About the Project */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">About the Project</h2>
          <p className="text-gray-400">
            Ziro Delta Terminal is a dedicated market analysis terminal I've built that monitors basis market conditions across exchanges. It's already functional, processing real-time data and helping identify market opportunities, but there's so much more we can do with it.
          </p>
        </div>

        {/* Why I Need You */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Why I Need You</h2>
          <p className="text-gray-400 mb-4">
            I'm currently running this solo, and there's a lot of exciting work to be done. I need someone who can:
          </p>
          <ul className="list-none space-y-2">
            {[
              'Help maintain and improve our Python codebase',
              'Work on our data processing systems',
              'Assist with exchange API integrations',
              'Help build new monitoring features',
              'Make our logging systems better'
            ].map((item, index) => (
              <li key={index} className="flex items-start text-gray-400">
                <ArrowRight className="w-5 h-5 text-success mr-2 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Must Have</h2>
            <ul className="list-none space-y-2">
              {mustHaveList.map((item, index) => (
                <li key={index} className="flex items-start text-gray-400">
                  <ArrowRight className="w-5 h-5 text-success mr-2 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Nice to Have</h2>
            <ul className="list-none space-y-2">
              {niceToHaveList.map((item, index) => (
                <li key={index} className="flex items-start text-gray-400">
                  <ArrowRight className="w-5 h-5 text-success mr-2 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* What's In It For You */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">What's In It For You</h2>
          <ul className="list-none space-y-2">
            {benefitsList.map((item, index) => (
              <li key={index} className="flex items-start text-gray-400">
                <ArrowRight className="w-5 h-5 text-success mr-2 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Reality Check */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">The Reality Check</h2>
          <p className="text-gray-400 mb-4">
            Let's be transparent: this is an early-stage project. I'm currently self-funded but in discussions with investors for potential funding of $500K-1M. This means:
          </p>
          <ul className="list-none space-y-2">
            {realityCheckList.map((item, index) => (
              <li key={index} className="flex items-start text-gray-400">
                <ArrowRight className="w-5 h-5 text-success mr-2 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* First Few Months */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Your First Few Months</h2>
          <p className="text-gray-400 mb-4">You'll start by:</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-400 ml-4">
            <li>Getting familiar with the existing codebase</li>
            <li>Learning about market data structures</li>
            <li>Making small improvements to our monitoring systems</li>
            <li>Gradually taking on larger features</li>
          </ol>
        </div>

        {/* How to Apply */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">How to Apply</h2>
          <p className="text-gray-400 mb-4">Send me:</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-400 ml-4 mb-6">
            <li>Your resume (please make it simple, I don't need to know your gender, school, etc)</li>
            <li>Link to your GitHub (if you have one)</li>
            <li>A short note telling me:
              <ul className="list-none space-y-2 mt-2 ml-6">
                <li>- Why you're interested in this kind of project</li>
                <li>- What you've built with Python before</li>
                <li>- What excites you about joining a bootstrapped project</li>
              </ul>
            </li>
          </ol>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="mailto:careers@zerodelta.com" 
              className="flex items-center px-6 py-3 bg-success text-dark font-medium rounded-lg hover:bg-success/90 transition-colors w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Apply via Email
            </a>
            <a 
              href="https://github.com/zerodelta" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors w-full sm:w-auto justify-center"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          </div>
        </div>

        {/* The Opportunity */}
        <div className="bg-success/10 p-6 rounded-lg border border-success/20">
          <h2 className="text-2xl font-bold text-white mb-4">The Opportunity</h2>
          <p className="text-gray-300">
            This is a chance to join something from the early stages. While we're starting small, we're aiming big. If you're looking to learn fast and build something meaningful in the basis market space, this could be perfect for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpenPosition; 