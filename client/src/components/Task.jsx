import React, { useState } from "react";
import EditTaskModal from "./EditTaskModal";
import { removeTask } from "./functions/TaskFunc";

const Task = ({ taskData }) => {
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleRemove = async (id) => {
    removeTask(id).then((res) => console.log(res));
  };
  return (
    <>
      <div className="my-4">
        <div className="flex justify-between items-center max-h-28 py-4 px-8 rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ">
          <div className="flex items-center">
            <input type="checkbox" defaultChecked className="checkbox" />
            <div className="ml-8">
              <h3 className="font-bold text-lg">{taskData.title}</h3>
              <div className="flex items-center">
                <img
                  src="src/assets/icons/calendar.png"
                  alt="calendar"
                  className="w-4 h-4"
                />
                <p className="ml-2 text-sm">{taskData.dueDate}</p>
              </div>
              <p className="text-third-color mt-3">{taskData.description}</p>
            </div>
          </div>
          <div className="flex justify-between w-20">
            <button onClick={() => handleRemove(taskData._id)}>
              <img
                src="src/assets/icons/delete.png"
                alt="delete"
                className="w-8 h-8"
              />
            </button>
            <button onClick={() => setOpenEditModal(true)}>
              <img
                src="src/assets/icons/edit.png"
                alt="edit"
                className="w-8 h-8"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {openEditModal && (
        <EditTaskModal
          setOpenEditModal={setOpenEditModal}
          taskId={taskData._id}
        />
      )}
    </>
  );
};

export default Task;
