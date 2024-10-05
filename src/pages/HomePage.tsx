import React from 'react';
import { Link } from 'wouter';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Scholarship Search</h1>
      <p className="mb-4">Find the perfect scholarship opportunities for your academic journey.</p>
      <Link href="/results?q=all">
        <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View All Scholarships
        </a>
      </Link>
    </div>
  );
};

export default HomePage;
