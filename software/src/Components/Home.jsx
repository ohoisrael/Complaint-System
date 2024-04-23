import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

const Home = () => {
  const [complaint, setComplaint] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLevel, setFilterLevel] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/home")
      .then((result) => {
        if (result.data.Status) {
          setComplaint(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/auth/delete_home/" + id)
      .then((result) => {
        if (result.data.Status) {
          window.location.reload();
        } else {
          alert(result.data.Error);
        }
      });
  };

  const filteredComplaint = complaint.filter(
    (c) =>
      (c.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.indexnumber.includes(searchTerm)) &&
      (filterLevel === "" || c.currentlevel === filterLevel)
  );

  return (
    <div>
      <img
        className="mx-auto"
        src="/knowledgelogo.png"
        alt="logo"
        width={500}
      />
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
            placeholder="Search by Full Name or Index Number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <select
            className="form-control mr-2"
            id="filterLevel"
            value={filterLevel}
            onChange={(e) => setFilterLevel(e.target.value)}
          >
            <option value="">Filter by Current Level</option>
            <option value="Level 100">Level 100</option>
            <option value="Level 200">Level 200</option>
            <option value="Level 300">Level 300</option>
            <option value="Level 400">Level 400</option>
            <option value="Awaiting Graduation">Awaiting Graduation</option>
          </select>
        </div>
      </div>

      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Index Number</th>
              <th>Full Name</th>
              <th>Current Level</th>
              <th>Course Title</th>
              <th>Issue with Course</th>
              <th>Student Status</th>
              <th>Complaint Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredComplaint.map((c) => (
              <tr key={c.id}>
                <td>{c.indexnumber}</td>
                <td>{c.fullname}</td>
                <td>{c.currentlevel}</td>
                <td>{c.coursetitle}</td>
                <td>{c.issue}</td>
                <td>{c.studentstatus}</td>
                <td>{c.status}</td>
                <td className="flex gap-1">
                  <Link
                    to={`/edit_complaint/` + c.id}
                    className="btn btn-primary btn-sm"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(c.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link className="text-darkblue pt-4 flex text-2xl font-bold" to="/">
        <FaSignOutAlt size={25} className="mb-2" /> Sign Out
      </Link>
    </div>
  );
};

export default Home;
