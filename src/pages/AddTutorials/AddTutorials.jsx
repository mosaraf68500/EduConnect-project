import React, { use } from "react";
import { AuthContex } from "../../Contex/AuthContex";

const AddTutorials = () => {
    const {user}=use(AuthContex);
    console.log(user.displayName)
  const handleSubmit = (e) => {
    e.preventDefault();
    const form=e.target;
     const formData = new FormData(form);
    const tutorialData = Object.fromEntries(
      formData.entries()
    );
    console.log(tutorialData);
  };

  return (
    <div className="max-w-5xl mx-auto p-10  shadow-lg rounded-xl bg-gray-50 my-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#1EC28E]">
        Add a New Tutorial
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column 1 */}
          <div className="space-y-2">
            {/* Username */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                User Name (Logged In)
              </label>
              <input
                type="text"
                name="username"
                value={user.displayName}
                readOnly
                className="w-full border-[1.5px]  border-[#1EC28E] rounded-md p-3 bg-gray-100 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email (Logged In)
              </label>
              <input
                type="email"
                name="email"
                value={user.email}
                readOnly
                className="w-full border-[1.5px] border-[#1EC28E] rounded-md p-3 bg-gray-100 outline-none"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Image (Tutorial Image)
              </label>
              <input
                type="text"
                name="image"
                placeholder="Tutorial Image"
                className="w-full border-[1.5px] border-[#1EC28E] rounded-md p-3 outline-none file:border-0 file:bg-[#1EC28E] file:text-white file:rounded-md file:px-4 file:py-2"
              />
            </div>

            {/* Language */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Language
              </label>
              <input
                type="text"
                name="language"
                placeholder="e.g. JavaScript, Python"
                className="w-full border-[1.5px] border-[#1EC28E] rounded-md p-3 outline-none"
              />
            </div>
          </div>
          

          {/* Column 2 */}
          <div className="space-y-1">
            
            {/* Price */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Price
              </label>
              <input
                type="number"
                name="price"
                placeholder="Enter price in BD"
                className="w-full border-[1.5px] border-[#1EC28E] rounded-md p-3 outline-none"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Description
              </label>
              <textarea
                name="description"
                rows="5"
                placeholder="Write tutorial description..."
                className="w-full border-[1.5px] border-[#1EC28E] rounded-md p-3 outline-none resize-none"
              ></textarea>
            </div>

            {/* Review */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Review
              </label>
              <input
                type="number"
                name="review"
                value="0"
                readOnly
                className="w-full border-[1.5px] border-[#1EC28E] rounded-md p-3 bg-gray-100 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center w-full">
          <button
            type="submit"
            className="w-full bg-[#1EC28E] hover:bg-[#16a673] transition duration-300 text-white font-semibold py-3 px-8 rounded-lg shadow-md cursor-pointer"
          >
            Add Tutorial
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTutorials;
