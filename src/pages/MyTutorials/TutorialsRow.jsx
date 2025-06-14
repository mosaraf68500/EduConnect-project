import React from "react";
import Swal from "sweetalert2";

const TutorialsRow = ({ tutorial, index, setallTutorial }) => {
  // console.log(setallTutorial)
  const { username, _id, image, language, price, description, review } =
    tutorial;
  // console.log(_id)
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
        fetch(`http://localhost:5000/tutorials/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your tutorial has been deleted.",
                icon: "success",
              });
              // ⛳️ Fix this part: update the full list
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
    console.log("Update clicked for:", tutorial._id);
    // Add update logic here
  };

  return (
    <tr className="border border-[#1EC28E] text-xs sm:text-sm md:text-base">
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
      <td className="border border-[#1EC28E] px-2 py-1">{description}</td>
      <td className="border border-[#1EC28E] px-2 py-1">{review}</td>

      <td className="border border-[#1EC28E] px-2 py-1 whitespace-nowrap">
        <div className="flex flex-col sm:flex-row gap-2 justify-around items-center">
          <button
            onClick={handleUpdate}
            className="btn btn-xs sm:btn-sm md:btn-md  bg-[#1EC28E] text-white"
          >
            Update
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-xs sm:btn-sm md:btn-md btn-error"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TutorialsRow;
