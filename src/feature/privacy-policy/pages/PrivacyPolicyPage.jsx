import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="w-full py-14 ">
      <div className="mx-auto max-w-3xl w-full">
        <p className="  text-neutral-600 leading-relaxed mb-6">
          Welcome to Linguabridge! Your privacy is critically important to us.
          This Privacy Policy explains how we collect, use, share, and safeguard
          your personal information when you visit our website or use our
          services. By accessing or using our platform, you agree to the
          practices outlined in this policy.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
            1. Information We Collect
          </h2>
          <p className="  text-neutral-600 leading-relaxed mb-6">
            We collect the following types of information to provide and improve
            our services:
          </p>

          <div>
            <h3 className="text-xl font-semibold text-neutral-700 mb-2">
              Personal Information:
            </h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Name, email address, phone number, and other contact details.</li>
              <li>Account information, including username and password.</li>
              <li>Payment details for purchases or subscriptions.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-neutral-700 mb-2">
              Non-Personal Information:
            </h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Browser type, device information, and IP address.</li>
              <li>Usage data, such as pages visited and time spent on the site.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-neutral-700 mb-2">
              Optional Data:
            </h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Language preferences, course interests, and learning goals.</li>
              <li>Feedback, reviews, or responses to surveys.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-neutral-700 mb-2">
              Sensitive Data:
            </h3>
            <p className="  text-neutral-600 leading-relaxed mb-4">
              We do not intentionally collect sensitive information, such as health data, political beliefs, or religious affiliations.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
            2. How We Collect Your Information
          </h2>
          <p className="  text-neutral-600 leading-relaxed mb-6">We gather information through the following means:</p>

          <ul className="pl-5 space-y-4">
            <li className="list-disc">
              <span className="text-neutral-900 font-medium">Directly from you,</span> such as when you provide us with personal information or optional data.
            </li>
            <li className="list-disc">
              <span className="text-neutral-900 font-medium">Automatically,</span> through cookies, analytics tools, and other tracking technologies.
            </li>
            <li className="list-disc">
              <span className="text-neutral-900 font-medium">From Third Parties,</span> for example, from payment processors, social media platforms, or referral partners.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
            3. How We Use Your Information
          </h2>
          <p className="  text-neutral-600 leading-relaxed mb-6">
            We use the information we collect for the following purposes:
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>To provide, operate, and maintain our services.</li>
            <li>To personalize and improve the user experience.</li>
            <li>To process payments and fulfill orders.</li>
            <li>To communicate with you, including for customer support, marketing, and updates.</li>
            <li>To analyze site usage and trends to improve our platform.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
            4. Sharing Your Information
          </h2>
          <p className="  text-neutral-600 leading-relaxed mb-6">
            We may share your information with third parties in the following situations:
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>With service providers who help us deliver our services, such as payment processors and hosting providers.</li>
            <li>With our partners, affiliates, or sponsors for marketing and promotional purposes.</li>
            <li>If required by law or to protect our rights, such as during legal processes or to prevent fraud.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
            5. Cookies and Tracking Technologies
          </h2>
          <p className="  text-neutral-600 leading-relaxed mb-6">
            We use cookies and other tracking technologies to enhance your experience on our site:
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>Cookies help us remember your preferences and settings.</li>
            <li>We use analytics tools to track usage patterns and improve our services.</li>
            <li>You can manage cookie preferences through your browser settings.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
            6. Data Retention
          </h2>
          <p className="  text-neutral-600 leading-relaxed mb-6">
            We retain your personal information only for as long as necessary to provide our services, comply with legal obligations, or resolve disputes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
            7. Security Measures
          </h2>
          <p className="  text-neutral-600 leading-relaxed mb-6">
            We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and access controls.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
            8. Your Rights
          </h2>
          <p className="  text-neutral-600 leading-relaxed mb-6">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>The right to access or correct your personal data.</li>
            <li>The right to request the deletion of your data.</li>
            <li>The right to opt-out of marketing communications.</li>
            <li>The right to object to or restrict the processing of your data.</li>
          </ul>
          <p className="  text-neutral-600 leading-relaxed mb-4">
            To exercise these rights, please contact us at <a href="#" className="text-primary-color">support@linguabridge.com.</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
