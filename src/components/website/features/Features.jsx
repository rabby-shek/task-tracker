import React from "react";

const Features = () => {
  return (
    <section className="py-5 py-xl-8 " id="features">
      <div data-aos="fade-left" className="feature-bg-text" ><span >T</span>ask Tracker</div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="section-title text-center" data-aos="flip-up">
              Services
            </h2>
            <p
              className="text-secondary mb-5 text-center mt-3"
              data-aos="flip-up"
            >
              We are dedicated to delivering exceptional services that drive
              success and transform your business. With a commitment to
              excellence, we take pride in offering a comprehensive range of
              services.
            </p>
            <hr
              className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"
              data-aos="fade-right"
            />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row" data-aos="fade-right">
          <div className="feature-card col-lg-4 col-sm-6">
            <div className="badge feature-icon p-3 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={26}
                height={26}
                fill="currentColor"
                className="bi bi-aspect-ratio"
                viewBox="0 0 16 16"
              >
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                <path d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z" />
              </svg>
            </div>
            <h4 className="mb-3">Web Design</h4>
            <p className="mb-3 text-secondary">
              We can help you to create a visually appealing and user-friendly
              website. We take into account your brand identity and target
              audience when designing your website.
            </p>
            <a
              href="#!"
              className="fw-bold text-decoration-none text-primary-color"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-arrow-right-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-4 col-sm-6"></div>
          <div className="feature-card col-lg-4 col-sm-6">
            <div className="badge feature-icon p-3 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={26}
                height={26}
                fill="currentColor"
                className="bi bi-pie-chart"
                viewBox="0 0 16 16"
              >
                <path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793V1.018zm1 0V7.5h6.482A7.001 7.001 0 0 0 8.5 1.018zM14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
              </svg>
            </div>
            <h4 className="mb-3">Market Research</h4>
            <p className="mb-3 text-secondary">
              We can help you to understand your target market and identify new
              opportunities for growth. We offer a variety of market research
              services, interviews, and focus groups.
            </p>
            <a
              href="#!"
              className="fw-bold text-decoration-none text-primary-color"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-arrow-right-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6 invisible"></div>
        </div>

        <div className="row" data-aos="fade-left">
          <div className="col-lg-4 col-sm-6"></div>
          <div className="col-lg-4 col-sm-6 invisible"></div>
          <div className="feature-card col-lg-4 col-sm-6">
            <div className="badge feature-icon p-3 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={26}
                height={26}
                fill="currentColor"
                className="bi bi-airplane-engines"
                viewBox="0 0 16 16"
              >
                <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.614-.135-1.436-.428-2.073C9.292.592 8.787 0 8 0ZM6.5 1.5c.213 0 .74.408 1.072 1.151.256.552.428 1.232.428 1.849v4.144a.5.5 0 0 0 .276.447l.724.362.724-.362a.5.5 0 0 0 .276-.447V3.5c0-.617.172-1.297.428-1.849C8.76 1.908 9.287 1.5 9.5 1.5c.213 0 .24.055.322.236.127.274.303.801.447 1.132A3.665 3.665 0 0 1 10 3v3.809L8.276 8.72a1.5 1.5 0 0 1-1.552 0L5 6.809V3c0-.318.104-.801.231-1.132.144-.33.32-.858.447-1.132.082-.18.109-.236.322-.236ZM7.434 9.83l.566.283v4.195a.5.5 0 0 0 .289.455l1.354.61-.288 1.732h-2.41l-.288-1.732 1.354-.61a.5.5 0 0 0 .289-.455V10.113l.566-.283L11.75 9.5v1.309l2.288 1.144a.5.5 0 0 1 .276.447v.707l-1.407-.235a.5.5 0 0 0-.577.337l-.66 1.98-2.382-.398L8 15.18l-1.288-1.963-2.382.398-.66-1.98a.5.5 0 0 0-.577-.337L2.687 12.5v-.707a.5.5 0 0 1 .276-.447L5.25 10.81V9.5l2.184.33Z" />
              </svg>
            </div>
            <h4 className="mb-3">Other Services</h4>
            <p className="mb-3 text-secondary">
              We offer a wide range of other services to help your business
              succeed. Whether you need help with branding, advertising, or
              other aspects of your business, we can help.
            </p>
            <a
              href="#!"
              className="fw-bold text-decoration-none text-primary-color"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-arrow-right-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
