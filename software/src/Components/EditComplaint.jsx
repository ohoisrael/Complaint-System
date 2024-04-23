import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const EditComplaint = () => {
  const { id } = useParams();
  const [complaint, setComplaint] = useState({
    indexnumber: "",
    fullname: "",
    contact: "",
    currentlevel: "",
    coursecode: "",
    coursetitle: "",
    courselevel: "",
    academicyear: "",
    semester: "",
    lecturername: "",
    issue: "",
    intake: "",
    yearofadmission: "",
    studentstatus: "",
    faculty: "",
    status: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/home/" + id)
      .then((result) => {
        setComplaint({
          ...complaint,
          indexnumber: result.data.Result[0].indexnumber,
          fullname: result.data.Result[0].fullname,
          contact: result.data.Result[0].contact,
          currentlevel: result.data.Result[0].currentlevel,
          coursecode: result.data.Result[0].coursecode,
          coursetitle: result.data.Result[0].coursetitle,
          courselevel: result.data.Result[0].courselevel,
          academicyear: result.data.Result[0].academicyear,
          semester: result.data.Result[0].semester,
          lecturername: result.data.Result[0].lecturername,
          issue: result.data.Result[0].issue,
          intake: result.data.Result[0].intake,
          yearofadmission: result.data.Result[0].yearofadmission,
          studentstatus: result.data.Result[0].studentstatus,
          faculty: result.data.Result[0].faculty,
          status: result.data.Result[0].status,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/auth/edit_complaint/" + id, complaint)
      .then((result) => {
        if (result.data.Status) {
          navigate("/home");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <div className="container mt-5">
          <div className="rounded p-4 border">
            <div className="col-md-6">
              <h2 className="text-center text-darkblue underline mb-4">
                Edit Result Complaint Form
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="indexnumber" className="form-label">
                    Index Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="indexnumber"
                    placeholder="Enter your Index Number"
                    value={complaint.indexnumber}
                    onChange={(e) =>
                      setComplaint({
                        ...complaint,
                        indexnumber: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="fullname" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullname"
                    placeholder="Enter Full Name"
                    value={complaint.fullname}
                    onChange={(e) =>
                      setComplaint({ ...complaint, fullname: e.target.value })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="contact" className="form-label">
                    Contact
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contact"
                    placeholder="Enter Contact Detail"
                    value={complaint.contact}
                    onChange={(e) =>
                      setComplaint({ ...complaint, contact: e.target.value })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="currentlevel" className="form-label">
                    Current Level
                  </label>
                  <select
                    className="form-select"
                    id="currentlevel"
                    value={complaint.currentlevel}
                    onChange={(e) =>
                      setComplaint({
                        ...complaint,
                        currentlevel: e.target.value,
                      })
                    }
                  >
                    <option>Level 100</option>
                    <option>Level 200</option>
                    <option>Level 300</option>
                    <option>Level 400</option>
                    <option>Awaiting Graduation</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="coursecode" className="form-label">
                    Course Code
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="coursecode"
                    placeholder="eg. IT 232"
                    value={complaint.coursecode}
                    onChange={(e) =>
                      setComplaint({ ...complaint, coursecode: e.target.value })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="coursetitle" className="form-label">
                    Course Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="coursetitle"
                    placeholder="eg. Digital Computer Design"
                    value={complaint.coursetitle}
                    onChange={(e) =>
                      setComplaint({
                        ...complaint,
                        coursetitle: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="lecturername" className="form-label">
                    Lecturer Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lecturername"
                    placeholder="Lecturer Name"
                    value={complaint.lecturername}
                    onChange={(e) =>
                      setComplaint({
                        ...complaint,
                        lecturername: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="courselevel" className="form-label">
                    Course Level
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="courselevel"
                    placeholder="Enter Course Level"
                    value={complaint.courselevel}
                    onChange={(e) =>
                      setComplaint({
                        ...complaint,
                        courselevel: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="academicyear" className="form-label">
                    Academic Year
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="academicyear"
                    placeholder="eg. 2022/2023"
                    value={complaint.academicyear}
                    onChange={(e) =>
                      setComplaint({
                        ...complaint,
                        academicyear: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="semester" className="form-label">
                    Semester
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="semester"
                    placeholder="Enter Semester"
                    value={complaint.semester}
                    onChange={(e) =>
                      setComplaint({ ...complaint, semester: e.target.value })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="issue" className="form-label">
                    Issue with Course
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="issue"
                    placeholder="eg. Incomplete, Not Published etc"
                    value={complaint.issue}
                    onChange={(e) =>
                      setComplaint({ ...complaint, issue: e.target.value })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="intake" className="form-label">
                    Intake
                  </label>
                  <select
                    className="form-select"
                    id="intake"
                    value={complaint.intake}
                    onChange={(e) =>
                      setComplaint({ ...complaint, intake: e.target.value })
                    }
                  >
                    <option>January</option>
                    <option>May</option>
                    <option>September</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="yearofadmission" className="form-label">
                    Year of Admission
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="yearofadmission"
                    placeholder="Year of Admission"
                    value={complaint.yearofadmission}
                    onChange={(e) =>
                      setComplaint({
                        ...complaint,
                        yearofadmission: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="studentstatus" className="form-label">
                    Student Status
                  </label>
                  <select
                    className="form-select"
                    id="studentstatus"
                    value={complaint.studentstatus}
                    onChange={(e) =>
                      setComplaint({
                        ...complaint,
                        studentstatus: e.target.value,
                      })
                    }
                  >
                    <option>Graduated</option>
                    <option>Continuing /Defered</option>
                    <option>Awaiting Graduation</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="faculty" className="form-label">
                    Faculty
                  </label>
                  <select
                    className="form-select"
                    id="faculty"
                    value={complaint.faculty}
                    onChange={(e) =>
                      setComplaint({
                        ...complaint,
                        faculty: e.target.value,
                      })
                    }
                  >
                    <option>Faculty of Engineering</option>
                    <option>Faculty of Computing & Information Systems</option>
                    <option>Faculty of IT Business</option>
                    <option>Faculty of Engineering</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="status" className="form-label">
                    Status
                  </label>
                  <select
                    className="form-select"
                    id="status"
                    value={complaint.status}
                    onChange={(e) =>
                      setComplaint({
                        ...complaint,
                        status: e.target.value,
                      })
                    }
                  >
                    <option>Pending</option>
                    <option>Resolved</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100 bg-darkblue"
                >
                  Edit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-5 text-center ">
        © 2024 Software Unit | (GCTU). All Rights Reserved
      </footer>
    </div>
  );
};

export default EditComplaint;
