import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Complaints = () => {
  return (
    <div>
      <div className="flex gap-2 text-darkblue text-2xl font-bold underline items-center">
        <Link to="/lecturer">
          <FaArrowLeft size={25} />
        </Link>
        Complaints
      </div>
      <div className="card mt-4 py-2 bg-liteblue">
        <p className="px-2 m-2">
          Showing List of Student's Result Issues Complaints
        </p>
      </div>
      <div className="mt-4">
        <input
          type="text"
          className="form-control mr-2"
          id="search"
          placeholder="Search"
        />
      </div>
      <div className="mt-4">
        <input
          type="text"
          className="form-control mr-2"
          id="Filter"
          placeholder="Filter"
        />
      </div>
    </div>
  );
};

export default Complaints;
