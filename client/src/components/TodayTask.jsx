import React from "react";

const TodayTask = () => {
  return (
    <>
      <div className="flex items-center max-w-72 h-32 rounded-xl mt-6 p-4 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
        <div className="flex flex-col">
          <h3 className="font-bold">learn MERN Stack</h3>
          <p className="text-sm">
            learn all day all night at home at Sanfransisico
          </p>
        </div>
        <input type="checkbox" defaultChecked className="checkbox" />
      </div>
    </>
  );
};

export default TodayTask;
