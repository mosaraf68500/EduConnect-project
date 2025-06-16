import React, { useContext } from "react";
import { AuthContex } from "../../Contex/AuthContex";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../../LoadingPage/Loading";
import { Helmet } from "react-helmet";

const AddTutorials = () => {
  const { user } = useContext(AuthContex);

  if (!user) return <Loading></Loading>;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const tutorialData = Object.fromEntries(formData.entries());

    axios
      .post(
        "https://edu-connect-server-side.vercel.app/tutorials",
        tutorialData
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your tutorial has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong while adding the tutorial!",
        });
      });

    // console.log(tutorialData);
  };

  return (
    <div className="max-w-5xl mx-auto p-10 shadow-lg rounded-xl bg-gray-50 my-10">
      <Helmet>
            <title>
                Add Tutorials
            </title>
        </Helmet>
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
                value={user?.displayName || ""}
                readOnly
                className="w-full border-[1.5px] dark:text-gray-600 border-[#1EC28E] rounded-md p-3 bg-gray-100 outline-none"
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
                value={user?.email || ""}
                readOnly
                className="w-full border-[1.5px] border-[#1EC28E] dark:text-gray-600 rounded-md p-3 bg-gray-100 outline-none"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Image (Tutorial Image)
              </label>
              <input
                type="text"
                name="image"
                placeholder="Tutorial image URL"
                required
                className="w-full border-[1.5px] dark:text-gray-600 border-[#1EC28E] rounded-md p-3 outline-none"
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
                required
                className="w-full border-[1.5px] dark:text-gray-600 border-[#1EC28E] rounded-md p-3 outline-none"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-2">
            {/* Price */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Price
              </label>
              <input
                type="number"
                name="price"
                placeholder="Enter price in BDT"
                required
                className="w-full border-[1.5px] dark:text-gray-600 border-[#1EC28E] rounded-md p-3 outline-none"
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
                required
                className="w-full dark:text-gray-600 border-[1.5px] border-[#1EC28E] rounded-md p-3 outline-none resize-none"
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
                className="w-full dark:text-gray-600 border-[1.5px] border-[#1EC28E] rounded-md p-3 bg-gray-100 outline-none"
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
