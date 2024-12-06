import React from "react";

const TermsAndConditionsPages = () => {
  return (
    <div className="w-full py-14 ">
      <div className="mx-auto max-w-3xl w-full">
        <p className="text-neutral-600 leading-relaxed mb-6">
          Welcome to Linguabridge! These Terms & Conditions govern your use of
          our platform. By accessing or using our website, you agree to comply
          with these terms. Please read them carefully before using our
          services.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-neutral-800">
            1. General Use
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            We collect the following types of information to provide and improve
            our services:
          </p>

          <h3 className="text-xl font-semibold text-neutral-600 mb-2">
            Personal Information
          </h3>
          <p className="text-neutral-600 leading-relaxed mb-6">
            In order to access certain features of the platform, you may be
            required to provide personal information. By submitting your
            personal information, you consent to our Privacy Policy and the
            collection and use of this information as outlined therein.
          </p>

          <h3 className="text-xl font-semibold text-neutral-600 mb-2">
            Account Responsibilities
          </h3>
          <p className="text-neutral-600 leading-relaxed mb-6">
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities that occur under your
            account. You agree to notify us immediately of any unauthorized
            access or use of your account.
          </p>

          <h3 className="text-xl font-semibold text-neutral-600 mb-2">
            Course Access and Payments
          </h3>
          <p className="text-neutral-600 leading-relaxed mb-6">
            Access to certain courses and content may require payment. By
            subscribing to our services, you agree to provide accurate billing
            information and authorize us to charge for any courses or services
            you access. All payments are subject to our refund policy, which may
            be updated from time to time.
          </p>

          <h3 className="text-xl font-semibold text-neutral-600 mb-2">
            Intellectual Property
          </h3>
          <p className="text-neutral-600 leading-relaxed mb-6">
            All content on the Linguabridge platform, including but not limited
            to text, images, videos, logos, and software, is the property of
            Linguabridge or its licensors. You are granted a limited,
            non-exclusive license to access and use the platform for personal
            use only.
          </p>

          <h3 className="text-xl font-semibold text-neutral-600 mb-2">
            User Conduct
          </h3>
          <p className="text-neutral-600 leading-relaxed mb-6">
            You agree to use the platform in a respectful and lawful manner. You
            shall not engage in any conduct that disrupts or interferes with the
            functioning of the platform or violates any rights of other users,
            including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Impersonating others or misrepresenting your identity.</li>
            <li>Uploading harmful, offensive, or illegal content.</li>
            <li>Engaging in harassment, spamming, or any unlawful activity.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-600 mb-2">
            Limitations of Liability
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            Linguabridge is not liable for any indirect, incidental, special, or
            consequential damages arising from your use or inability to use the
            platform. Our liability is limited to the maximum extent allowed by
            applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-600 mb-2">
            Changes to Terms
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            We reserve the right to update or modify these Terms & Conditions at
            any time. Any changes will be posted on this page, and your
            continued use of the platform after such updates will be considered
            acceptance of the changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-600 mb-2">
            Governing Law
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            These terms are governed by the laws of Myanmar(Burmese).{" "}
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditionsPages;

// export default TermsAndConditionsPages
