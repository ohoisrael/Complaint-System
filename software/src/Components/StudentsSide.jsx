import axios from "axios";
import React, { useState } from "react";

const StudentsSide = () => {
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
    status: "Pending",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/auth/add_complaint", complaint)
      .then((result) => {
        if (result.data.Status) {
          alert("Complaint Submitted Successfully");
        } else {
          alert("Error, Try again");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="font-bold font-serif text-1xl">
        <div>
          <img
            className="mx-auto"
            src="./knowledgelogo.png"
            alt="logo"
            width={500}
          />
        </div>
        <div className="card py-2 bg-liteblue mt-2">
          <p className="text-1xl text-center px-2 m-2 text-lg">Welcome!</p>
        </div>
        <div className="container mt-5">
          <div className="rounded p-4 border">
            <div className="col-md-6">
              <h2 className="text-center text-darkblue mb-4">
                Result Complaint Form
              </h2>
              <p className="text-danger">
                Failure To Provide Correct Information Will Go Against You
              </p>

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

                <button
                  type="submit"
                  className="btn btn-success w-100 bg-darkblue"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-5 text-center ">
        © 2024 Software Unit | (GCTU). All Rights Reserved
      </footer>
    </>
  );
};

export default StudentsSide;
