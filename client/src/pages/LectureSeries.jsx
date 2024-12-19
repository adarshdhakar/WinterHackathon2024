import React, { useState } from 'react';
import 'flowbite'; // Import Flowbite

const dummyData = [
  {
    id: 1,
    title: 'Introduction to Programming',
    description: 'Learn the basics of programming using JavaScript.',
    chapters: [
      {
        id: 1,
        title: 'Chapter 1: Basics of JavaScript',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Dummy video URL
      },
      {
        id: 2,
        title: 'Chapter 2: Variables and Data Types',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Dummy video URL
      },
      {
        id: 3,
        title: 'Chapter 3: Functions and Loops',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Dummy video URL
      },
    ],
  },
  {
    id: 2,
    title: 'Advanced React Concepts',
    description: 'Dive deep into React with hooks, context API, and performance optimization.',
    chapters: [
      {
        id: 1,
        title: 'Chapter 1: React Hooks',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Dummy video URL
      },
      {
        id: 2,
        title: 'Chapter 2: Context API in React',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Dummy video URL
      },
      {
        id: 3,
        title: 'Chapter 3: React Performance Optimization',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Dummy video URL
      },
    ],
  },
  {
    id: 3,
    title: 'Web Development with Node.js',
    description: 'Learn how to build web applications with Node.js and Express.',
    chapters: [
      {
        id: 1,
        title: 'Chapter 1: Setting Up Node.js Environment',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Dummy video URL
      },
      {
        id: 2,
        title: 'Chapter 2: Building APIs with Express',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Dummy video URL
      },
      {
        id: 3,
        title: 'Chapter 3: Working with Databases in Node.js',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Dummy video URL
      },
    ],
  },
];

const LectureSeries = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="container mx-auto p-6">
      <br />
      <br />
      <h1 className="text-4xl font-bold text-center mb-8">Lecture Series</h1>
      <div className="space-y-8">
        {dummyData.map((lecture) => (
          <div key={lecture.id} className="bg-gray-200 shadow-lg rounded-lg p-6">

            <h2 className="text-2xl font-semibold text-gray-800">{lecture.title}</h2>
            <p className="text-gray-600 mb-4">{lecture.description}</p>
            <div className="space-y-4">
              {lecture.chapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className="flex items-center space-x-4 cursor-pointer hover:bg-gray-50 p-3 rounded-lg"
                  onClick={() => openModal(chapter.videoUrl)}
                >
                  <span className="text-2xl">🎥</span>
                  <span className="text-lg font-medium">{chapter.title}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for video */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-4xl w-full relative">
            <button
              className="absolute top-4 right-4 text-white bg-red-600 rounded-full p-2"
              onClick={closeModal}
            >
              X
            </button>
            <video controls width="100%">
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default LectureSeries;
