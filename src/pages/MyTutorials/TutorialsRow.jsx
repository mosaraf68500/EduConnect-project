import React, { useState } from "react";
import Swal from "sweetalert2";

const TutorialsRow = ({ tutorial, index, setallTutorial }) => {
  const { username, _id, image, language, price, description, review } =
    tutorial;

  const [formModal, setFormModal] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://edu-connect-server-side.vercel.app/tutorials/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your tutorial has been deleted.",
                "success"
              );
              setallTutorial((prev) => prev.filter((reci) => reci._id !== id));
            }
          })
          .catch((error) => {
            Swal.fire("Error", "Failed to delete item", "error");
            console.error("Delete error:", error);
          });
      }
    });
  };

  const handleUpdate = () => {
    setFormModal(true);
  };

  const handleCloseFormModal = () => {
    setFormModal(false);
  };

  const handleUpdateForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedTutorial = {
      image: form.image.value,
      language: form.language.value,
      price: form.price.value,
      description: form.description.value,
    };

    fetch(`https://edu-connect-server-side.vercel.app/tutorials/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTutorial),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Success", "Tutorial updated successfully", "success");
          setallTutorial((prev) =>
            prev.map((item) =>
              item._id === _id ? { ...item, ...updatedTutorial } : item
            )
          );
          handleCloseFormModal();
        }
      })
      .catch((error) => {
        Swal.fire("Error", "Update failed", "error");
        console.error(error);
      });
  };

  return (
    <>
      <tr className="border border-[#1EC28E] text-xs sm:text-sm md:text-base text-center">
        <th className="border border-[#1EC28E] px-2 py-1 whitespace-nowrap">
          {index + 1}
        </th>

        <td className="border border-[#1EC28E] px-2 py-1 text-center">
          <div className="flex justify-center items-center">
            <img
              src={image}
              alt={username}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-md object-cover"
            />
          </div>
        </td>

        <td className="border border-[#1EC28E] px-2 py-1 whitespace-nowrap">
          {language}
        </td>

        <td className="border border-[#1EC28E] px-2 py-1 whitespace-nowrap">
          ${price}
        </td>

        {/* ✅ Truncated description with modal */}
        <td
          className="border border-[#1EC28E] px-2 py-1 text-left cursor-pointer"
          title={
            description.length > 50 ? "Click to view full description" : ""
          }
          onClick={() =>
            description.length > 50 && setShowFullDescription(true)
          }
        >
          {description.length > 50
            ? description.slice(0, 50) + "..."
            : description}
        </td>

        <td className="border border-[#1EC28E] px-2 py-1">{review}</td>

        <td className="border border-[#1EC28E] px-2 py-1 whitespace-nowrap">
          <div className="flex flex-col sm:flex-row gap-2 justify-around items-center">
            <button
              onClick={handleUpdate}
              className="btn btn-xs sm:btn-sm md:btn-md bg-[#1EC28E] text-white"
            >
              Update
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-xs sm:btn-sm md:btn-md btn-error text-white"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>

      {/*  Full description modal */}
      {showFullDescription && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <h3 className="text-xl font-bold mb-4 text-[#1EC28E] text-center">
              Full Description
            </h3>
            <p className="text-gray-700 whitespace-pre-wrap">{description}</p>
            <button
              onClick={() => setShowFullDescription(false)}
              className="absolute top-2 right-3 text-xl cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Update form modal */}
      {formModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-80">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
            <h3 className="text-xl font-bold mb-4 text-center text-[#1EC28E]">
              Update Tutorial
            </h3>
            <form onSubmit={handleUpdateForm} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Image URL
                </label>
                <input
                  type="text"
                  name="image"
                  defaultValue={image}
                  className="w-full border-2 p-2 rounded border-[#1EC28E]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Language
                </label>
                <input
                  type="text"
                  name="language"
                  defaultValue={language}
                  className="w-full border-2 p-2 rounded border-[#1EC28E]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  defaultValue={price}
                  className="w-full border-2 p-2 rounded border-[#1EC28E]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  defaultValue={description}
                  className="w-full border-2 p-2 rounded border-[#1EC28E]"
                ></textarea>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={handleCloseFormModal}
                  className="px-4 py-2 bg-gray-300 rounded cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#1EC28E] cursor-pointer text-white rounded"
                >
                  Save Tutorial
                </button>
              </div>
            </form>
            <button
              onClick={handleCloseFormModal}
              className="absolute top-2 right-3 text-xl cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TutorialsRow;
