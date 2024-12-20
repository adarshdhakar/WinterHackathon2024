import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <br/>
      <br/>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Terms of Service</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            Welcome to our website! By accessing or using our services, you agree to comply with and be bound by these Terms of Service. Please read them carefully. If you do not agree to these terms, you should not use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
          <p>
            By using our website or services, you confirm that you have read, understood, and agree to be bound by these Terms of Service, including any updates or modifications we may make in the future.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
          <p>
            You agree to use our services in compliance with all applicable laws and regulations. You are responsible for:
            <ul className="list-disc pl-6">
              <li>Providing accurate information when creating an account.</li>
              <li>Maintaining the confidentiality of your account and password.</li>
              <li>Not engaging in any activity that could harm, disrupt, or overload our services.</li>
            </ul>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Prohibited Activities</h2>
          <p>
            You agree not to engage in any of the following activities:
            <ul className="list-disc pl-6">
              <li>Using our services for illegal or unauthorized purposes.</li>
              <li>Distributing malicious software, viruses, or other harmful code.</li>
              <li>Harassing, abusing, or threatening other users.</li>
              <li>Impersonating any person or entity or falsely representing your affiliation with any person or entity.</li>
            </ul>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
          <p>
            All content and materials on our website, including but not limited to text, images, logos, and trademarks, are the property of the website owner or its licensors and are protected by intellectual property laws. You may not use, copy, or distribute these materials without our permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services, including but not limited to loss of data or profits, even if we have been advised of the possibility of such damages.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to our services at our sole discretion if we believe you have violated these Terms of Service or engaged in any conduct that is harmful to our services or other users.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Modifications to Terms</h2>
          <p>
            We may update or modify these Terms of Service from time to time. Any changes will be posted on this page with an updated revision date. It is your responsibility to review these terms periodically to stay informed about any changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
          <p>
            These Terms of Service are governed by and construed in accordance with the laws of the jurisdiction in which our company is based. Any disputes will be resolved in the courts located in that jurisdiction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions or concerns about these Terms of Service, please contact us at:
            <br />
            <strong>Email:</strong> support@example.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
