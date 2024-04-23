import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosStats } from "react-icons/io";
import { MdGridView } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const LecturerSide = () => {
  const [complaintTotal, setcomplaintTotal] = useState();
  useEffect(() => {
    complaintCount();
  }, []);
  const complaintCount = () => {
    axios.get("http://localhost:3000/auth/complaint_count").then((result) => {
      if (result.data.Status) {
        setcomplaintTotal(result.data.Result[0].complaint);
      }
    });
  };

  return (
    <div>
      <img
        className="mx-auto"
        src="./knowledgelogo.png"
        alt="logo"
        width={500}
      />
      <header className="flex gap-2 text-2xl text-darkblue font-bold underline py-2 align-items-center">
        <AiOutlineHome size={25} />
        Home
      </header>
      <div className="card py-2 bg-liteblue">
        <p className="text-1xl px-2 m-2">Welcome Admin</p>
      </div>
      <div className="card py-2 mt-4">
        <div className="px-2 m-2">Academic Year</div>
        <div className="text-2xl font-bold px-2 m-2">
          2023/2024, First Semester
        </div>
      </div>
      <div className="flex gap-2 text-2xl align-items-center text-darkblue font-bold py-2 underline mt-4">
        <IoIosStats size={25} className="mb-2" />
        Stats
      </div>
      <div className="mt-2 px-3 card w-50 bg-lightblue">
        <p className="font-bold">Complaints</p>
        <p className="text-2xl font-bold">{complaintTotal}</p>
        <p className="">total complaints</p>
      </div>
      <div className="flex gap-2 text-2xl font-bold underline py-2 align-items-center mt-4">
        <Link className="text-darkblue flex" to="/home">
          <MdGridView size={25} className="mb-2" />
          View All Complaints
        </Link>
      </div>
      <Link className="text-darkblue pt-4 flex text-2xl font-bold" to="/">
        <FaSignOutAlt size={25} className="mb-2" /> Sign Out
      </Link>
      <footer className="mt-5 text-center ">
        © 2024 Software Unit | (GCTU). All Rights Reserved
      </footer>
    </div>
  );
};

export default LecturerSide;
