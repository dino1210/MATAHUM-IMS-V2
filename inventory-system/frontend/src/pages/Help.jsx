import React from "react";
import { HelpCircle, Info, FileText } from "lucide-react";

const Help = () => {
  return (
    <div className="space-y-3">
      {/* Overview Section */}
      <div className="bg-white rounded-lg shadow-md p-5">
        <h2 className="text-sm font-semibold text-gray-700 flex items-center space-x-2">
          <HelpCircle className="text-blue-500" />
          <span>Overview</span>
        </h2>
        <p className="text-xs text-gray-600 mt-3">
          Welcome to the Help Center! Here, you can find answers to common
          questions and guidance on how to use the system.
        </p>
      </div>

      {/* How to Use Section */}
      <div className="bg-white rounded-lg shadow-md p-5">
        <h2 className="text-sm font-semibold text-gray-700 flex items-center space-x-2">
          <Info className="text-green-500" />
          <span>How to Use</span>
        </h2>
        <ul className="list-disc pl-5 text-xs text-gray-700 mt-3">
          <li>Navigate through the dashboard to access the key features.</li>
          <li>Use the search bar to quickly find products and reports.</li>
          <li>
            Apply filters to narrow down the data and view specific reports.
          </li>
          <li>
            Export reports in different formats (CSV, Excel, PDF) for offline
            use.
          </li>
        </ul>
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-white rounded-lg shadow-md p-5">
        <h2 className="text-sm font-semibold text-gray-700 flex items-center space-x-2">
          <FileText className="text-indigo-500" />
          <span>FAQ</span>
        </h2>
        <div className="mt-3 space-y-4">
          <div>
            <h3 className="text-xs font-semibold text-gray-700">
              How do I reset my password?
            </h3>
            <p className="text-xs text-gray-600">
              If you forget your password, click on the "Forgot Password" link
              on the login page. You'll receive a reset link via email.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-gray-700">
              Can I customize my dashboard?
            </h3>
            <p className="text-xs text-gray-600">
              Yes, you can personalize your dashboard by adding widgets and
              selecting data that’s most important to you.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-gray-700">
              How can I contact support?
            </h3>
            <p className="text-xs text-gray-600">
              For any technical issues or inquiries, please reach out to our
              support team via the "Contact Us" section in the settings menu.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="bg-white rounded-lg shadow-md p-5">
        <h2 className="text-sm font-semibold text-gray-700 flex items-center space-x-2">
          <HelpCircle className="text-yellow-500" />
          <span>Contact Us</span>
        </h2>
        <p className="text-xs text-gray-600 mt-3">
          If you have further questions or need assistance, feel free to reach
          out to our support team at{" "}
          <strong>angedanolly.jestronald69@gmail.com</strong> or call{" "}
          <strong>+639987652341</strong>.
        </p>
      </div>
    </div>
  );
};

export default Help;
