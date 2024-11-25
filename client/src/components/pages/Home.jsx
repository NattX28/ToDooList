import React, { useState } from "react";
import Navbar from "../layouts/Navbar";
import Task from "../Task";
import TodayTask from "../TodayTask";

import AddTaskModal from "../AddTaskModal";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div>
        <Navbar />
        <h2 className="text-xl font-bold mt-10">Today</h2>
        <p>Mon, 25 November, 2024</p>
        <TodayTask />
        <h2 className="text-xl font-bold mt-10">All Tasks</h2>
        <div className="flex mt-4">
          <button className="flex justify-center items-center bg-contrast w-28 min-h-8 rounded-md text-white mr-4">
            incomplete
          </button>
          <button className="flex justify-center items-center bg-second w-28 min-h-8 rounded-md text-main-color mr-4">
            complete
          </button>
        </div>
        <Task />
        {/* <Task /> */}
      </div>
      <button
        className="flex justify-center items-center w-14 h-14 bg-contrast rounded-full fixed bottom-8 right-8"
        onClick={() => setOpenModal(true)}
      >
        <img src="src/assets/icons/plus.png" alt="plus" />
      </button>
      {openModal && <AddTaskModal setOpenModal={setOpenModal} />}
    </>
  );
};

export default Home;
