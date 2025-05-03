"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "How can I reset my password?",
    answer:
      "You can reset your password from the login page by clicking on 'Forgot Password'.",
  },
  {
    question: "How do I contact support?",
    answer: "Use the form above or email us at support@flickfair.com.",
  },
  {
    question: "How do I update my subscription?",
    answer:
      "Go to your account settings and select 'Subscription' to view available options.",
  },
];

const Support: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSend = () => {
    if (message.trim() !== "") {
      alert("Message sent!");
      setMessage("");
    } else {
      alert("Please enter a message before sending.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8 text-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-100">How can we help?</h1>

      {/* Message Box and Button */}
      <div className="w-full max-w-2xl mx-auto mb-8">
        <textarea
          className="w-full p-4 border border-gray-700 bg-gray-800 text-white rounded-md mb-4"
          rows={8}
          placeholder="Type a question,topic or issue"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-md transition"
        >
          Send
        </button>
      </div>

      {/* FAQ Section */}
      <div className="mt-10 max-w-2xl mx-auto text-left">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">Frequently Asked Questions</h2>
        <ul className="space-y-4">
          {faqs.map((faq, index) => (
            <li key={index} className="border-b border-gray-700 pb-2 cursor-pointer">
              <div
                onClick={() => toggleFAQ(index)}
                className="text-lg font-medium text-gray-300 hover:underline"
              >
                {faq.question}
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-400">{faq.answer}</p>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Section */}
      <div className="mt-12 max-w-2xl mx-auto text-left">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">Contact Us</h2>
        <p className="mb-2">
          Email:{" "}
          <a
            href="mailto:support@flickfair.com"
            className="text-gray-300 hover:underline"
          >
            support@flickfair.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:+1234567890" className="text-gray-300 hover:underline">
            +1 (234) 567-890
          </a>
        </p>
      </div>
    </div>
  );
};

export default Support;
;
