import React from "react";

const Service = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Service Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">OUR SERVICE</h2>
        <p className=" italic text-base sm:text-lg mb-12 leading-6 sm:leading-7">
          We offer a wide range of services designed to help your business thrive in the digital world. From web development to digital marketing, we have the tools and expertise to meet your needs.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Web Development Service */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-50">
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p className="text-sm leading-6">
              We build fast, responsive, and user-friendly websites to help you create a powerful online presence.
            </p>
          </div>

          {/* SEO Optimization Service */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-50">
            <h3 className="text-xl font-semibold mb-4">SEO Optimization</h3>
            <p className="text-sm leading-6">
              Improve your website's visibility on search engines with our effective SEO strategies.
            </p>
          </div>

          {/* Digital Marketing Service */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-50">
            <h3 className="text-xl font-semibold mb-4">Digital Marketing</h3>
            <p className="text-sm leading-6">
              Reach a wider audience and boost your brand with our comprehensive digital marketing services.
            </p>
          </div>

          {/* Branding and Design Service */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-50">
            <h3 className="text-xl font-semibold mb-4">Branding & Design</h3>
            <p className="text-sm leading-6">
              Craft a strong brand identity with our innovative design services, from logos to complete brand guidelines.
            </p>
          </div>

          {/* E-Commerce Solutions */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-50">
            <h3 className="text-xl font-semibold mb-4">E-Commerce Solutions</h3>
            <p className="text-sm leading-6">
              Build an online store with all the features and functionalities you need to grow your business.
            </p>
          </div>

          {/* Content Creation */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-50">
            <h3 className="text-xl font-semibold mb-4">Content Creation</h3>
            <p className="text-sm leading-6">
              Engage your audience with high-quality content, including blogs, social media posts, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
