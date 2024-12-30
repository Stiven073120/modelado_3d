import React from "react";

const ButtonSidebarPrincipal = ({ title, isSelected, onClick }) => {
  return (
    <button
      className={`text-xl font-semibold p-2 ${isSelected ? "bg-white" : "bg-transparent"} border-none cursor-pointer p-5 ml-10 rounded-l-3xl`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ButtonSidebarPrincipal;