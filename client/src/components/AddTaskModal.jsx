import React, { useState } from "react";
import { DatePicker } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";
import { createTask } from "./functions/TaskFunc";

const AddTaskModal = ({ setOpenModal }) => {
  const [form, setForm] = useState({
    title: "",
    dueDate: null,
    description: "",
  });
  const [errorInput, setErrorInput] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateInput = () => {
    const { title, dueDate, description } = form;
    if (!title || !dueDate || !description) {
      return "please fill in all fields";
    }
  };

  const addTask = async () => {
    try {
      createTask(form);
      setOpenModal(false); // ปิด modal หลังส่งสำเร็จ
    } catch (error) {
      console.error("Error creating task:", error);
      setErrorInput("ไม่สามารถสร้างงานได้");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateError = validateInput();
    if (validateError) {
      setErrorInput(validateError);
      return;
    } else {
      addTask();
    }
  };
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-6 w-96 relative">
          <button
            className="absolute right-2 top-2 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
            onClick={() => setOpenModal(false)}
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">Add new task :D</h3>
          {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}

          <form action="" onSubmit={handleSubmit}>
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
                    name="title"
                    onChange={(e) => handleChange(e)}
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
                  name="dueDate"
                  onChange={(date) => setForm({ ...form, dueDate: date })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Description
                </label>
                <textarea
                  placeholder="Bio"
                  className="textarea textarea-bordered textarea-md w-full max-w-xs"
                  name="description"
                  onChange={(e) => handleChange(e)}
                ></textarea>
              </div>
            </div>
            {errorInput}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="btn bg-green-500 text-white w-20 mx-2"
              >
                Add
              </button>
              <button className="btn bg-red-500 text-white w-20 mx-2">
                clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTaskModal;
