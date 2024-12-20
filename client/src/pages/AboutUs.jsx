import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <br/>
      <br/>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            At ChitChat, our mission is to connect people through seamless and secure communication. We believe in fostering meaningful conversations and building communities that make it easier for individuals to stay in touch with friends, family, and colleagues. Our platform is designed to be simple, reliable, and user-friendly, providing a space where people can share ideas, chat, and collaborate.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p>
            Our vision is to become the leading messaging platform that not only enhances personal communication but also drives collaboration in the professional world. We aim to empower users with the tools they need to communicate effectively, whether for casual chats, team projects, or video calls.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc pl-6">
            <li><strong>Innovation:</strong> We continuously innovate to provide cutting-edge features for our users.</li>
            <li><strong>Security:</strong> We prioritize the privacy and security of our users’ data.</li>
            <li><strong>Customer Focus:</strong> We are committed to understanding and meeting the needs of our users.</li>
            <li><strong>Collaboration:</strong> We believe in the power of working together to achieve great things.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p>
            Our team is made up of passionate individuals who are dedicated to building a platform that brings people closer together. We come from diverse backgrounds in software development, design, and customer support, all united by a common goal of improving communication.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            We love hearing from our users! If you have any questions, suggestions, or feedback, feel free to reach out to us:
            <br />
            <strong>Email:</strong> support@example.com
            <br />
            <strong>Phone:</strong> +123-456-7890
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
