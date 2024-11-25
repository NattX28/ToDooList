import React from "react";
import { DatePicker } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";

const EditTaskModal = ({ setOpenEditModal }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-6 w-96 relative">
          <button
            className="absolute right-2 top-2 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
            onClick={() => setOpenEditModal(false)}
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">Edit task :D</h3>
          {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}

          <form action="">
            <div className="space-y-4">
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Task name</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  When to do?
                </label>
                <DatePicker
                  placeholder="Select Date"
                  style={{ width: "60%" }}
                  size="lg"
                  container={document.body} // This is important!
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Description
                </label>
                <textarea
                  placeholder="Bio"
                  className="textarea textarea-bordered textarea-md w-full max-w-xs"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="btn bg-green-500 text-white w-20 mx-2"
              >
                Add
              </button>
              <button
                type="submit"
                className="btn bg-red-500 text-white w-20 mx-2"
              >
                clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditTaskModal;
