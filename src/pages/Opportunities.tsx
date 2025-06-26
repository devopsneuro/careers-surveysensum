
import { useState } from 'react';
import { ChevronLeft, MapPin, Clock, DollarSign, Users, Building, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Opportunities = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$80k - $120k",
      experience: "3-5 years",
      description: "Build amazing user experiences with React and modern web technologies. Work with our product team to create intuitive interfaces for our survey platform.",
      requirements: ["React/TypeScript expertise", "3+ years frontend experience", "UI/UX collaboration skills", "Modern web development practices"],
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "San Francisco",
      type: "Full-time",
      salary: "$90k - $140k",
      experience: "4-6 years",
      description: "Drive product strategy and work with cross-functional teams to deliver impactful features. Lead the roadmap for our core survey products.",
      requirements: ["Product management experience", "Data-driven decision making", "Cross-functional leadership", "B2B SaaS background"],
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "UX Designer",
      department: "Design",
      location: "New York",
      type: "Full-time",
      salary: "$70k - $110k",
      experience: "2-4 years",
      description: "Create intuitive and beautiful user experiences for our survey platform. Collaborate closely with engineering and product teams.",
      requirements: ["UX/UI design portfolio", "Figma proficiency", "User research experience", "Design system knowledge"],
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "Data Scientist",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      salary: "$85k - $130k",
      experience: "3-5 years",
      description: "Analyze survey data and build ML models to provide actionable insights. Help customers understand their data better.",
      requirements: ["Python/R expertise", "Machine learning experience", "Statistical analysis", "Data visualization skills"],
      posted: "5 days ago"
    },
    {
      id: 5,
      title: "Backend Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$75k - $115k",
      experience: "2-4 years",
      description: "Build scalable backend systems to support our growing survey platform. Work with databases, APIs, and cloud infrastructure.",
      requirements: ["Node.js/Python experience", "Database design", "API development", "Cloud platforms (AWS/GCP)"],
      posted: "1 day ago"
    },
    {
      id: 6,
      title: "Sales Development Representative",
      department: "Sales",
      location: "Austin",
      type: "Full-time",
      salary: "$50k - $70k + commission",
      experience: "1-2 years",
      description: "Generate and qualify leads for our sales team. Help businesses discover how SurveySensum can transform their customer insights.",
      requirements: ["Sales experience preferred", "Excellent communication", "CRM proficiency", "Goal-oriented mindset"],
      posted: "4 days ago"
    }
  ];

  const departments = ['All', 'Engineering', 'Product', 'Design', 'Analytics', 'Sales'];
  const locations = ['All', 'Remote', 'San Francisco', 'New York', 'Austin'];

  const filteredJobs = jobs.filter(job => {
    const departmentMatch = selectedDepartment === 'All' || job.department === selectedDepartment;
    const locationMatch = selectedLocation === 'All' || job.location === selectedLocation;
    return departmentMatch && locationMatch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <ChevronLeft className="w-5 h-5 mr-1" />
                Back to Careers
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

      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Current Opportunities
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join our team and help shape the future of customer insights. Find your perfect role below.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                {jobs.length} Open Positions
              </div>
              <div className="flex items-center">
                <Building className="w-4 h-4 mr-2" />
                Multiple Departments
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Remote & On-site Options
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Department</label>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-1" />
                            {job.department}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {job.type}
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {job.posted}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {job.experience}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {job.salary}
                      </span>
                    </div>
                  </div>
                  
                  <div className="lg:ml-8 flex-shrink-0">
                    <button className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                      Apply Now
                    </button>
                    <Link
                      to="/"
                      className="block w-full lg:w-auto text-center border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors mt-3"
                    >
                      Learn More About Us
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Briefcase className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No positions found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters or check back later for new opportunities.
              </p>
              <button
                onClick={() => {
                  setSelectedDepartment('All');
                  setSelectedLocation('All');
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Submit General Application
            </Link>
            <Link
              to="/"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn About Our Culture
            </Link>
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

export default Opportunities;
