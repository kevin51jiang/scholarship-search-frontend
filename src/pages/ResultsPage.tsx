import React from 'react';
import { useLocation } from 'wouter';

const ResultsPage: React.FC = () => {
  const [location] = useLocation();
  const query = new URLSearchParams(location.split('?')[1]).get('q') || '';

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Scholarship Results</h1>
      <p className="mb-4">Showing results for: {query}</p>
      {/* Add your scholarship results list here */}
      <div className="bg-gray-100 p-4 rounded">
        <p>Sample scholarship result</p>
      </div>
    </div>
  );
};

export default ResultsPage;
