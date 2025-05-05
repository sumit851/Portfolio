"use client";

import React from "react";
import Link from "next/link";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-300 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Sumit Dalai</h3>
            <p className="text-sm text-gray-400">
              Full Stack Developer crafting exceptional digital experiences
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/about"
                  className="hover:text-purple-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/sumit851/"
                  className="hover:text-purple-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/contact"
                  className="hover:text-purple-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/sumit851"
                className="hover:text-purple-400 transition-colors"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://linkedin.com/in/SumitDalai"
                className="hover:text-purple-400 transition-colors"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="mailto:dalaisumit592@gmail.com"
                className="hover:text-purple-400 transition-colors"
              >
                <Mail size={24} />
              </Link>
              <Link
                href="https://twitter.com/yourusername"
                className="hover:text-purple-400 transition-colors"
              >
                <Twitter size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Sumit Dalai. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-2 md:mt-0">
              Made with ❤️ using Next.js & Acertinity Ui
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
