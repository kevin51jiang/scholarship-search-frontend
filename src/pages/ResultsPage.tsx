import React from 'react';
import { useLocation } from 'wouter';

const scholarships = [
  {
    name: "Scholarship Name ($value)",
    description: "Short description of the scholarship.",
    requirements: "List of peculiar/specific requirements.",
    deadline: "Jul 20, 2025",
  },
  {
    name: "Scholarship Name ($1000-$6000)",
    description: "Short description of the scholarship.",
    requirements: "List of peculiar/specific requirements.",
    deadline: "Jul 20, 2025",
  },
  {
    name: "Scholarship Name ($100)",
    description: "Short description of the scholarship.",
    requirements: "List of peculiar/specific requirements.",
    deadline: "Jul 20, 2025",
  },
];


interface Scholarship {
  id: string
  name: string;
  overallDesc: string;
  requirementsDesc: string;
  deadline: Date;
}

const ResultsPage: React.FC = () => {
  const [location] = useLocation();
  const query = new URLSearchParams(location.split('?')[1]).get('q') || '';

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Scholarship Results</h1>
      <p className="mb-4">Showing results for: {query}</p>
      
      <div className="flex flex-col space-y-2">
        {scholarships.map((scholarship, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
        <ScholarshipCard  scholarship={scholarship} />
        </div>
        ))}
      </div>

        {/* {scholarships.map((scholarship, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">{scholarship.name}</h2>
            <p className="text-gray-600">{scholarship.description}</p>
            <p className="mt-2 text-gray-500">{scholarship.requirements}</p>
            <p className="mt-4 border-t pt-2 text-gray-400 text-sm">
              Deadline: {scholarship.deadline}
            </p>
            <button className="mt-4 text-blue-500 hover:underline">
              View More
            </button>
          </div>
        ))} */}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-l">Previous</button>
        <span className="px-4 py-2">1</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r">Next</button>
      </div>
    </div>
  );
};

export default ResultsPage;
