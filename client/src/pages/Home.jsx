import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Welcome to EduPoint</h2>
          <p className="text-xl mb-6">Your one-stop solution for all educational needs</p>
          <a href="/get-started" className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-lg text-xl transition">
            Get Started
          </a>
        </div>
      </main>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-3xl font-bold mb-8">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h4 className="text-2xl font-semibold mb-4">Interactive Courses</h4>
              <p className="text-gray-600">Learn through interactive lessons and quizzes designed for all learning styles.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h4 className="text-2xl font-semibold mb-4">Live Sessions</h4>
              <p className="text-gray-600">Join live classes with experts and ask questions in real-time.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h4 className="text-2xl font-semibold mb-4">Personalized Learning</h4>
              <p className="text-gray-600">Get a personalized learning path based on your progress and goals.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
