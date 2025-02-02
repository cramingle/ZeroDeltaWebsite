import React from 'react';

const Contact = () => {
  return (
    <section className="py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-light mb-8">Get in Touch</h2>
            <p className="text-xl text-gray-400 mb-12">
              Contact us to discuss trading opportunities or explore potential partnerships.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-light mb-4">Trading Inquiries</h3>
                <p className="text-gray-400">trading@zerodelta.research</p>
              </div>
              <div>
                <h3 className="text-xl font-light mb-4">Careers</h3>
                <p className="text-gray-400">careers@zerodelta.research</p>
              </div>
              <div>
                <h3 className="text-xl font-light mb-4">Office</h3>
                <p className="text-gray-400">
                  One Exchange Square<br />
                  Singapore 048616
                </p>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-dark-800 border border-gray-800 p-3 text-white focus:border-success outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-dark-800 border border-gray-800 p-3 text-white focus:border-success outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-dark-800 border border-gray-800 p-3 text-white focus:border-success outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm bg-success text-dark font-medium hover:bg-success/90 transition-colors"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;