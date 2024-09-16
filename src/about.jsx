// import React from "react";

// const About = () => {
//   return (
//     <section className="bg-white text-gray-800 py-16 px-8">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-6 animate-fadeIn">About Us</h2>
//         <p className="text-lg leading-7 mb-8 animate-fadeInDelay">
//           Welcome to our world of beauty products, phones, and fashion! We
//           believe in offering the best products that reflect modern trends and
//           cutting-edge technology. Our collection is designed to enhance your
//           personal style and tech-savvy lifestyle.
//         </p>
//         <div className="grid md:grid-cols-3 gap-6 mt-12">
//           <div className="bg-pink-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-bounce">
//             <h3 className="text-xl font-semibold mb-4">Beauty Products</h3>
//             <p className="text-sm leading-6">
//               Discover a wide range of beauty products that nourish and
//               highlight your natural beauty. From skincare to cosmetics, we have
//               everything you need to look and feel your best.
//             </p>
//           </div>

//           <div className="bg-blue-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInDelay2">
//             <h3 className="text-xl font-semibold mb-4">Phones</h3>
//             <p className="text-sm leading-6">
//               Stay connected with the latest smartphones, featuring top-notch
//               performance and sleek designs. Our phones offer powerful features
//               for both work and play.
//             </p>
//           </div>

//           <div className="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInDelay3">
//             <h3 className="text-xl font-semibold mb-4">Fashion</h3>
//             <p className="text-sm leading-6">
//               Elevate your wardrobe with our fashion collections. From everyday
//               essentials to high-end designs, our pieces are crafted to keep you
//               stylish and confident.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import React from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  // Intersection Observer to trigger animation on scroll
  const { ref: aboutRef, inView: isAboutVisible } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  return (
    <section className="bg-white text-gray-800 py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* About Us section with a slide-in-left animation */}
        <h2
          ref={aboutRef}
          className={`text-3xl sm:text-4xl font-bold mb-6 transform transition-all duration-1000 
          `}
        >
          About Us
        </h2>
        <p
          className={`text-base sm:text-lg leading-6 sm:leading-7 mb-8 transform transition-all duration-1000 delay-200 
          `}
        >
          Welcome to our world of beauty products, phones, and fashion! We
          believe in offering the best products that reflect modern trends and
          cutting-edge technology. Our collection is designed to enhance your
          personal style and tech-savvy lifestyle.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {/* Beauty Products Section */}
          <div className="bg-pink-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-bounce">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Beauty Products</h3>
            <p className="text-sm sm:text-base leading-6">
              Discover a wide range of beauty products that nourish and
              highlight your natural beauty. From skincare to cosmetics, we have
              everything you need to look and feel your best.
            </p>
          </div>

          {/* Phones Section */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInDelay2">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Phones</h3>
            <p className="text-sm sm:text-base leading-6">
              Stay connected with the latest smartphones, featuring top-notch
              performance and sleek designs. Our phones offer powerful features
              for both work and play.
            </p>
          </div>

          {/* Fashion Section */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInDelay3">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Fashion</h3>
            <p className="text-sm sm:text-base leading-6">
              Elevate your wardrobe with our fashion collections. From everyday
              essentials to high-end designs, our pieces are crafted to keep you
              stylish and confident.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
