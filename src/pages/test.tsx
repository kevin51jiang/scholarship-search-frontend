import React, { useState } from 'react';

const ScholarshipForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    gpa: '',
    major: '',
    school: '',
    firstGenStudent: false,
    gender: '',
    financialAid: '',
    yearOfStudy: '',
    citizenship: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Scholarship Application
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="gpa" className="sr-only">GPA</label>
              <input
                id="gpa"
                name="gpa"
                type="number"
                step="0.01"
                min="0"
                max="4"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="GPA (0.00 - 4.00)"
                value={formData.gpa}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="major" className="sr-only">Major</label>
              <input
                id="major"
                name="major"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Major"
                value={formData.major}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="school" className="sr-only">School</label>
              <input
                id="school"
                name="school"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="School"
                value={formData.school}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="firstGenStudent" className="inline-flex items-center mt-3">
                <input
                  id="firstGenStudent"
                  name="firstGenStudent"
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-indigo-600"
                  checked={formData.firstGenStudent}
                  onChange={handleChange}
                />
                <span className="ml-2 text-gray-700">First Generation Student</span>
              </label>
            </div>
            <div>
              <label htmlFor="gender" className="sr-only">Gender</label>
              <select
                id="gender"
                name="gender"
                required
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="financialAid" className="sr-only">Financial Aid</label>
              <select
                id="financialAid"
                name="financialAid"
                required
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.financialAid}
                onChange={handleChange}
              >
                <option value="">Select Financial Aid</option>
                <option value="fafsa">FAFSA</option>
                <option value="caldreams">Cal Dreams</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="yearOfStudy" className="sr-only">Year of Study</label>
              <select
                id="yearOfStudy"
                name="yearOfStudy"
                required
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.yearOfStudy}
                onChange={handleChange}
              >
                <option value="">Select Year of Study</option>
                <option value="freshman">Freshman</option>
                <option value="sophomore">Sophomore</option>
                <option value="junior">Junior</option>
                <option value="senior">Senior</option>
              </select>
            </div>
            <div>
              <label htmlFor="citizenship" className="inline-flex items-center mt-3">
                <input
                  id="citizenship"
                  name="citizenship"
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-indigo-600"
                  checked={formData.citizenship}
                  onChange={handleChange}
                />
                <span className="ml-2 text-gray-700">U.S. Citizen</span>
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScholarshipForm;
