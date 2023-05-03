import React from "react";

function InputOption({ title, color, Icon }) {
  return (
    <div className="flex items-center mt-4 text-gray-400 p-3 cursor-pointer hover:bg-white hover:rounded-xl">
      <Icon style={{ color: color }} />
      <h4 className="ml-2">{title}</h4>
    </div>
  );
}

export default InputOption;
