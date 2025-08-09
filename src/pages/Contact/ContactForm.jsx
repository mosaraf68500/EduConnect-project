import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 my-4 bg-white rounded-lg shadow-lg flex flex-wrap gap-10">
      {/* Left side */}
      <div className="w-full md:w-1/4  rounded-lg p-4 shadow-sm bg-gray-50">
        <img
          src="https://i.ibb.co/S4XQmR1Z/callgirl.png"
          alt="Support"
          className="mb-6 rounded-md object-cover w-full "
        />
        <div className="border-b border-gray-300 pb-4 mb-6">
          <h3 className="font-semibold text-md text-gray-900 mb-2">Meet our Company</h3>
          <p className="text-gray-700 leading-relaxed text-sm">
            111 Street and house #1 Dhaka, <br />
            Barishal 99221 Bangladesh
          </p>
        </div>
        <div className="border-b border-gray-300 pb-4 mb-6">
          <h3 className="font-semibold text-md text-gray-900 mb-2">Get in Touch</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            <span className="font-semibold">Office:</span> 123-123-1234 <br />
            <span className="font-semibold">Fax:</span> 123-323-3343 <br />
            <span className="font-semibold">Toll Free:</span> 123-425-6234
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-md text-gray-900 mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-gray-600">
            {/* Replace with actual social icons */}
            <a href="https://www.facebook.com/mosaraf.hossion.94" aria-label="Facebook" className="hover:text-[#1EC28E] transition">
              <svg
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35c-.73 0-1.325.595-1.325 1.325v21.351c0 .729.595 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.796.143v3.243l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.311h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.595 1.324-1.325V1.325C24 .595 23.405 0 22.675 0z" />
              </svg>
            </a>
            <a href="https://x.com/home" aria-label="Twitter" className="hover:text-[#1EC28E] transition">
              <svg
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M23.954 4.569c-.885.388-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.563-2.005.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-2.723 0-4.93 2.206-4.93 4.93 0 .39.045.765.127 1.124-4.094-.205-7.725-2.167-10.157-5.144-.424.728-.666 1.574-.666 2.476 0 1.708.87 3.215 2.188 4.099-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.824-.413.111-.849.171-1.296.171-.317 0-.626-.03-.928-.086.626 1.956 2.444 3.379 4.6 3.418-1.68 1.319-3.808 2.106-6.114 2.106-.397 0-.789-.023-1.176-.067 2.179 1.396 4.768 2.21 7.557 2.21 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.633.962-.695 1.8-1.562 2.46-2.549z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/mosaraf-hossen-a02553311/" aria-label="LinkedIn" className="hover:text-[#1EC28E] transition">
              <svg
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764 0-.974.784-1.764 1.75-1.764s1.75.79 1.75 1.764c0 .974-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.026-3.059-1.865-3.059-1.867 0-2.153 1.46-2.153 2.967v5.696h-3v-11h2.881v1.507h.041c.401-.76 1.379-1.561 2.84-1.561 3.036 0 3.598 2 3.598 4.598v6.456z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1 min-w-[320px] bg-white rounded-lg shadow-md p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Please Fill the Form below.</h2>
        <p className="text-gray-600 mb-8 text-sm">
          Once we receive your information our representative will get back to you within 24 hours.
        </p>

        <form className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              placeholder="Your name here..."
              className="flex-1 text-sm border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
            <input
              type="text"
              placeholder="Your last name here..."
              className="flex-1 text-sm border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="url"
              placeholder="Enter your Website ..."
              className="flex-1 text-sm border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <input
              type="text"
              placeholder="Reason contacting us ..."
              className="flex-1 border text-sm border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          <select
            className="w-full text-sm border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Choose Course
            </option>
            <option value="course1">Course 1</option>
            <option value="course2">Course 2</option>
            <option value="course3">Course 3</option>
          </select>

          <select
            className="w-full text-sm border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Choose Teacher
            </option>
            <option value="teacher1">Teacher 1</option>
            <option value="teacher2">Teacher 2</option>
            <option value="teacher3">Teacher 3</option>
          </select>

          <textarea
            placeholder="Your message ..."
            rows={5}
            className="w-full text-sm border border-gray-300 rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#1EC28E] text-white text-sm font-semibold py-3 rounded-md hover:bg-[#4e8e7a] transition"
          >
            SEND YOUR MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
