interface ContactRevealProps {
  totalScore: number;
}

export default function ContactReveal({ totalScore }: ContactRevealProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <img 
            src="https://d64gsuwffb70l.cloudfront.net/692544d3604a8db1b42ad640_1764050203141_1f76a14f.webp"
            alt="Achievement"
            className="w-32 h-32 mx-auto mb-6"
          />
          <h1 className="text-5xl font-bold text-white mb-4">
            Congratulations!
          </h1>
          <p className="text-2xl text-blue-200 mb-2">
            You've completed your financial education journey
          </p>
          <p className="text-xl text-blue-300">
            Average Score: {totalScore}%
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Ready to Take Action?
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            You now understand how to build wealth through life insurance and annuities. Let's discuss how to implement your personalized financial strategy and start building your own banking system.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@yourinsuranceagency.com" className="text-lg text-blue-600 hover:text-blue-800 font-semibold">
                  contact@yourinsuranceagency.com
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+18005551234" className="text-lg text-blue-600 hover:text-blue-800 font-semibold">
                  (800) 555-1234
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <a href="https://www.yourwebsite.com" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 hover:text-blue-800 font-semibold">
                  www.yourwebsite.com
                </a>
              </div>
            </div>
          </div>

          <button
            onClick={() => window.location.reload()}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all"
          >
            Review Modules Again
          </button>
        </div>
      </div>
    </div>
  );
}
