
import { useState } from 'react';
import { ChevronLeft, MapPin, Clock, DollarSign, Users, Building, Calendar, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PositionsDetails = () => {
  const [selectedPosition, setSelectedPosition] = useState('senior-frontend-developer');

  const positions = {
    'senior-frontend-developer': {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$80k - $120k",
      experience: "3-5 years",
      posted: "2 days ago",
      description: "Join our engineering team to build cutting-edge user interfaces for our survey platform. You'll work with React, TypeScript, and modern web technologies to create intuitive experiences for thousands of users worldwide.",
      responsibilities: [
        "Develop and maintain React-based web applications",
        "Collaborate with UX/UI designers to implement pixel-perfect designs",
        "Write clean, maintainable, and well-tested code",
        "Participate in code reviews and technical discussions",
        "Optimize application performance and user experience",
        "Mentor junior developers and contribute to team growth"
      ],
      requirements: [
        "3+ years of professional React development experience",
        "Strong proficiency in TypeScript and JavaScript",
        "Experience with modern frontend tools (Webpack, Vite, etc.)",
        "Knowledge of responsive design and cross-browser compatibility",
        "Understanding of RESTful APIs and state management",
        "Experience with testing frameworks (Jest, React Testing Library)"
      ],
      niceToHave: [
        "Experience with Next.js or similar frameworks",
        "Knowledge of GraphQL",
        "Familiarity with design systems",
        "Previous experience in B2B SaaS products",
        "Understanding of accessibility standards"
      ],
      benefits: [
        "Competitive salary and equity package",
        "Comprehensive health, dental, and vision insurance",
        "Flexible work arrangements and remote-first culture",
        "Professional development budget ($2,000/year)",
        "Unlimited PTO policy",
        "Top-tier equipment and home office setup"
      ],
      team: {
        size: "12 engineers",
        structure: "Cross-functional squads",
        culture: "Collaborative, innovative, and inclusive"
      },
      process: [
        "Initial phone screening (30 minutes)",
        "Technical interview with coding challenge (90 minutes)",
        "System design discussion (60 minutes)",
        "Team fit and culture interview (45 minutes)",
        "Final interview with engineering leadership (30 minutes)"
      ]
    }
  };

  const currentPosition = positions[selectedPosition];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/opportunities" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <ChevronLeft className="w-5 h-5 mr-1" />
                Back to Opportunities
              </Link>
            </div>
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SurveySensum
              </h1>
            </div>
          </div>
        </div>
      </nav>

      {/* Position Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {currentPosition.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                {currentPosition.department}
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                {currentPosition.location}
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {currentPosition.type}
              </div>
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 mr-2" />
                {currentPosition.salary}
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Apply Now
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
                Save Position
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Position Details */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* About the Role */}
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">About the Role</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {currentPosition.description}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Responsibilities</h2>
                <ul className="space-y-3">
                  {currentPosition.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Requirements</h2>
                <ul className="space-y-3 mb-6">
                  {currentPosition.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <Star className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{requirement}</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Nice to Have</h3>
                <ul className="space-y-2">
                  {currentPosition.niceToHave.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interview Process */}
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Interview Process</h2>
                <div className="space-y-4">
                  {currentPosition.process.map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold mr-4">
                        {index + 1}
                      </div>
                      <span className="text-gray-600">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Position Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience Level:</span>
                    <span className="font-medium">{currentPosition.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Posted:</span>
                    <span className="font-medium">{currentPosition.posted}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Applications:</span>
                    <span className="font-medium">47 candidates</span>
                  </div>
                </div>
              </div>

              {/* Team Info */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Team & Culture</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-600">Team Size:</span>
                    <p className="font-medium">{currentPosition.team.size}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Structure:</span>
                    <p className="font-medium">{currentPosition.team.structure}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Culture:</span>
                    <p className="font-medium">{currentPosition.team.culture}</p>
                  </div>
                </div>
              </div>

              {/* Benefits Preview */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits</h3>
                <ul className="space-y-2 text-sm">
                  {currentPosition.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm mt-3">
                  View all benefits
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {/* Apply CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Ready to Apply?</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Join our team and help shape the future of customer insights.
                </p>
                <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SurveySensum
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Empowering businesses with actionable customer insights
              </p>
            </div>
            <div className="text-gray-400 text-sm">
              <p>careers@surveysensum.com | +1 (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 SurveySensum. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PositionsDetails;
