import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Location</h3>
          <p>123 Main Street</p>
          <p>Paris, France</p>
          {/* Google Map Placeholder */}
          <iframe
            title="Paris Eiffel Tower"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.346890446794!2d2.294350815674876!3d48.85884417928996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x3725b48c5b8bc504!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1640775279632!5m2!1sen!2sus"
            width="100%"
            height="150"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Other Details */}
        <div>
          <h3 className="text-xl font-bold mb-4">Other Information</h3>
          <p>About Us</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
