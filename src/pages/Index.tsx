
import { useState, useEffect } from 'react';
import { ChevronDown, Users, Trophy, Heart, MapPin, Clock, DollarSign, Star, Send, Menu, X } from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'jobs', 'culture', 'benefits', 'apply'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const jobs = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$80k - $120k",
      description: "Build amazing user experiences with React and modern web technologies."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco",
      type: "Full-time",
      salary: "$90k - $140k",
      description: "Drive product strategy and work with cross-functional teams to deliver impactful features."
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "New York",
      type: "Full-time",
      salary: "$70k - $110k",
      description: "Create intuitive and beautiful user experiences for our survey platform."
    },
    {
      title: "Data Scientist",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      salary: "$85k - $130k",
      description: "Analyze survey data and build ML models to provide actionable insights."
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Work-life balance with flexible hours and unlimited PTO policy"
    },
    {
      icon: DollarSign,
      title: "Competitive Pay",
      description: "Market-competitive salaries with equity options and performance bonuses"
    },
    {
      icon: Trophy,
      title: "Growth Opportunities",
      description: "Professional development budget, mentorship programs, and career advancement"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SurveySensum
              </h1>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Jobs', 'Culture', 'Benefits', 'Apply'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Jobs', 'Culture', 'Benefits', 'Apply'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Shape the Future of
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  Customer Insights
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join our mission to revolutionize how businesses understand their customers. 
                Build innovative survey solutions that drive meaningful change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('jobs')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  View Open Positions
                </button>
                <button
                  onClick={() => scrollToSection('culture')}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  Learn About Our Culture
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-500">SurveySensum Dashboard</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Team Satisfaction</span>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="ml-1 font-semibold">4.8/5</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-4/5"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">500+</div>
                      <div className="text-sm text-gray-500">Employees</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">15+</div>
                      <div className="text-sm text-gray-500">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-6 opacity-20"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your next career opportunity and join a team that's passionate about innovation and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-blue-600 font-medium">{job.department}</p>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center mt-1">
                      <Clock className="w-4 h-4 mr-1" />
                      {job.type}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{job.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-green-600">{job.salary}</span>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where everyone can thrive, innovate, and make a meaningful impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaborative</h3>
              <p className="text-gray-600">
                We work together across teams and departments to achieve common goals and support each other's growth.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                <Trophy className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from product development to customer service.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                <Heart className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Caring</h3>
              <p className="text-gray-600">
                We care about our employees, customers, and community, fostering a supportive and inclusive environment.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Life at SurveySensum</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-600">Remote-first culture with flexible working arrangements</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-600">Regular team building events and company retreats</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-600">Learning and development opportunities</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-600">Diverse and inclusive workplace</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 p-12 text-white">
                <h4 className="text-xl font-semibold mb-4">What Our Team Says</h4>
                <blockquote className="text-lg italic mb-4">
                  "Working at SurveySensum has been an incredible journey. The team is supportive, 
                  the work is challenging, and I've grown both professionally and personally."
                </blockquote>
                <cite className="text-blue-200">- Sarah Chen, Senior Developer</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive benefits and perks designed to support your well-being and career growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow group"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Join Us?</h2>
            <p className="text-xl text-blue-100">
              Don't see the perfect role? Send us your resume and we'll keep you in mind for future opportunities.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position of Interest
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all">
                  <option>Select a position</option>
                  <option>Senior Frontend Developer</option>
                  <option>Product Manager</option>
                  <option>UX Designer</option>
                  <option>Data Scientist</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about yourself
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  placeholder="Share your experience, skills, and what excites you about working at SurveySensum..."
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resume/CV
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-600 transition-colors">
                  <input type="file" className="hidden" id="resume" />
                  <label htmlFor="resume" className="cursor-pointer">
                    <div className="text-gray-600">
                      <p className="text-lg font-medium">Click to upload your resume</p>
                      <p className="text-sm">PDF, DOC, DOCX up to 10MB</p>
                    </div>
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                SurveySensum
              </h3>
              <p className="text-gray-400 mb-4 max-w-md">
                Empowering businesses with actionable customer insights through innovative survey solutions.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>careers@surveysensum.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Innovation Drive</li>
                <li>San Francisco, CA 94107</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SurveySensum. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
