import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-lime-600 py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          About Us
        </h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          <strong>LSH ENGINEERING PRIVATE LIMITED</strong> is an{" "}
          <span className="font-medium">Exempt Private Company Limited by Shares</span>,
          registered under the{" "}
          <span className="font-medium">
            Accounting and Corporate Regulatory Authority (ACRA)
          </span> of Singapore.  
          <br />
          <br />
          Established on <strong>26 May 2019</strong>, our company has proudly served
          Singapore for over <strong>6 years</strong>, providing reliable and
          high-quality engineering solutions.
        </p>

        <p className="text-gray-600 mb-4 leading-relaxed">
          Our <strong>primary activity</strong> focuses on the{" "}
          <span className="font-medium">
            installation of doors, gates, grilles, and windows
          </span>. We also specialize in{" "}
          <span className="font-medium">
            glass and glazing works
          </span> — including mirror and shower screen installation — ensuring
          exceptional workmanship and lasting quality.
        </p>

        <p className="text-gray-600 mb-6 leading-relaxed">
          At <strong>LSH ENGINEERING PRIVATE LIMITED</strong>, we are dedicated
          to maintaining professionalism, safety, and customer satisfaction in
          every project we undertake. Our commitment to excellence has earned us
          the trust of homeowners, builders, and businesses across Singapore.
        </p>

        <div className="bg-white shadow-md rounded-2xl p-6 mt-8 inline-block text-left">
          <p className="text-gray-700 mb-2">
            <strong>Company Name:</strong> LSH ENGINEERING PRIVATE LIMITED
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Registration No. / UEN:</strong> 201916839E
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Registered Office:</strong> 707 JURONG WEST STREET 71,
            #06-48, SINGAPORE (640707)
          </p>
          <p className="text-gray-700">
            <strong>Operating Status:</strong> Live (6 Years)
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
