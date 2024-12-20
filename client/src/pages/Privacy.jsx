import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <br/>
      <br/>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            Welcome to our Privacy Policy page. Your privacy is of paramount importance to us. This Privacy Policy document outlines the types of personal information that is collected and recorded by us and how we use it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p>
            We collect various types of information, including:
            <ul className="list-disc pl-6">
              <li>Personal information you provide directly, such as your name, email address, and contact details.</li>
              <li>Usage data collected automatically when you interact with our website, including IP addresses, browser type, and device information.</li>
              <li>Cookies and similar tracking technologies to enhance your experience and gather analytics.</li>
            </ul>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p>
            The information we collect is used for various purposes, including:
            <ul className="list-disc pl-6">
              <li>To provide, maintain, and improve our services.</li>
              <li>To communicate with you, including sending updates and promotional materials.</li>
              <li>To analyze usage trends and improve the user experience.</li>
            </ul>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p>
            We take reasonable measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p>
            You have the right to:
            <ul className="list-disc pl-6">
              <li>Access, update, or delete your personal information.</li>
              <li>Opt-out of receiving marketing communications from us.</li>
              <li>Request a copy of the personal data we hold about you.</li>
            </ul>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Please review this policy periodically for any updates.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at:
            <br />
            <strong>Email:</strong> support@example.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
