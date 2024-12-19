import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login'); // Redirect to login if the user is not authenticated
    }
  }, [currentUser, navigate]);

  if (!currentUser) {
    return <p>Loading...</p>;
  }

  return (
    <div className="dashboard p-6 bg-gray-200 min-h-screen">
      <br />
      <br />
      <h1 className="text-4xl font-extrabold text-black-600 mb-6">
        Welcome, {currentUser.name}!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Course Progress Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">
            Course Progress
          </h2>
          <p className="text-gray-600">Completed Lectures: 5/10</p>
          <p className="text-gray-600">Pending Assignments: 2</p>
          <p className="text-gray-600">Resources Accessed: 8</p>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => navigate('/courses')}
          >
            View Details
          </button>
        </div>

        {/* Lecture Management Section (Teacher Only) */}
        {currentUser.role === 'teacher' && (
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-green-500">
              Manage Lectures
            </h2>
            <p className="text-gray-600">
              Create and manage your lecture series easily.
            </p>
            <button
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={() => navigate('/lecture-series')}
            >
              Go to Lectures
            </button>
          </div>
        )}

        {/* Supplementary Resources Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-purple-500">
            Supplementary Resources
          </h2>
          <p className="text-gray-600">Explore additional materials and guides.</p>
          <button
            className="mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
            onClick={() => navigate('/resources')}
          >
            View Resources
          </button>
        </div>

        {/* Announcements Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-2xl font-semibold mb-4 text-red-500">
            Announcements
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Mid-term exams start next week. Prepare well!</li>
            <li>New resources on React and Redux are now available.</li>
            <li>Don't forget to submit your project proposals by Friday.</li>
          </ul>
        </div>

        {/* Upcoming Events Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-orange-500">
            Upcoming Events
          </h2>
          <p className="text-gray-600">Hackathon 2024: January 15th - 16th</p>
          <p className="text-gray-600">Guest Lecture: "AI in Education" - Jan 20th</p>
          <button
            className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            onClick={() => navigate('/events')}
          >
            View All Events
          </button>
        </div>

        {/* Quick Links Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-teal-500">
            Quick Links
          </h2>
          <ul className="list-none text-gray-600 space-y-2">
            <li>
              <button
                className="text-blue-500 hover:underline"
                onClick={() => navigate('/profile')}
              >
                Edit Profile
              </button>
            </li>
            <li>
              <button
                className="text-blue-500 hover:underline"
                onClick={() => navigate('/settings')}
              >
                Account Settings
              </button>
            </li>
            <li>
              <button
                className="text-blue-500 hover:underline"
                onClick={() => navigate('/support')}
              >
                Support
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
