import React from "react";

const Buttons = ({ courentsep, next, back }) => {
  return (
    <div className="w-full flex justify-around">
      {courentsep !== 1 ? (
        <button
          onClick={back}
          className="p-2   border-2 rounded-lg border-red-300 font-bold uppercase hover:bg-red-400 cursor-pointer w-48"
        >
          Previeuse
        </button>
      ) : (
        <div className="p-2    w-48"></div>
      )}

      <button
        onClick={next}
        className="p-2  border-2 rounded-lg border-green-400 font-bold uppercase hover:bg-green-600 cursor-pointer w-48"
      >
        Next
      </button>
    </div>
  );
};

export default Buttons;
