import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Company Name</h3>
            <p className="mb-4">Providing quality services since 2010. We strive to deliver the best experience for our customers.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Web Design</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">App Development</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">SEO Services</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Content Writing</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MdLocationOn className="mt-1 mr-2 flex-shrink-0" />
                <span>123 Business Ave, Suite 456<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <MdPhone className="mr-2" />
                <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <MdEmail className="mr-2" />
                <a href="mailto:info@company.com" className="hover:text-blue-400 transition-colors">info@company.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h3>
              <p className="text-gray-400">Get the latest updates and news</p>
            </div>
            <form className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-l text-gray-900 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Company Name. All Rights Reserved.</p>
          <div className="mt-2 text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors mx-2">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors mx-2">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors mx-2">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;